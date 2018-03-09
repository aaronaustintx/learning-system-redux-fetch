import {combineReducers} from "redux";




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



 function courses(state = [],action) {
  if (action.type === "COURSES_LOADED") {
    return action.value;
  }
  return state;
}

function specialText(state = "", action){
  if(action.type === "SET_SPECIAL_TEXT"){
      
    return action.value;
  }
  return state;
}

function searchText(state="", action){
    if(action.type === "SET_SEARCH_TEXT") {
      return action.value;
    }
    return state;
  }

// search + fav list
function searchResults(state = [],action) {
  if (action.type === "SEARCH_RESULTS_LOADED") {
    return action.value;
  }
  return state;
 }

 function myCourseList(state = [],action) {
    if (action.type === "MY_COURSE_LIST_LOADED") {
      return action.value;
    }
    return state;
   }



const rootReducer = combineReducers({
  contacts, vehicles, courses, specialText, searchText, searchResults, myCourseList
});
export default rootReducer;
