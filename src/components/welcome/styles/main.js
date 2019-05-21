import { StyleSheet } from 'react-native';

import {
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  mainContainer : {
    flex :1,
    margin : hp(2),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
})