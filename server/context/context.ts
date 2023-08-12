import { CreateExpressContextOptions } from "@trpc/server/adapters/express";

export function createContext({ req, res }: CreateExpressContextOptions) {
  const token = req.headers.auth;
  // console.log("THIS IS THE RESPONSE OBJ", res)
  return {
    req,
    res,
    token,
  };
}