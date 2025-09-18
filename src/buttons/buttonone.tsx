import { useState } from "react";

type ButtonOneProps = {
  courseTitle: string;
};

function ButtonOne({ courseTitle }: ButtonOneProps): JSX.Element{
  const [enrolledCourses, setEnrolledCourses] = useState<string[]>([]);

  const handleEnroll = (title: string) => {
    if (!enrolledCourses.includes(title)) {
      setEnrolledCourses([...enrolledCourses, title]);
      alert(`You enrolled in: ${title}`);
    } else {
      alert(`You're already enrolled in: ${title}`);
    }
  };
      return(
            <>
              <div className="course-action">
              <button onClick={() => handleEnroll(courseTitle)}>
                {enrolledCourses.includes(courseTitle) ? 'Enrolled' : 'Enroll'} 
              </button>
            </div>
            </>
      )
}
export default ButtonOne
