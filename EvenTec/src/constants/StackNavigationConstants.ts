// Stack Screens
import TabNavigation from '../navigation/TabNavigation/TabNavigation'; // Navigation
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import Menu from '../screens/Menu/Menu';
type StackScreenProps = {
  name: string;
  component: React.FC;
  options?: NativeStackNavigationOptions;
};

export const StackNavigationConstants = {
  stackScreenProps: [
    {
      name: 'TabNavigation',
      component: TabNavigation,
      options: { headerShown: false },
    },
    /*{
      name: 'MenuDetail',
      component: MenuDetail,
      options: { headerShown: false, animation: 'slide_from_bottom' },
    },*/
    {
      name: 'Menu',
      component: Menu,
      options: { headerShown: false }
    }
  ] as StackScreenProps[],
};
