import { z } from 'zod';
import { t } from "../routers/tRPCRouter";
import { db } from '../server';
import { UserSchema } from '../schemas/UserSchema';

export const UserRouter = t.router({
  getUser: t.procedure.input(z.string().optional()).query(async ({ input, ctx }) => {
    const discordId = input ?? ctx.user?.discordId;
    if (!discordId) {
      throw new Error("Discord ID not provided");
    }
    const user = await db.collection('users').findOne({ discordId });
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }),
});
