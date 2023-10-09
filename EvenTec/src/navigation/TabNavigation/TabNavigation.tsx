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
// @ts-ignore
const TabNavigation: React.FC = ({ route }) => {
  const Tab = createBottomTabNavigator();
  const { isOrganization } = route.params;
  const { tabScreenProps, tabMainNavBarUser, tabMainNavBarOrganization } =
    TabNavigationConstants;
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
        <MainNavBar
          // Change the data prop depending on the user type
          // @ts-ignore
          data={isOrganization ? tabMainNavBarOrganization : tabMainNavBarUser}
        />
      </View>
    </Fragment>
  );
};
export default TabNavigation;
