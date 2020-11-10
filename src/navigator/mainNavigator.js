import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial170789Navigator from '../features/Tutorial170789/navigator';
import NotificationList170761Navigator from '../features/NotificationList170761/navigator';
import Settings170760Navigator from '../features/Settings170760/navigator';
import Settings170752Navigator from '../features/Settings170752/navigator';
import UserProfile170750Navigator from '../features/UserProfile170750/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial170789: { screen: Tutorial170789Navigator },
NotificationList170761: { screen: NotificationList170761Navigator },
Settings170760: { screen: Settings170760Navigator },
Settings170752: { screen: Settings170752Navigator },
UserProfile170750: { screen: UserProfile170750Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
