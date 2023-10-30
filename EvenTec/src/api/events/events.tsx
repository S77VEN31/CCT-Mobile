// Axios
import axios from "axios";
// Routes
import { eventRoutes } from "../routes/routes";

const {
  getOrganizationEventsRoute,
  addEventRoute,
  updateEventRoute,
  deleteEventRoute,
} = eventRoutes;

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

export const updateEvent = async (props: any) => {
  try {
    const response = await axios.put(updateEventRoute, props);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const deleteEvent = async (id: any) => {
  try {
    const url = `${deleteEventRoute}/${id}`;
    const response = await axios.delete(url);
    return response;
  } catch (error: any) {
    return error.response;
  }
};
