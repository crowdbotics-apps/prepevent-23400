import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen20186114Navigator from '../features/BlankScreen20186114/navigator';
import BlankScreen19186020Navigator from '../features/BlankScreen19186020/navigator';
import BlankScreen18186019Navigator from '../features/BlankScreen18186019/navigator';
import BlankScreen17186018Navigator from '../features/BlankScreen17186018/navigator';
import Settings186003Navigator from '../features/Settings186003/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen20186114: { screen: BlankScreen20186114Navigator },
BlankScreen19186020: { screen: BlankScreen19186020Navigator },
BlankScreen18186019: { screen: BlankScreen18186019Navigator },
BlankScreen17186018: { screen: BlankScreen17186018Navigator },
Settings186003: { screen: Settings186003Navigator },

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
