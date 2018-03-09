import React, { Component } from "react";
 import { removeMyCourse } from "../actions";

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
        { removeMyCourse(d[i])}
        }
        }>Remove </button>
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
