// Routes
import { userRoutes } from "../routes/routes";
// Axios
import axios from "axios";
// Use Modal
import { useModal } from "../../context/ModalContext";
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
  const { handleModal } = useModal();
  try {
    const response = await axios.put(updateProfileInformation, {
      name,
      carne,
      phone,
      profilePicture,
    });
    console.log(response);
  } catch (error) {
    // Handle the error here
    console.error(error);
    console.error("An error occurred while updating profile info:");
  }
};
