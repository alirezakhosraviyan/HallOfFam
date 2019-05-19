import { combineReducers } from 'redux';
import hallOfFamListReducer from '../redux/hallOfFamList/reducers/hallOfFamReducer';
import welcomeReducer from '../redux/welcome/reducer/welcomeReducer';

export default combineReducers({
  hallOfFamListReducer,
  welcomeReducer,
});