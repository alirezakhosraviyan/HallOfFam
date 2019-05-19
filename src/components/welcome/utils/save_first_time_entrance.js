import store from 'react-native-simple-store';


export default async ()=>{
  try {
    await store.save('first_time_entrance');
    return true;
  }catch (e) {
    return false;
  }
}