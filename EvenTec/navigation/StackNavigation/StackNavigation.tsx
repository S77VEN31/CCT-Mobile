// React Native
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Constants
import { StackNavigationConstants } from "../../constants/StackNavigationConstants";

const StackNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator();
  const { stackScreenProps } = StackNavigationConstants;
  return (
    <Stack.Navigator>
      {stackScreenProps.map(({ ...props }, key) => {
        return <Stack.Screen {...props} key={key} />;
      })}
    </Stack.Navigator>
  );
};
export default StackNavigator;
