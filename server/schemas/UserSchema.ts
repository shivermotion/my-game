import {z} from 'zod';

export const UserSchema = z.object({
  // "_id": {
  //   "$oid": "64d73269454a5554e3ee8166"
  // },
  // "discordId": "252534185317761026",
  // "username": ".shamtaro",
  // "discriminator": "0",
  // "avatar": "a6fff42eb6c13432ef325d294fa130ad",
  // "guilds": null
  _id: z.string(),
  discordId: z.string(),
  username: z.string(),
  discriminator: z.string(),
  avatar: z.string(),
  guilds: z.null()
});

export type User = z.infer<typeof UserSchema>;