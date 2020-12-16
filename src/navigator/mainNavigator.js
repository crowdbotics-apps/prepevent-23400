import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfSettings186115Navigator from '../features/CopyOfSettings186115/navigator';
import BlankScreen20186114Navigator from '../features/BlankScreen20186114/navigator';
import BlankScreen18186019Navigator from '../features/BlankScreen18186019/navigator';
import BlankScreen17186018Navigator from '../features/BlankScreen17186018/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfSettings186115: { screen: CopyOfSettings186115Navigator },
BlankScreen20186114: { screen: BlankScreen20186114Navigator },
BlankScreen18186019: { screen: BlankScreen18186019Navigator },
BlankScreen17186018: { screen: BlankScreen17186018Navigator },

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
