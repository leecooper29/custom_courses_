import { useState } from 'react';
import '../App.css';
import '../css/courses.css';
import { useNavigate } from 'react-router-dom';
import { GiRamProfile } from "react-icons/gi";
import { courses } from '../courses';

// customized course that teach info that college does not teach you
//some changes
// each course has a seperate file that can be accessed

function Courses() {
  const navigate = useNavigate();
  const [state, setstate] = useState('')
  
  const handleEnroll = (courseTitle) => {
    const course = courses.find(c => c.title === courseTitle);
    navigate(`/courses/${course.title}`, {
      state: { course },
    });
    console.log(`Enrolled in course: ${courseTitle}`);
  };

  // make sure that the components are rendered ine ach page acoordingly
  // speak with someone who can help you with components
  return (
    <div className="main-grid-wrapper">
    <div className='container'>
    <div className='nav-search'>
    {/* <div>
    ->objs.filter(itm.name.includes(state)).map(itm=>label)
    </div>  */}
    <div className='search'>
       <label className='lbl'>Search Courses:</label>
      <input type="text" className='search-input' onChange={(e) =>setstate(e.currentTarget.value)} value={state}></input>
    </div>   
    </div>
    {/* this be used as a component ()*/}
    <div className='filter'>
      <p className=''>Financial Literacy</p>
      <p className=''>Relationships</p>
      <p className=''>Personal Brand</p>
      <p className=''>Buisness</p>
      <p className=''>some text</p>
    </div>
    </div>
      <div className="grid-main">
      {/* handling the input for search terms*/}
        {courses.filter((course)=> course.tag.find(itm=>itm.toLowerCase().includes(state))).map((course, i) => (
          <div className="grid-item" key={i}>
            <div className="course-info">
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <div className="course-action">
              <button onClick={() => handleEnroll(course.title)}>
                Enroll Now
              </button>
            </div>
            </div>
             <img src="/glasses.jpg" alt="Course image" className='glasses-img-'/>
          </div>
        ))}
      </div>
         <div className="grid-item-">
        <h3>Course Reviews</h3>
        <div className='box'>
        <GiRamProfile />
        <img alt='USER IMAGE'/>
        <span>Financial Literacy for students</span>
        <p className='quote'>"I highly recommend taking the financial courses that are available on enhanced youth. I was able to learn many new skills about finances, stocks, and even taxes that I would have not learned in college"</p>
        </div>
        <div className='box'>
        <GiRamProfile />
        <img alt='USER IMAGE'/>
        <span>Personal Branding</span>
          <p className='quote'>"I was a little skeptical at first, but I decided to jump the gun and realized how detailed each course was, Totally worth it!"</p>
        </div>
        </div>

    </div>
  );
}

export default Courses;
