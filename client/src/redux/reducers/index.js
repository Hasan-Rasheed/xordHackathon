import {combineReducers} from 'redux';
import themeOptionsReducer from './ThemeOptions';
import userReducer from './user-reducer';
import dashboardReducer from './dashboard_reducer'

export default combineReducers({
    ThemeOptions : themeOptionsReducer,
    user_reducer : userReducer, 
    dashboard_reducer : dashboardReducer
});
