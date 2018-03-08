import React, { Component } from "react";
import "./App.css";
import ContactsContainer from "./containers/ContactsContainer";
import ProductsContainer from "./containers/ProductsContainer";
import VehiclesContainer from "./containers/VehiclesContainer";
import CommentsContainer from "./containers/CommentsContainer";
import CoursesContainer from "./containers/CoursesContainer";
import CreateThingsContainer from "./containers/CreateThingsContainer";
import {loadContacts} from "./actions/index";
import {loadVehicles} from "./actions/index";
import {loadProducts} from "./actions/index";
import {loadComments} from "./actions/index";
import {loadCourses} from "./actions/index";
import {loadMyCourseList} from "./actions/index";
import {setSpecialText} from "./actions/index";
import {setSearchText} from "./actions/index";
import CourseList from "./components/CoursesList";
import SpecialText from "./containers/SpecialTextContainer";
import SpecialTextBox from "./containers/SpecialTextBoxContainer";
import SpecialTextBoxContainer from "./containers/SpecialTextBoxContainer";
import {connect} from "react-redux";
import mapDispatchToProps from "./actions/index";
import SearchTextBoxContainer from "./containers/SearchTextBoxContainer";
import SearchBoxContainer from "./containers/SearchBoxContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {users: [],
    searchResults: [],
    myCourseList: []};
  }
  componentDidMount() {
    this.props.loadContacts()
    this.props.loadVehicles()
    this.props.loadProducts()
    this.props.loadComments()
    this.props.loadCourses()
    this.props.setSpecialText()
    this.props.setSearchText()
    this.props.loadMyCourseList()
  }
  render() {
    return (
      <div>
        <div style={{float: "left", width: "49%"}}>
          <h1>Contacts</h1>
          <ContactsContainer />
          <h1>Products</h1>
          <ProductsContainer />
          <h1>Vehicles</h1>
          <VehiclesContainer />
          <h1>Comments </h1>
          <CommentsContainer />
          <h1>Courses </h1>
          <CoursesContainer />
          <br />
          {/* <SpecialTextBoxContainer /> */}
          <SpecialTextBox />
          <br />
          <SpecialText />
          {/* <SpecialTextContainer /> */}
        
          <br />
          <SearchTextBoxContainer/>
          <SearchBoxContainer />
          <CourseList 
          title="Search Results" 
          courses={this.props.searchResults} />

        </div>
        <div style={{float: "left", width: "49%"}}>
          <CreateThingsContainer />
        </div>
      </div>
    );
  }
}
export default (App);


