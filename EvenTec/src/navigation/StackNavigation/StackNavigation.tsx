// React Native
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Constants
import { StackNavigationConstants } from "./StackNavigationConstants";
// AuthContext
import { useAuth } from "../../context/AuthContext";
// Screens
import Login from "../../screens/Login/Login";
import TabNavigation from "../TabNavigation/TabNavigation";

const StackNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator();
  const { stackScreenProps } = StackNavigationConstants;
  const { authState } = useAuth();
  return (
    <Stack.Navigator>
      {authState.authenticated ? (
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{ headerShown: false }}
          initialParams={{ isOrganization: authState.data?.isOrganization }}
        />
      ) : (
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      )}
      {stackScreenProps.map(({ ...props }, key) => {
        return <Stack.Screen {...props} key={key} />;
      })}
    </Stack.Navigator>
  );
};
export default StackNavigator;
