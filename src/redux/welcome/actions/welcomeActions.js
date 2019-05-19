import store from 'react-native-simple-store';

export const check_version = async (navigation) => {
  try {
      await store.get('intro_page_shown') ?
          navigation.navigate('welcome') :
          navigation.navigate('intro');
  }catch (e) {
    this.props.navigation.navigate('intro');
  }
};