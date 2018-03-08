import React from "react";
import CollapsableMapper from "./CollapsableMapper";

function Courses(props) {
  return (
    <CollapsableMapper data={props.courses} field="id" field1="courseName" field2="length" field3="subject"  />
  );
}
export default Courses;