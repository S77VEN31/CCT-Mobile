// Axios
import axios from "axios";
// Routes
import { dataRoutes } from "../routes/routes";

const { getCarrers, getEventCategories } = dataRoutes;

export const getCarrersList = async () => {
  try {
    const response = await axios.get(getCarrers);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const getCategoriesList = async () => {
  try {
    const response = await axios.get(getEventCategories);
    return response;
  } catch (error: any) {
    return error.response;
  }
};
