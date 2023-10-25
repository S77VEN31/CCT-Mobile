// Axios
import axios from "axios";
// Routes
import { dataRoutes } from "../routes/routes";

const { getCarrersRoute, getEventCategoriesRoute } = dataRoutes;

export const getCarrers = async () => {
  try {
    const response = await axios.get(getCarrersRoute);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const getEventCategories = async () => {
  try {
    const response = await axios.get(getEventCategoriesRoute);
    return response;
  } catch (error: any) {
    return error.response;
  }
};
