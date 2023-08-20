import { z } from 'zod';


export const GachaponSchema = z.object({
  id: z.string(),
  name: z.string(),
  rarity: z.string(),
  type: z.string(),
  genre: z.string(),
  modelUrl: z.string(),
  // ... other properties as needed
});

export type Gachapon = z.infer<typeof GachaponSchema>;

