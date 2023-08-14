import { CreateExpressContextOptions } from "@trpc/server/adapters/express";

type UserContext = {
  discordId: string;
  username: string;
  discriminator: string;
  avatar: string;
  guilds: any;
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