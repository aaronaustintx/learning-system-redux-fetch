import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadContacts} from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadContacts() {
      dispatch(loadContacts());
      }
  };
}

export default connect(null,mapDispatchToProps)(App);
