import * as trpcExpress from '@trpc/server/adapters/express';
import express from 'express';
import { createServer } from 'http';
import { MongoClient } from 'mongodb';
import passport from 'passport';
import { Strategy as DiscordStrategy } from 'passport-discord';
import { createContext } from './context/context';
import { t } from './routers/tRPCRouter';
import dotenv from 'dotenv';



// Load environment variables
dotenv.config();

// MongoDB setup
const client = new MongoClient('mongodb://localhost:27017');

async function connectToDb() {
    await client.connect();
}

connectToDb();

const db = client.db('gachaworld');


// Passport setup
passport.use(new DiscordStrategy({
    clientID: process.env.DISCORD_CLIENT_ID!,
    clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    callbackURL: "http://localhost:3000/auth/discord/callback",
    scope: ['identify', 'guilds']
}, async (accessToken, refreshToken, profile, done) => {
    const user = await db.collection('users').findOne({ discordId: profile.id });
    if (user) {
        return done(null, user);
    } else {
        const newUser = {
            discordId: profile.id,
            username: profile.username,
            discriminator: profile.discriminator,
            avatar: profile.avatar,
            guilds: profile.guilds
        };
        await db.collection('users').insertOne(newUser);
        return done(null, newUser);
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
    // Define your routes here
});

// Express setup
const app = express();
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/discord', passport.authenticate('discord'));
app.get('/auth/discord/callback', passport.authenticate('discord', { failureRedirect: '/login' }), function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});

app.use('/api/trpc', trpcExpress.createExpressMiddleware({ router: AppRouter, createContext }));

const server = createServer(app);
server.listen(3000);
