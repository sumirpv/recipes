import { createStore} from 'redux';
import {makeRootReducers} from '../reducers';

const store = createStore(makeRootReducers());

export default store;
