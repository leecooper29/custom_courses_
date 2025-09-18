import { useParams } from "react-router-dom";
import { useContext } from "react";
import "../css/courseDetail.css";
import { DashboardContext } from "../App";
import { courses } from "../courses";

function CourseDetail() {
  const { courseId } = useParams<{ courseId: string }>();
  const { addToDashboard } = useContext(DashboardContext);

  function handleClick() {
    console.log("Now have access to the PDF file");
    const fileUrl = "";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "plain_bagel_notes.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleAddToDashboard = () => {
    const course = courses.find((c) => c.title === courseId);

    if (course) {
      addToDashboard(course);
      console.log("Course added to dashboard");
    }
  };

  return (
    <>
      <div className="course-detail">
        <div className="course-detail-header">
          <p>{courseId}</p>
          <p>course description goes here</p>
          <img src="/glasses.jpg" alt="Course image" className="glasses-img" />
        </div>
        <div className="detail-info">
          <h2>Access Course Material</h2>
          <p>Here you can find all the resources related to the course.</p>
          <p>text message</p>
          {/* <button className="download" onClick={handleClick}>
            <a href=''>Download Course Material</a>
          </button> */}
          <button className="download" onClick={handleAddToDashboard}>
            add to Dashboard
          </button>
        </div>
      </div>
      <section>
        <div className="text">
          <div className="list">
            <h2>browse our other available courses</h2>
          </div>
          <div className="course-grid">
            <div className="item">
              <h3>some text</h3>
              <span>some text here</span>
            </div>
            <div className="item">
              <h3>some text</h3>
              <span>some text</span>
            </div>
            <div className="item">
              &nbsp;
              <span>some text</span>
            </div>
            <div className="item">
              &nbsp;
              <span>some text</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default CourseDetail;
