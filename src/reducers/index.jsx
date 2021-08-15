import { combineReducers } from 'redux';
import hobbyReducer from './hobby';
import userReducer from './users';


const rootReducer=combineReducers({
    hobby:hobbyReducer,
    user:userReducer,
});
export default rootReducer  