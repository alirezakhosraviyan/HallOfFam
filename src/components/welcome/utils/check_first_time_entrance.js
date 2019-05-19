import store from "react-native-simple-store";

export default async ()=>{
  try{
    return await store.get('first_time_entrance')
  }catch (e) {
    return false;
  }
}