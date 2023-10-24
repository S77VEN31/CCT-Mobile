// Axios
import axios from "axios";
// Routes
import { eventRoutes } from "../routes/routes";

const { postNewEvent } = eventRoutes;

export const createEvent = async (props: any) => {
  try {
    const response = await axios.post(postNewEvent, props);
    return response;
  } catch (error: any) {
    return error.response;
  }
};
