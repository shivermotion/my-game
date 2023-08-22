import * as trpcExpress from '@trpc/server/adapters/express';
import express from 'express';
import { createServer } from 'http';
import { MongoClient } from 'mongodb';
import passport, { session } from 'passport';
import { Strategy as DiscordStrategy } from 'passport-discord';
import { createContext } from './context/context';
import { t } from './routers/tRPCRouter';
import dotenv from 'dotenv';
import cors from 'cors';
import expressSession from 'express-session';
import { UserRouter } from './routers/UserRouter';
import jwt from 'jsonwebtoken'; // Import JWT library
import {User} from './schemas/UserSchema';
import { Gachapon, GachaponSchema } from './schemas/GachaponSchema';
import { authMiddleware } from './middleware/authMiddleware';


// Load environment variables
dotenv.config();

// MongoDB setup
const client = new MongoClient(process.env.DB_STRING!);

async function connectToDb() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
} catch (err) {
    console.error("Failed to connect to MongoDB", err);
}
}

connectToDb();

export const db = client.db('gachaworld');


// Passport setup
passport.use(new DiscordStrategy({
    clientID: process.env.REACT_APP_DISCORD_CLIENT_ID!,
    clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    callbackURL: "http://localhost:3000/auth/discord/callback",
    scope: ['identify', 'email']
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      const user = await db.collection<User>('users').findOne({ discordId: profile.id });
        if (user) {
            return done(null, user);
        } else {
            const newUser = {
                discordId: profile.id,
                username: profile.username,
                discriminator: profile.discriminator,
                avatar: profile.avatar,
                guilds: profile.guilds,
                money: 1000,
                gachaponCollection: []

            };
            await db.collection('users').insertOne(newUser);
            return done(null, newUser);
        }
    } catch (err) {
        return done(err as any);
    }
}));




passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj as any);
});

// tRPC router
export const AppRouter = t.router({
  user: UserRouter,

});

// Express setup
const app = express();

// Session options
const sessionOptions: expressSession.SessionOptions = {
  secret: process.env.SESSION_SECRET!,
  resave: false,
  saveUninitialized: false,
  
};

// Use express-session middleware
app.use(expressSession(sessionOptions));

// Enable CORS
app.use(cors({
  origin: 'http://localhost:8000', // Replace with your frontend's URL
  credentials: true,
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());



// Define your routes
app.get('/auth/discord', passport.authenticate('discord'));
app.get('/auth/discord/callback', passport.authenticate('discord', { failureRedirect: '/login' }), function(req, res) {
  // Cast req.user to the User type
  const user = req.user as User;

  // Successful authentication, create a JWT with user ID
  const token = jwt.sign({ userId: user.discordId }, process.env.JWT_SECRET!, { expiresIn: '1d' });

  // Send token to client, you can also set it in a cookie or other client-side storage
  res.redirect(`http://localhost:8000/intro?token=${token}`);
});

// Middleware to authenticate user on subsequent requests
app.use((req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string }; // Replace with your secret key
      req.user = { discordId: decoded.userId } as User;
      next();
    } catch {
      res.status(401).send('Unauthorized');
    }
  } else {
    next();
  }
});

app.use(authMiddleware);

// tRPC router
app.use('/api/trpc', trpcExpress.createExpressMiddleware({ router: AppRouter, createContext }));

// Create and start the server
const server = createServer(app);
server.listen(3000, () => console.log('Server listening on port 3000!'));