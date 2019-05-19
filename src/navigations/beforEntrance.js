import { createStackNavigator } from 'react-navigation';
import IntroCont from '../components/intro/container/introCont';
import WelcomeCont from '../components/welcome/container/welcomeCont';

export default createStackNavigator(
    {
      intro: IntroCont,
    },
    {
      initialRouteName: 'intro',
      header: { visible: false },
    },
);
