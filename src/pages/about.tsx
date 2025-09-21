import React, { useState } from 'react';
import '../sass/about.scss';

function About() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index: null) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const questions = [
    {
      question: "What is Enhanced Youth?",
      answer:
        "Enhanced Youth is a platform dedicated to empowering young individuals with essential life skills and knowledge."
    },
    {
      question: "How can I enroll in a course?",
      answer:
        "You can enroll in a course by visiting the Courses page and selecting the course you're interested in."
    },
    {
      question: "What topics are covered in the courses?",
      answer:
        "Our courses cover a variety of topics including emotional intelligence, financial literacy, time management, and more."
    },
    {
      question: "Are the courses free?",
      answer:
        "Yes, all courses are free to access and designed to provide valuable skills without any cost. We also have a paid option for those who want to support the platform."
    }
  ];

  return (
    <div className="about-wrapper">
      <section className="about-section">
      <div className='about-content'>
        <h3>Learn Skills and Financial Literacy That College Won’t Teach You</h3>
        <p>
          Explore a wide range of courses designed to help you grow personally and professionally during your 20s. Whether you're focusing on emotional intelligence, financial planning, or building meaningful relationships, these courses guide you on what it truly means to be a highly educated and skilled individual.
        </p>
        <hr></hr>
        <p>
          These courses were created by a college student in their 20s who wants to show others that college often teaches you how to be a good worker rather than how to think independently. Many classes in traditional curricula don’t prepare students with practical life skills. Enhanced Youth offers lessons on topics that most colleges and universities don’t teach. Begin your journey on the path to personal and professional growth today!
          <br></br>      
        </p>
        <hr></hr>
        </div>
        <div className='about-cont'>
        <img src="/female-working.jpg" alt="About Image" className="about-image" />  
        <hr></hr>
        "Some quote here Some quote here"
        </div>
      </section>
    </div>
  );
}

export default About;
