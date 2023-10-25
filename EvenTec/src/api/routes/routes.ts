const baseRoute = "https://campustecgatoapi-ccf0e8a36684.herokuapp.com/api";

export const authRoutes = {
  loginRoute: `${baseRoute}/login`,
  logoutRoute: `${baseRoute}/logout`,
  registerRoute: `${baseRoute}/register`,
};

export const userRoutes = {
  updateProfileInformation: `${baseRoute}/users/updateProfileInfo`,
  getProfileInformation: `${baseRoute}/profile`,
  getOrganizationMembers: `${baseRoute}/organization/getMembers`,
  addOrganizationMember: `${baseRoute}/organization/addMember`,
  deleteOrganizationMember: `${baseRoute}/organization/deleteMember`,
};

export const dataRoutes = {
  getCarrers: `${baseRoute}/data/carrers`,
  getEventCategories: `${baseRoute}/data/eventCategories`,
};

export const eventRoutes = {
  getAllEvents: `${baseRoute}/getAllEvents`,
  addEvent: `${baseRoute}/organization/createEvent`,
  getOrganizationEvents: `${baseRoute}/organization/getMyEvents`,
  getUserEvents: `${baseRoute}/user/getMyEvents`,
};
