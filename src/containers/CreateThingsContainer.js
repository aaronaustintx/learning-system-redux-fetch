import { connect } from "react-redux";
import CreateThings from "../components/CreateThings";
import {
  createProduct,
  createVehicle,
  createContact,
  createComment,
  createCourse
} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    createProduct: function (product) {
      dispatch(createProduct(product));
    },
    createVehicle: function (vehicle) {
      dispatch(createVehicle(vehicle));
    },
    createContact: function (contact) {
      dispatch(createContact(contact));
    },
    createComment: function (c) {
      dispatch(createComment(c));
    },
    createCourse: function (e) {
      dispatch(createCourse(e));
    },
  };
}

export default connect(null,mapDispatchToProps)(CreateThings);
