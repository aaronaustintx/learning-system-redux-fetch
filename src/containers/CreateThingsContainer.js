import { connect } from "react-redux";
import CreateThings from "../components/CreateThings";
import {
  createVehicle,
  createContact,
  createCourse
} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    createContact: function (contact) {
      dispatch(createContact(contact));
    },
    createCourse: function (e) {
      dispatch(createCourse(e));
    },
  };
}

export default connect(null,mapDispatchToProps)(CreateThings);
