/*
* Before login and entrance process we have to show splash screen
* and finally dispatch between introduction or main screen
* */

import { createSwitchNavigator } from 'react-navigation';
import splash from '../components/splash/container/splashCont';
import introStack from './navigations/introStack';
import mainStack from './navigations/mainStack';

export default createSwitchNavigator(
    {
      splash: splash,
      introStack: introStack,
      mainStack: mainStack,
    },
    {
      initialRouteName: 'splash',
    },
);
