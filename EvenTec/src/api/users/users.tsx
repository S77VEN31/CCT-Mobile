// Axios
import axios from "axios";
// Interfaces
interface profileInfo {
  name: string;
  carne: string;
  phone: string;
  profilePicture: string;
}

export const updateProfileInfo = async ({
  name,
  carne,
  phone,
  profilePicture,
}: profileInfo) => {
  try {
    const response = await axios.put(
      "https://campustecgatoapi-ccf0e8a36684.herokuapp.com/api/users/updateProfileInfo",
      {
        name,
        carne,
        phone,
        profilePicture,
      }
    );
    console.log(response.data.message);
  } catch (error) {
    // Handle the error here
    console.error(error);
    console.error("An error occurred while updating profile info:");
  }
};
