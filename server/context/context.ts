import { CreateExpressContextOptions } from "@trpc/server/adapters/express";

export type UserContext = {
  discordId: string;
  username: string;
  discriminator: string;
  avatar: string;
  guilds: any;
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  expiryDate: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export function createContext({ req, res }: CreateExpressContextOptions) {
  const token = req.headers.auth;
  // console.log("THIS IS THE RESPONSE OBJ", res)
  const user = req.user as UserContext | undefined;
  return {
    req,
    res,
    token,
    user,
  };
}