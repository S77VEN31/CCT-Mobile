import axios from "axios";
import { dataRoutes } from "../routes/routes";

const { getCarrers } = dataRoutes;

export const getCarrersList = async () => {
  try {
    const response = await axios.get(getCarrers);
    return response;
  } catch (error: any) {
    return error.response;
  }
};
