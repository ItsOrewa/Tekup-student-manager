import {auth} from './userReducers';
import { combineReducers}  from 'redux';

export default combineReducers({
    auth : auth
});