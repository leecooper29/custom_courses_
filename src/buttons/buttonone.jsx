function ButtonOne(){

const handleEnroll = (courseTitle) => {
      // should take you to that specific courses page
    if (!enrolledCourses.includes(courseTitle)) {
      setEnrolledCourses([...enrolledCourses, courseTitle]);
      alert(`You enrolled in: ${courseTitle}`);
    } else {
      alert(`You're already enrolled in: ${courseTitle}`);
    }
  };
      return(
            <>
              <div className="course-action">
              <button onClick={() => handleEnroll(course.title)}>
                {enrolledCourses.includes(course.title) ? 'Enrolled' : 'Enroll'} 
              </button>
            </div>
            </>
      )
}
export default ButtonOne