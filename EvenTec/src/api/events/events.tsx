// Axios
import axios from "axios";
// Routes
import { eventRoutes } from "../routes/routes";

const { addEvent } = eventRoutes;

export const createEvent = async (props: any) => {
  try {
    const response = await axios.post(addEvent, props);
    return response;
  } catch (error: any) {
    return error.response;
  }
};
