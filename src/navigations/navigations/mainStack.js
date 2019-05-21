import {createStackNavigator} from 'react-navigation';
import WelcomeCont from '../../components/welcome/container/welcomeCont';
import HallOfFamListCont from '../../components/hallOfFamList/container/hallOfFamCont';
import {Header} from "../../components/common/main/container";
import React from "react";

export default createStackNavigator(
    {
      welcome: WelcomeCont,
      hallOfFam: HallOfFamListCont
    },
    {
      initialRouteName: 'welcome',
      header: {visible: true,},
      defaultNavigationOptions: ({navigation}) => {
        const {routeName, routes} = navigation.state;
        return ({
          header: routeName === 'welcome' ? <Header title={'Welcome'} onLeftButtonPress={() => (navigation.navigate('hallOfFam'))} /> :
              <Header title={'HallOfFam'} onLeftButtonPress={() => (navigation.navigate('welcome'))} />
        })
      }
    },
);
