// home.jsx]
import { CgProfile } from "react-icons/cg";
import '../css/home.css'; // import the stylesheet
// recently updated padding in css for dashboard

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h2 className="h2-home">Welcome to Enhance Youth</h2>
        <p>Enhance Youth is a platform dedicated to empowering young individuals with essential life skills and knowledge. Our mission is to provide accessible resources and support to help them thrive. </p>
        <p>Explore our courses, engage with our community, and take the first step towards personal growth and success.</p>
        </div>
        <div className='main-grid'>
          <div className='main-grid-item'>
          <div className="user">
          <CgProfile />
          <h1>user.name</h1>
          </div>
          <p>user description</p>
          </div>
            <div className='main-grid-item'>
            <p>Current Enrolled Courses:
            </p>
            <div className="course-menu">
            <div className="c">
              <p>course name</p>
              <p>txt description</p>
            </div>
            <div className="c">
              <p>course name</p>
              <p>txt description</p>
            </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Home;
