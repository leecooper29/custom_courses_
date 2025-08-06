import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createContext, useState } from 'react';
import Header from './header';
import Home from './pages/home';
// import About from './about';
import Courses from './pages/courses';
import CourseDetail from './pages/course-detail';
import Contact from './pages/contact';
import Footer from './footer';

// Create context for dashboard courses
export const DashboardContext = createContext();

//  commit comment 
function App() {
  const [dashboardCourses, setDashboardCourses] = useState([]);

  const addToDashboard = (course) => {
    setDashboardCourses(prev => {
      // Check if course is already in dashboard
      const isAlreadyAdded = prev.find(c => c.title === course.title);
      if (isAlreadyAdded) {
        return prev; // Don't add duplicate
      }
      return [...prev, course];
    });
  };

  return (
    <DashboardContext.Provider value={{ dashboardCourses, addToDashboard }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<CourseDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </DashboardContext.Provider>
  );
}

export default App;
