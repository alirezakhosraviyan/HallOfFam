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
