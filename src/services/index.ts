

import { api } from "../clients/api";


export const getList = () => {
  return api.get<any>("");
};



