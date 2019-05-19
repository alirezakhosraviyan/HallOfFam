import { createSwitchNavigator } from 'react-navigation';
import IntroCont from '../components/intro/container/introCont';

export default createSwitchNavigator(
    {
      intro: IntroCont,
    },
    {
      initialRouteName: 'intro',
      header: { visible: false },
    },
);
