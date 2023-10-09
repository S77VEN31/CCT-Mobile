// Routes
import { userRoutes } from "../routes/routes";
// Axios
import axios from "axios";
// Interfaces

const { updateProfileInformation } = userRoutes;

export const updateProfileInfo = async (props: any) => {
  try {
    const response = await axios.put(updateProfileInformation, props);
    return response;
  } catch (error: any) {
    return error.response;
  }
};
