import { combineReducers, createStore } from "redux";
import bookAuthReducer from './ducks/bookingAuth';

const reducer = combineReducers({
    auth : bookAuthReducer,
});

const store = createStore(reducer);

export default store;