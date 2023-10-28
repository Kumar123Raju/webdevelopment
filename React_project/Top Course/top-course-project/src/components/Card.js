import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({ course, likecourse, setLikeCourse }) => {
  function clickHandler() {
    if (likecourse.includes(course.id)) {
      //  setLikeCourse((prev) => prev.filter((cid)=>( cid !== course.id)));
      setLikeCourse((prev) => {
        if (Array.isArray(prev)) {
          return prev.filter((cid) => cid !== course.id);
        }
        // Handle the case where prev is not an array, for example, initialize it as an array.
        return [course.id];
      });

      toast.warning("Like Removed");
    } else {
      //  pahle se liked nai hoga
      // insert krna hai ye course    liked course me
      // isme do case ho skte hai  first: starting me koi like nai hoga
      if (likecourse.length == 0) {
        setLikeCourse(course.id);
      } else {
        setLikeCourse((prev) => [...prev, course.id]);
      }
      toast.success("Liked successfull");
    }
  }
  return (
    <div className="card">
      <div className="image">
        <img src={course.image.url} alt="" />
      </div>
      <div>
        <button className="like-btn" onClick={clickHandler}>
          {likecourse.includes(course.id) ? (
            <FcLike size={30} />
          ) : (
            <FcLikePlaceholder size={30} />
          )}
        </button>
      </div>
      <div className="title">
        <p>{course.title}</p>
      </div>
      <div className="description">
        <p>{course.description}</p>
      </div>
    </div>
  );
};

export default Card;
