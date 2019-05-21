import {createStackNavigator} from 'react-navigation';
import intro from '../../components/intro/container/introCont';

export default createStackNavigator(
    {
      intro: intro,
    },
    {
      initialRouteName: 'intro',
      header: {visible: true,},
      headerMode: 'none'
    },
);
