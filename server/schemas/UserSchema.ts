import {z} from 'zod';

export const UserSchema = z.object({
<<<<<<< HEAD
  // "_id": {
  //   "$oid": "64d73269454a5554e3ee8166"
  // },
  // "discordId": "252534185317761026",
  // "username": ".shamtaro",
  // "discriminator": "0",
  // "avatar": "a6fff42eb6c13432ef325d294fa130ad",
  // "guilds": null
=======
>>>>>>> 4e11c434f7a7e2bcaf8b3497104b3046ff79928f
  _id: z.string(),
  discordId: z.string(),
  username: z.string(),
  discriminator: z.string(),
  avatar: z.string(),
  guilds: z.null(),
  gachaponCollection: z.array(z.object({
    id: z.string(),
    name: z.string(),
    rarity: z.string(),
    type: z.string(),
    genre: z.string(),
    description: z.string(),
    image: z.string(),
    price: z.number(),
    quantity: z.number(),
    owned: z.boolean(),
    modelUrl: z.string(),
    // ... other properties as needed
  }))
});

export type User = z.infer<typeof UserSchema>;