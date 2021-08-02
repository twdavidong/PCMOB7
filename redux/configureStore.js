import { combineReducers, createStore } from "redux";
import accountPrefReducer from './ducks/accountPrefs';
import bookAuthReducer from './ducks/bookingAuth';

// okay! Do not touch! ================================================

const reducer = combineReducers({
    auth : bookAuthReducer,
    accountPrefs: accountPrefReducer
});

const store = createStore(reducer);

export default store;