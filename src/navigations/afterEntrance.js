import { createStackNavigator } from 'react-navigation';
import IntroCont from '../components/intro/container/introCont';
import WelcomeCont from '../components/welcome/container/welcomeCont';

export default createStackNavigator(
    {
      welcome: WelcomeCont,
      hallOfFam:
    },
    {
      initialRouteName: 'welcome',
      header: { visible: false },
    },
);
