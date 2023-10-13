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
  const initialRoute = isOrganization ? "Members" : "GetEvents";
  return (
    <Fragment>
      <Tab.Navigator
        initialRouteName={initialRoute}
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
          // @ts-ignore
          initialRoute={initialRoute}
          // Change the data prop depending on the user type
          data={isOrganization ? tabMainNavBarOrganization : tabMainNavBarUser}
        />
      </View>
    </Fragment>
  );
};
export default TabNavigation;
