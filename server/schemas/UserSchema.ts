import {z} from 'zod';

export const UserSchema = z.object({
  _id: z.string(),
  discordId: z.string(),
  username: z.string(),
  discriminator: z.string(),
  avatar: z.string(),
  rank: z.string(),
  guilds: z.null(),
  money: z.number(),
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