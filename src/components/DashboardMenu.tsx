import type { Course } from '../courses';

type DashboardMenuProps = {
  courses: Course[];
};

function DashboardMenu({ courses }: DashboardMenuProps): JSX.Element {
  return (
    <div className="course-menu">
      {courses.length > 0 ? (
        courses.map((course) => (
          <div className="c" key={course.id}>
            <p>{course.title}</p>
            <p>{course.description}</p>
          </div>
        ))
      ) : (
        <div className="c">
          <p>No courses in dashboard yet</p>
          <p>Visit course details and click "Add to Dashboard" to get started!</p>
        </div>
      )}
    </div>
  );
}

export default DashboardMenu;


