import axios from "axios";
import { BASE_URL } from "./baseURL";

export const getListProduct = async () => {
  try {
    const respone = await axios.get(`${BASE_URL}/DATA`);
    return respone.data;
  } catch (error) {
    console.log(error);
  }
};
