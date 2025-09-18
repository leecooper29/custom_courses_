import { FaInstagram } from "react-icons/fa";
import { CiFacebook, CiYoutube } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import './css/footer.css';

function Footer() {

  const sendEmail = () => {
    alert('Thank you for subscribing to our newsletter!');
    console.log('Email subscription logic goes here');
  };
  return (
    <footer>
      <div className="between">
        <nav className="footer-list">
          {/* links to each page */}
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Courses</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div>
          <p>some text some text some text</p>
        </div>
      </div>
      <hr></hr>
      <div className="footer-bottom between">
        <p>© {new Date().getFullYear()} Enhanced Youth. All rights reserved.</p>
          <nav className="footer-list">
            <ul>
              <li>Youtube</li>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>x/Twitter</li>
          <p>some text some text some text</p>
            </ul>
          </nav>
      </div>
      <hr></hr>
      <div className="between">
        <div>
            <p>some text some text some text</p>
        </div>
        <div>
            <p>some text some text some text</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
