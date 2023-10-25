// Axios
import axios from "axios";
// Routes
import { eventRoutes } from "../routes/routes";

const { addEventRoute } = eventRoutes;

export const addEvent = async (props: any) => {
  try {
    const response = await axios.post(addEventRoute, props);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

