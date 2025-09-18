import type { Course } from "../courses";
import CourseCard from "./CourseCard";

type CourseListProps = {
  courses: Course[];
  onEnroll: (courseTitle: string) => void;
};

function CourseList({ courses, onEnroll }: CourseListProps) {
  return (
    <div className="grid-main">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} onEnroll={onEnroll} />
      ))}
    </div>
  );
}

export default CourseList;
