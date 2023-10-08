// Routes
import { userRoutes } from "../routes/routes";
// Axios
import axios from "axios";
// Interfaces
interface profileInfo {
  name: string;
  carne: string;
  phone: string;
  profilePicture: string;
}

const { updateProfileInformation } = userRoutes;

export const updateProfileInfo = async ({
  name,
  carne,
  phone,
  profilePicture,
}: profileInfo) => {
  try {
    const response = await axios.put(updateProfileInformation, {
      name,
      carne,
      phone,
      profilePicture,
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};
