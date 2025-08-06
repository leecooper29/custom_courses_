import { useParams } from 'react-router-dom';
import './coursedetail.css';
import { useState } from 'react';



function CourseDetail() {
  const { courseId } = useParams();
  // const [index, setIndex] = useState(0);

  function handleClick() {
    console.log('Now have access to the PDF file');
    const fileUrl = "/PlainBagelNotes.pdf"; // Path to your file
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "plain_bagel_notes.pdf";  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
 
  return (
    <>
      <div className="course-detail">
        <div className='course-detail-header'>
          <p>{courseId}</p>
          <p>course description goes here</p>
          <img src="/glasses.jpg" alt="Course image" className='glasses-img'/>
        </div>
        <div className="detail-info">
          <h2>Access Course Material</h2> 
          <p>Here you can find all the resources related to the course.</p>
          <p>text message</p>
          <button className="download" onClick={handleClick}>
            <a href=''>Download Course Material</a>
          </button>
          <button className='download'>add to cart</button>
        </div>
      </div>
      <section>
      <div className='text'>
        <div className='list'>
            <h2>browse our other available courses</h2>
            {/* displaying lists */}           
        </div>
        <div className='course-grid'>
          <div className='item'>
            &nbsp;
            <span>some text</span>
          </div>
          <div className='item'>
              &nbsp;
              <span>some text</span>
          </div>
          <div className='item'>
              &nbsp;
              <span>some text</span>
          </div>
          <div className='item'></div>
        </div>
        </div>
      </section>
    </>
  );
}
export default CourseDetail;

