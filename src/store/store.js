import { createStore, combineReducers } from "redux";
import homeReducer from "../reducers/reducers";

const reducers = combineReducers({
  homeReducer: homeReducer
});
const store = createStore(reducers);

export default store;
