import { combineReducers} from 'redux';
import testReducer from './test';

const makeRootReducers =() =>{
    combineReducers({
        test:testReducer,
    })
}
export default makeRootReducers;