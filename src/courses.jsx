import { useState } from 'react';
import './App.css';
import './courses.css';
import { useNavigate } from 'react-router-dom';
import { GiRamProfile } from "react-icons/gi";

// customized course that teach info that college does not teach you
//some changes
// each course has a seperate file that can be accessed

// can I put this on another file?
const courses = [
  {
    id: 1,
    title: 'Financial Literacy for Students',
    description: 'Master budgeting, saving cash, and investing for your future.',
    img: 'https://via.placeholder.com/150', 
    tag: ['Finance']
  },
  {
    id: 2,
    title: 'Building Meaningful Relationships',
    description: 'Understand the importance of relationships and how to nurture them.',
    img: 'https://via.placeholder.com/150',
    tag: ['Relationships']
  },
  {
    id: 3,  
    title: 'Starting Your First Side Hustle',
    description: 'shopify, Etsy, or freelancing - learn how to turn your skills into income.',
    img: 'https://via.placeholder.com/150',
    tag: ['Finance']
  },
  {
    id: 4,
    title: 'Emotional Intelligence',
    description: 'Develop self-awareness and manage your emotions effectively.',
    img: 'https://via.placeholder.com/150',
    tag: ['Relationships']
    
  },
  {
    id: 5,
    title: 'Entrepreneurship Essentials',
    description: 'Learn how to start and grow a successful side hustle.',
    img: 'https://via.placeholder.com/150',
    tag: ['Relationships']

  },
  {
    id: 6,
    title: 'Effective Communication',
    description: 'Improve your speaking and networking skills.',
    img: 'https://via.placeholder.com/150',
    tag: ['Communication']

  },
  {
    id: 7,  
    title: 'Time Management Mastery',
    description: 'Optimize your daily routine and increase productivity.',
    img: 'https://via.placeholder.com/150',
    tag: ['Time Management']

  },
  {
    id: 8,
    title: 'Personal Branding',
    description: 'Build a powerful personal brand to stand out professionally.',
    img: 'https://via.placeholder.com/150',
    tag: ['Personal Brand', 'Buisness']

  },
];

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
      <div className='grid'>
         <div className="grid-item-">
      <div className='quote'>
        <h2>Course Reviews</h2>
      <div className='box'>
        <GiRamProfile />
        <img alt='USER IMAGE'/>
        <span>Financial Literacy for students</span>
        </div>
        <p>"I highly recommend taking the financial courses that are available on enhanced youth. I was able to learn many new skills about finances, stocks, and even taxes that I would have not learned in college"</p>
        </div>
        <div className='quote'>
        <div className='box'>
        <GiRamProfile />
        <img alt='USER IMAGE'/>
        <span>Personal Branding</span>
        </div>
        <p>"I was a little skeptical at first, but I decided to jump the gun and realized how detailed each course was, Totally worth it!"</p>
        </div>
          </div>

      </div>
    </div>
  );
}

export default Courses;
