// Stack Screens
import CreateEvent from "../../screens/Organization/CreateEvent/CreateEvent";
import EditEvent from "../../screens/Organization/EditEvent/EditEvent";
import SetOrganizationInfo from "../../screens/Organization/SetOrganizationInfo/SetOrganizationInfo";
import SetUserInfo from "../../screens/User/SetUserInfo/SetUserInfo";
// Navigation
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

type StackScreenProps = {
  name: string;
  component: React.FC;
  options?: NativeStackNavigationOptions;
};

export const StackNavigationConstants = {
  stackScreenProps: [
    {
      name: "SetUserInfo",
      component: SetUserInfo,
      options: { headerShown: false },
    },
    {
      name: "SetOrganizationInfo",
      component: SetOrganizationInfo,
      options: { headerShown: false },
    },
    {
      name: "CreateEvent",
      component: CreateEvent,
      options: { headerShown: false },
    },
    {
      name: "EditEvent",
      component: EditEvent,
      options: { headerShown: false },
    },
  ] as StackScreenProps[],
};
