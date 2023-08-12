import { z } from "zod";

export const responseSchema = z.object({
  code: z.number(),
  type: z.enum(["success", "warning", "error"]),
  log: z.string().nullable().optional(),
  alert: z.string().nullable().optional(),
  display: z.string().nullable().optional(),
  data: z.any().optional(),
  
});

export type ResponseSchema = z.infer<typeof responseSchema>;