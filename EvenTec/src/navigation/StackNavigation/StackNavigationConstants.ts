// Stack Screens
import TabNavigation from '../TabNavigation/TabNavigation';
import Register from '../../screens/Register/Register';
import Create from '../../screens/Event/Create';

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
      name: 'TabNavigation',
      component: TabNavigation,
      options: { headerShown: false },
    },
    {
      name: 'Register',
      component: Register,
      options: { headerShown: false },
    },
    {
      name: 'Create',
      component: Create,
      options: { headerShown: false },
    },


    /*
    {
      name: 'MenuDetail',
      component: MenuDetail,
      options: { headerShown: false, animation: 'slide_from_bottom' },
    },*/
  ] as StackScreenProps[],
};
