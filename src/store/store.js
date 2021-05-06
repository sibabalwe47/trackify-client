import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

/*
 * Reducers
 */

import { ModalReducer } from "./reducers/ModalReducer";
import { userRegisterReducer, userLoginReducer } from "./reducers/auth";

/*
 *  Root reducer
 */

const rootReducer = combineReducers({
  modals: ModalReducer,
  register: userRegisterReducer,
  user: userLoginReducer,
});

/*
 *  Store
 */

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
