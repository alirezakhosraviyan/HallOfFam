import { createSwitchNavigator } from 'react-navigation';
import IntroCont from '../components/intro/container/introCont';
import WelcomeCont from '../components/welcome/container/welcomeCont';

export default createSwitchNavigator(
    {
      intro: IntroCont,
      welcome: WelcomeCont
    },
    {
      initialRouteName: 'welcome',
      header: { visible: false },
    },
);
