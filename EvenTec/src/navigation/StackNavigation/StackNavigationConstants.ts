// Stack Screens
import Register from '../../screens/Register/Register';
import SetUserInfo from '../../screens/User/SetUserInfo/SetUserInfo';
import SetOrganizationInfo from '../../screens/Organization/SetOrganizationInfo/SetOrganizationInfo';
// Navigation
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

type StackScreenProps = {
  name: string;
  component: React.FC;
  options?: NativeStackNavigationOptions;
};

export const StackNavigationConstants = {
  stackScreenProps: [
    {
      name: 'Register',
      component: Register,
      options: { headerShown: false },
    },
    {
      name: 'SetUserInfo',
      component: SetUserInfo,
      options: { headerShown: false },
    },
    {
      name: 'SetOrganizationInfo',
      component: SetOrganizationInfo,
      options: { headerShown: false },
    }
  ] as StackScreenProps[],
};
