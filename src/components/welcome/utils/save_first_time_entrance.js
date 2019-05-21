import store from 'react-native-simple-store';


export default async () => {
  return (await store.save('first_time', true))
};