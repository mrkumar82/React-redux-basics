import { ActionTypes } from "../constant/constant";

export const setUsers = (users) => {
  return {
    type: ActionTypes.SET_USERS,
    payload: users
  };
};

export const addContact = (contact) => {
  return {
    type: ActionTypes.ADD_CONTACT,
    payload: contact
  };
};

export const editContact = (contact) => {
  return {
    type: ActionTypes.EDIT_CONTACT,
    payload: contact
  };
};

export const deleteContact = (id) => {
  return {
    type: ActionTypes.DELETE_CONTACT,
    payload: id
  };
};
