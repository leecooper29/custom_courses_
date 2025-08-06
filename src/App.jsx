import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header';
import Home from './pages/home';
// import About from './about';
import Courses from './pages/courses';
import CourseDetail from './pages/course-detail';
import Contact from './pages/contact';
import Footer from './footer';
//  commit comment 
function App() {
  return (
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
  );
}

export default App;
