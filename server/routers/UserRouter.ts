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

    // Authorization check: Ensure the user is accessing their own information
    if (ctx.user?.discordId !== discordId) {
      throw new Error("Unauthorized");
    }

    const user = await db.collection('users').findOne({ discordId });
    if (!user) {
      throw new Error("User not found");
    }

    // Validate the user object using the UserSchema
    const validationResult = UserSchema.safeParse(user);
    if (!validationResult.success) {
      // Handle validation error (e.g., log the error, return an error response)
      throw new Error('Validation error');
    }

    return validationResult.data; // Return the validated user object
  }),
});
