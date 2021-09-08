import { combineReducers } from 'redux';
import authReducer from './Auth/reducer';
import sidebarReducer from './Sidebar/reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    sidebar: sidebarReducer,
});

export default rootReducer;