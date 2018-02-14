import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadContacts} from "./actions";
import {loadVehicles} from "./actions";
import {loadProducts} from "./actions";
import {loadComments} from "./actions";


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
        }
  };
}

export default connect(null,mapDispatchToProps)(App);
