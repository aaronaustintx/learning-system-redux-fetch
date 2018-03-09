import { connect } from "react-redux";
import CollapsableMapper from "../components/CollapsableMapper";
import removeMyCourse from "../actions";

function mapDispatchToProps(dispatch) {

    return {
        removeMyCourse(id){
        dispatch(removeMyCourse(id));
    }
  };
}

export default connect(null, mapDispatchToProps)(CollapsableMapper);