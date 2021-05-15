import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

/*
 * Reducers
 */

import { ModalReducer } from "./reducers/ModalReducer";
import { userRegisterReducer, userLoginReducer } from "./reducers/auth";
import { categoryReducer } from "./reducers/categories";
import { userReducer } from "./reducers/user";
import { topHabitsStatsReducer } from "./reducers/streaks";
import { monthStatsReducer } from "./reducers/streaks";

/*
 *  Root reducer
 */

const rootReducer = combineReducers({
  modals: ModalReducer,
  register: userRegisterReducer,
  user: userReducer,
  categories: categoryReducer,
  topranked: topHabitsStatsReducer,
  monthstats: monthStatsReducer,
});

/*
 *  Store
 */

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
