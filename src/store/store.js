import { createStore, combineReducers } from "redux";
import homeReducer from "../reducers/reducers";
import contactReducer from "../reducers/contactReducer";

const reducers = combineReducers({
  homeReducer: homeReducer,
  contactReducer: contactReducer
});
const store = createStore(reducers);

export default store;
