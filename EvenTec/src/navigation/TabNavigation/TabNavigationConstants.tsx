// Tab Screens
// Organization
import HandleEvents from "../../screens/Organization/HandleEvents/HandleEvents";
import Members from "../../screens/Organization/Members/Members";
import OrganizationNotifications from "../../screens/Organization/OrganizationNotifications/OrganizationNotifications";
import Stats from "../../screens/Organization/Stats/Stats";
// User
import GetEvents from "../../screens/User/GetEvents/GetEvents";
import MyEvents from "../../screens/User/MyEvents/MyEvents";
import SendProposal from "../../screens/User/SendProposal/SendProposal";
// Types
type TabScreenProps = {
  name: string;
  component: React.FC;
};

export const TabNavigationConstants = {
  tabScreenPropsUser: [
    {
      name: "GetEvents",
      component: GetEvents,
    },
    {
      name: "SendProposal",
      component: SendProposal,
    },
    {
      name: "MyEvents",
      component: MyEvents,
    },
  ] as TabScreenProps[],
  tabScreenPropsOrganization: [
    {
      name: "Members",
      component: Members,
    },
    {
      name: "HandleEvents",
      component: HandleEvents,
    },
    {
      name: "OrganizationNotifications",
      component: OrganizationNotifications,
    },
    {
      name: "Stats",
      component: Stats,
    },
  ] as TabScreenProps[],
  tabMainNavBarUser: [
    {
      name: "GetEvents",
      icon: "event",
      text: "Eventos",
    },
    {
      name: "SendProposal",
      icon: "send",
      text: "Propuesta",
    },
    {
      name: "MyEvents",
      icon: "event",
      text: "Mis Eventos",
    },
  ],
  tabMainNavBarOrganization: [
    {
      name: "Members",
      icon: "supervised-user-circle",
      text: "Miembros",
    },
    {
      name: "HandleEvents",
      icon: "event",
      text: "Eventos",
    },
    {
      name: "OrganizationNotifications",
      icon: "notifications",
      text: "Alertas",
    },
    {
      name: "Stats",
      icon: "insert-chart",
      text: "Estadísticas",
    },
  ],
};
