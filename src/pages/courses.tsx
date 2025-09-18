import { useState } from "react";
import "../App.css";
import "../css/courses.css";
import { useNavigate } from "react-router-dom";
import { GiRamProfile } from "react-icons/gi";
import { courses } from "../courses";
import Filter from "../components/filter";
import CourseCard from "../components/CourseCard";

function Courses() {
  const navigate = useNavigate();
  const [state, setstate] = useState<string>("");

  const handleEnroll = (courseTitle: string) => {
    const course = courses.find((c) => c.title === courseTitle);
    if (!course) return;
    navigate(`/courses/${course.title}`, {
      state: { course },
    });
    console.log(`Enrolled in course: ${courseTitle}`);
  };

  return (
    <div className="main-grid-wrapper">
      <div className="container">
        <div className="nav-search">
          <div className="search">
            <label className="lbl">Search Courses:</label>
            <input
              type="text"
              className="search-input"
              onChange={(e) => setstate(e.currentTarget.value)}
              value={state}
            ></input>
          </div>
        </div>
        <Filter />
      </div>
      <div className="grid-main">
        {courses
          .filter((course) =>
            course.tag.find((itm) => itm.toLowerCase().includes(state.toLowerCase()))
          )
          .map((course) => (
            <CourseCard key={course.id} course={course} onEnroll={handleEnroll} />
          ))}
      </div>
      <div className="grid-item-">
        <h3>Course Reviews</h3>
        <div className="box">
          <GiRamProfile />
          <img alt="USER IMAGE" />
          <span>Financial Literacy for students</span>
          <p className="quote">
            "I highly recommend taking the financial courses that are available
            on enhanced youth. I was able to learn many new skills about
            finances, stocks, and even taxes that I would have not learned in
            college"
          </p>
        </div>
        <div className="box">
          <GiRamProfile />
          <img alt="USER IMAGE" />
          <span>Personal Branding</span>
          <p className="quote">
            "I was a little skeptical at first, but I decided to jump the gun
            and realized how detailed each course was, Totally worth it!"
          </p>
        </div>
      </div>
    </div>
  );
}

export default Courses;
