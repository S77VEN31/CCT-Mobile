// Axios
import axios from "axios";
// Routes
import { eventRoutes } from "../routes/routes";

const { getOrganizationEventsRoute, addEventRoute } = eventRoutes;

export const getOrganizationEvents = async () => {
  try {
    const response = await axios.get(getOrganizationEventsRoute);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const addEvent = async (props: any) => {
  try {
    const response = await axios.post(addEventRoute, props);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

