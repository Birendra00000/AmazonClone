import { Api_Url } from "./Api_Url";
import axios from "axios";
const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export const ApiCall = async (resource) => {
  const { data } = await axios.get(`${Api_Url}/${resource}`, config);
  return data;
};
