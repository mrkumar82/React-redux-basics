import { ActionTypes } from "../constant/constant";

const initialtState = {
  contacts: [
    {
      id: 1,
      name: "Alvin",
      email: "alvin@gmail.com",
      phone: 7897897897
    },
    {
      id: 2,
      name: "Alan",
      email: "alan@gmail.com",
      phone: 1234567897
    }
  ]
};

const contactReducer = (state = initialtState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, action.payload] };
    case ActionTypes.EDIT_CONTACT:
      const currentState = [...state.contacts];
      const updateItems = currentState.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      return { ...state, contacts: [...updateItems] };

    case ActionTypes.DELETE_CONTACT:
      const deleteitem = [...state.contacts];
      const itemIndex = deleteitem.filter((item) => item.id !== action.payload);
      return { ...state, contacts: [...itemIndex] };
    default:
      return state;
  }
};

export default contactReducer;
