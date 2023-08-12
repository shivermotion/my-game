import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import { createContext } from "../context/context";



export const t = initTRPC.context<inferAsyncReturnType<typeof createContext>>().create();