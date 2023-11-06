// Axios
import axios from "axios";
// Routes
import { proposalRoutes } from "../routes/routes";

const { getProposalsRoute, sendProposalRoute } = proposalRoutes;

export const sendProposal = async (props: any) => {
  try {
    const response = await axios.post(sendProposalRoute, props);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const getProposals = async () => {
  try {
    const response = await axios.get(getProposalsRoute);
    return response;
  } catch (error: any) {
    return error.response;
  }
};
