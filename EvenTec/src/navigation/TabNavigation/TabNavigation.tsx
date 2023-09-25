// React Native
import { View } from "react-native";
import { Fragment } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Components
import MainNavBar from "../../components/NavBars/MainNavBar/MainNavBar";
// Constants
import { TabNavigationConstants } from "./TabNavigationConstants";
// Styles
import { styles } from "./TabNavigation.style";

const TabNavigation: React.FC = () => {
  const Tab = createBottomTabNavigator();
  const { tabScreenProps } = TabNavigationConstants;
  return (
    <Fragment>
      <Tab.Navigator
        initialRouteName="Menu"
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.displayNone,
        }}
      >
        {tabScreenProps.map(({ ...props }, key) => {
          return <Tab.Screen {...props} key={key} />;
        })}
      </Tab.Navigator>
      <View>
        <MainNavBar />
      </View>
    </Fragment>
  );
};
export default TabNavigation;
