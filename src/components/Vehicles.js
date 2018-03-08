import React from "react";
import CollapsableMapper from "./CollapsableMapper";

function FavoriteCourses(props) {
  return (
    <CollapsableMapper data={props.FavoriteCourses} field="id" field1="courseName" field2="hours"  />
  );
}
export default FavoriteCourses;
