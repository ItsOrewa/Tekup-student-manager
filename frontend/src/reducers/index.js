import {auth , rate} from './userReducers';
import { combineReducers}  from 'redux';

export default combineReducers({
    auth : auth,
    rate: rate
});
