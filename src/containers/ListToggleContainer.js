import { connect } from "react-redux";
import ListToggle from "../components/ListToggle";
import {saveMyCourse} from "../actions";
import {removeMyCourse} from "../actions";


function mapDispatchToProps(dispatch) {

    return {
        saveMyCourse:function(course){
            // has to match up with the  action
          var action = saveMyCourse(course);
          
          dispatch(action);
        },
    removeMyCourse:function(course){
        // has to match up with the  action
      var action = removeMyCourse(course);
      
      dispatch(action);
    }
  };
}

export default connect(null, mapDispatchToProps)(ListToggle);