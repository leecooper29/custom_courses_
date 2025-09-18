import type { Course } from '../courses';
import EmptyState from './EmptyState';

type DashboardMenuProps = {
  courses: Course[];
};

function DashboardMenu({ courses }: DashboardMenuProps) {
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
        <EmptyState title="No courses in dashboard yet" message={'Visit course details and click "Add to Dashboard" to get started!'} />
      )}
    </div>
  );
}

export default DashboardMenu;



