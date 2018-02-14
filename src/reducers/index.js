import {combineReducers} from "redux";

function comments(state = [], action) {
  return state;
}

function contacts(state = [],action) {
  if (action.type === "CONTACTS_LOADED") {
    return action.value;
  }
  return state;
 }

 function vehicles(state = [],action) {
  if (action.type === "VEHICLES_LOADED") {
    return action.value;
  }
  return state;
 }

const rootReducer = combineReducers({
  comments, contacts, vehicles
});
export default rootReducer;
