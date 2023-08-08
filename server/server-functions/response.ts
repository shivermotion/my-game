import { ResponseSchema } from "../schemas/ResponseSchema";



export const resHandler = (props: ResponseSchema) => {
  return {
    data: props?.data,
    code: props?.code,
    type: props?.type,
    log: props?.log,
    alert: props?.alert,
    display: props?.display,
  };
};