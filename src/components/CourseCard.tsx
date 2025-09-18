import type { Course } from '../courses';

type CourseCardProps = {
  course: Course;
  onEnroll: (courseTitle: string) => void;
};

function CourseCard({ course, onEnroll }: CourseCardProps): JSX.Element {
  return (
    <div className="grid-item">
      <div className="course-info">
        <h2>{course.title}</h2>
        <p>{course.description}</p>
        <div className="course-action">
          <button onClick={() => onEnroll(course.title)}>Enroll Now</button>
        </div>
      </div>
      <img
        src="/glasses.jpg"
        alt="Course image"
        className="glasses-img-"
      />
    </div>
  );
}

export default CourseCard;



