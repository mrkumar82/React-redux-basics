import { ActionTypes } from "../constant/constant";

const initialtState = {
  users: []
};

const homeReducer = (state = initialtState, action) => {
  switch (action.type) {
    case ActionTypes.SET_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default homeReducer;
