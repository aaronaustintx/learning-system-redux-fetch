import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadContacts} from "./actions";
import {loadVehicles} from "./actions";
import {loadProducts} from "./actions";
import {loadComments} from "./actions";
import {loadCourses} from "./actions";
import {setSpecialText} from "./actions";
import {setSearchText} from "./actions";
import {searchResults} from "./containers/SearchBoxContainer";
import {myCourseList} from "./actions";



function mapDispatchToProps(dispatch) {
  return {
    loadContacts() {
      dispatch(loadContacts());
      },
      loadVehicles() {
        dispatch(loadVehicles());
      },
      loadProducts() {
        dispatch(loadProducts());
      },
      loadComments() {
        dispatch(loadComments());
        },
      loadCourses() {
          dispatch(loadCourses());
        },
      
      setSpecialText() {
          dispatch(setSpecialText());
      },
      setSearchText(){
        dispatch(setSearchText());
      }
  };
}

function mapStateToProps(state){
  return{
      searchResults: state.searchResults,
      myCourseList: state.myCourseList
  }
 }

export default connect(null,mapDispatchToProps)(App);
