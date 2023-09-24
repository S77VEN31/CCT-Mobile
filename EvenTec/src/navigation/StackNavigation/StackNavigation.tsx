// React Native
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Constants
import { StackNavigationConstants } from "../../constants/StackNavigationConstants";
//
import { AuthProvider, useAuth } from "../../context/AuthContext";

import Login from "../../screens/Login/Login";
import Home from "../../screens/Home/Home";
import TabNavigation from "../TabNavigation/TabNavigation";


const StackNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator();
  const { stackScreenProps } = StackNavigationConstants;

  const {authState, onLogout} = useAuth();
  return (
    <Stack.Navigator>
      {
        authState.authenticated ? (
          <Stack.Screen name="Home" component={Home} />
        ): (
          <Stack.Screen name="Login" component={Login} />
        )
      }
      {stackScreenProps.map(({ ...props }, key) => {
        return <Stack.Screen {...props} key={key} />;
      })}
    </Stack.Navigator>
  );
};
export default StackNavigator;
