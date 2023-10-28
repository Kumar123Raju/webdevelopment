import React, { useState } from "react";
import Card from "./Card";

const Cards= ({ courses ,category}) => {
const [likecourse,setLikeCourse]=useState([]);
  function getcourses() {
        if(category==='All'){
                let allCourses = [];
    Object.values(courses).forEach((array) => {
      array.forEach((courseData) => {
        allCourses.push(courseData);
      });
    });
    return allCourses;
        }else{
                return courses[category];
        }
    
  }
 

  return (
    <div className="cards-list">
      {getcourses().map((course) => {
        return <Card key={course.id} course={course} likecourse={likecourse} setLikeCourse={setLikeCourse}/>;
      })}
    </div>
  );
};

export default Cards;
