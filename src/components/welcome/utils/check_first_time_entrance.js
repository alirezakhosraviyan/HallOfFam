import store from "react-native-simple-store";
import save_first_time_entrance from "./save_first_time_entrance";

export default async ()=> await store.get('first_time')