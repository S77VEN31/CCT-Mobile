// Tab Screens
import About from "../screens/About/About";
import Restaurants from "../screens/Restaurants/Restaurants";

type TabScreenProps = {
  name: string;
  component: React.FC;
};

export const TabNavigationConstants = {
  tabScreenProps: [
    {
      name: "Restaurants",
      component: Restaurants,
    },
    {
      name: "About",
      component: About,
    },
  ] as TabScreenProps[],
  tabMainNavBar: [
    {
      name: "Restaurants",
      icon: "restaurant-menu",
    },
    {
      name: "About",
      icon: "info",
    },
  ],
};
