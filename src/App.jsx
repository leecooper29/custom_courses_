import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header';
import Home from './home';
import About from './about';
import Courses from './courses';
import CourseDetail from './course-detail';
import Contact from './Contact';
import Footer from './footer';
//  commit comment 
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
