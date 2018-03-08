import React, { Component } from "react";
import CourseItem from "./CourseItem";

function CourseList(props) {
  let courseLists = "";
  if (props.courses) {
    courseLists = props.courses.map(function (course, i) {
      if (i < 5) {
        return (
          <CourseItem key={course.id} course={course} />
        );  
      } 
      return (<div key={course.id} />);
    }); 
  } 
  
  return (
    <div 
      className="CourseList" 
      data-loaded={props.courses && props.courses.length > 0}>
      <div className="Course">
        <h1>{props.course}</h1>
        <div className="courses-wrapper">
          {courseLists}
        </div>
      </div>
    </div>
  );
}
export default CourseList;
