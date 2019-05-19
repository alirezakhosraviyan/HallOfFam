import store from 'react-native-simple-store';
import check_first_time_entrance from "../../../components/welcome/utils/check_first_time_entrance";

export const check_version = async (navigation) => {
  try {
      check_first_time_entrance() ?
          navigation.navigate('welcome') :
          navigation.navigate('intro');
  }catch (e) {
    this.props.navigation.navigate('intro');
  }
};