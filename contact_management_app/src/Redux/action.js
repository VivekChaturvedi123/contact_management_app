// action.js
import { ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT } from './actionTypes';


export const addContact = (payload) => {
  console.log(payload)
  return {
    type: ADD_CONTACT,
    payload,
  };
};

export const removeContact = (id) => {
  return {
    type: REMOVE_CONTACT,
    payload: {
      id,
    },
  };
};
export const editContact = (payload) => {
  console.log(payload)
  return {
    type: EDIT_CONTACT,
    payload,
  };
};
/*The code exports three action creator functions: addContact, removeContact, and editContact.
The addContact function logs the provided payload and returns action object with the type ADD_CONTACT and the payload.
The removeContact function creates an action object with the type REMOVE_CONTACT and a payload object containing the provided id.
The editContact  provided payload and returns an action object with the type EDIT_CONTACT and the payload.*/