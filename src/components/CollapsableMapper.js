import React, { Component } from "react";
// import { removeMyCourse } from "../actions";
// import {removeMyCourse} from "../containers/CollapsableMapperContainer";

class CollapsableMapper extends Component {
  constructor() {
    super();
    this.state = {visible: true};
  }
  render() {
    let buttonText = "Reload / Hide";
    let userDivs = "";
    if (this.state.visible) {
      buttonText = "Reload / Hide";
      userDivs = this.props.data.map((d,i) => {
        return (
          <div key={i}>
            {d[this.props.field]} 
            {d[this.props.field1]} 
            {d[this.props.field2]} 
            {d[this.props.field3]}
            {d[this.props.field4]}
            <button onClick={() => {
              
        //  this.props.removeMyCourse(d)
        {this.props.mapDispatchToProps.removeCourse(i)}
        }
        }>Remove </button>
         <button onClick={() => {
       
        }
        }>Edit </button>
          </div>
        );
      });
    } else {
      buttonText = "Load";
      userDivs = "";
    }
    return (
      <div>
        <button onClick={() => {
          this.setState({
            visible: !this.state.visible
          });
        }
        }>
          {buttonText}
        </button>
        {userDivs}
      </div>);
  }
}


export default CollapsableMapper;
