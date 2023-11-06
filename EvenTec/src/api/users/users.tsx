// Axios
import axios from "axios";
// Routes
import { userRoutes } from "../routes/routes";

const {
  getProfileRoute,
  updateProfileRoute,
  getOrganizationMembersRoute,
  addOrganizationMemberRoute,
  deleteOrganizationMemberRoute,
  getOrganizationsRoute,
} = userRoutes;

export const getProfile = async () => {
  try {
    const response = await axios.get(getProfileRoute);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const updateProfile = async (props: any) => {
  try {
    const response = await axios.put(updateProfileRoute, props);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const getOrganizationMembers = async () => {
  try {
    const response = await axios.get(getOrganizationMembersRoute);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const addOrganizationMember = async (props: any) => {
  try {
    const response = await axios.put(addOrganizationMemberRoute, props);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const deleteOrganizationMember = async (props: any) => {
  try {
    const response = await axios.put(deleteOrganizationMemberRoute, props);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const getOrganizations = async () => {
  try {
    const response = await axios.get(getOrganizationsRoute);
    return response;
  } catch (error: any) {
    return error.response;
  }
};
