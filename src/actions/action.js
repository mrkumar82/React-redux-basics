import { ActionTypes } from "../constant/constant";

export const setUsers = (users) => {
  return {
    type: ActionTypes.SET_USERS,
    payload: users
  };
};
