import React from "react";
import ListToggleContainer from "../containers/ListToggleContainer";

function CourseItem(props) {
  
  let name = "";
  if(!props.course.name) {
    name = props.course.courseName;
  } else {
    name = props.course.id;
  }

  return (
    <div className="CourseItem"  >
      <div className="overlay">
        <div className="title">{name}</div>
        <div className="length">{props.course.length} / 10</div>
        <div className="plot">{props.movie.overview}</div>
        <ListToggleContainer course={props.course}/>
      </div>
    </div>
  );
}``
export default CourseItem;
