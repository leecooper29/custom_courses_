import { useState } from "react";
import "../App.scss";
import "../sass/courses.scss";
import { useNavigate } from "react-router-dom";
import { courses } from "../courses";
import Filter from "../components/filter";
import SearchBar from "../components/SearchBar";
import CourseList from "../components/CourseList";
import ReviewsSection from "../components/ReviewsSection";

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
          <SearchBar label="Search Courses" value={state} onChange={setstate} placeholder="Filter by tag" />
        </div>
        <Filter />
      </div>
      <CourseList
        courses={courses.filter((course) =>
          course.tag.find((itm) => itm.toLowerCase().includes(state.toLowerCase()))
        )}
        onEnroll={handleEnroll}
      />
      <ReviewsSection />
    </div>
  );
}

export default Courses;
