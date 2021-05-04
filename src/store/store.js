import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension' 

/*
 * Reducers
 */

import { ModalReducer } from './reducers/ModalReducer'
import { AuthReducer } from './reducers/AuthReducer';  

/* 
 *  Root reducer
 */

const rootReducer = combineReducers({
    modals: ModalReducer,
    auth: AuthReducer
});

/*
 *  Store
 */

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


export default store;