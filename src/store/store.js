import {createStore} from 'redux';

import LoginReducer from '../reducers/LoginReducer';
const store=createStore(LoginReducer);
export default store;