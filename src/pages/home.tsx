import { CgProfile } from "react-icons/cg";
import { useContext } from 'react';
import '../css/home.css';
import { DashboardContext } from '../App';
import DashboardMenu from '../components/DashboardMenu';

function Home(): JSX.Element {
  const { dashboardCourses } = useContext(DashboardContext);

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
            <span>Lee Cooper</span>
          </div>
          <p>Passionate learner focused on personal development and financial literacy. Always eager to expand knowledge and skills.</p>
          </div>
            <div className='main-grid-item'>
            <p>Current Enrolled Courses:
            </p>
            <DashboardMenu courses={dashboardCourses} />
          </div>
        </div>
    </div>
  );
}

export default Home;
