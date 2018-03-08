import { connect } from "react-redux";
import Courses from "../components/Courses";

function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

export default connect(mapStateToProps)(Courses);