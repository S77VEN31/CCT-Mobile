// Tab Screens
import About from "../../screens/About/About";
import Menu from "../../screens/Menu/Menu";

// Testing Screens
import Wander from "../../screens/Testing/Wander/Wander";
import Mariana from "../../screens/Testing/Mariana/Mariana";
import Joselyn from "../../screens/Testing/Joselyn/Joselyn";

type TabScreenProps = {
  name: string;
  component: React.FC;
};

export const TabNavigationConstants = {
  tabScreenProps: [
    {
      name: "Menu",
      component: Menu,
    },
    {
      name: "About",
      component: About,
    },
    {
      name: "Joselyn",
      component: Joselyn,
    },
    {
      name: "Mariana",
      component: Mariana,
    },
    {
      name: "Wander",
      component: Wander,
    },
  ] as TabScreenProps[],
  tabMainNavBarUser: [
    {
      name: "Menu",
      icon: "menu",
    },
    {
      name: "About",
      icon: "info",
    },
    {
      name: "Joselyn",
      icon: "badge",
    },
    {
      name: "Mariana",
      icon: "badge",
    },
    {
      name: "Wander",
      icon: "badge",
    },
  ],
  tabMainNavBarOrganization: [
    {
      name: "Menu",
      icon: "menu",
    },
    {
      name: "About",
      icon: "info",
    },
    {
      name: "Joselyn",
      icon: "badge",
    },
    {
      name: "Mariana",
      icon: "badge",
    },
    {
      name: "Wander",
      icon: "badge",
    },
  ],
};
