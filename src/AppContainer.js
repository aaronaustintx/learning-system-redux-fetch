import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadContacts} from "./actions";
import {loadVehicles} from "./actions";


function mapDispatchToProps(dispatch) {
  return {
    loadContacts() {
      dispatch(loadContacts());
      },
      loadVehicles() {
        dispatch(loadVehicles());
      }
  };
}

export default connect(null,mapDispatchToProps)(App);
