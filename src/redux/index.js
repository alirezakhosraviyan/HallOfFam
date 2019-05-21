import { combineReducers } from 'redux';
import { hallOfFam } from '../redux/hallOfFamList/reducers/hallOfFamReducer';
import welcomeReducer from '../redux/welcome/reducer/welcomeReducer';

export default combineReducers({
  hallOfFam,
  welcomeReducer,
});