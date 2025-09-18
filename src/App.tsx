import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Home from "./pages/home";
import Courses from "./pages/courses";
import CourseDetail from "./pages/course-detail";
import Contact from "./pages/contact";
import Layout from "./components/Layout";
import type { Course } from "./courses";

export type DashboardContextValue = {
  dashboardCourses: Course[];
  addToDashboard: (course: Course) => void;
};

export const DashboardContext = createContext<DashboardContextValue>({
  dashboardCourses: [],
  addToDashboard: () => {},
});

function App() {
  const [dashboardCourses, setDashboardCourses] = useState<Course[]>([]);

  const addToDashboard = (course: Course) => {
    setDashboardCourses((prev) => {
      const isAlreadyAdded = prev.find((c) => c.title === course.title);
      if (isAlreadyAdded) {
        return prev;
      }
      return [...prev, course];
    });
  };

  return (
    <DashboardContext.Provider value={{ dashboardCourses, addToDashboard }}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:courseId" element={<CourseDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </DashboardContext.Provider>
  );
}

export default App;
