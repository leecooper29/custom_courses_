import { FaInstagram } from "react-icons/fa";
import { CiFacebook, CiYoutube } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import './footer.css';

function Footer() {

  const sendEmail = () => {
    alert('Thank you for subscribing to our newsletter!');
    // Here you can add logic to handle the email subscription
    console.log('Email subscription logic goes here');
  };
  return (
    <footer className="footer">
      <div className="between">
        <nav className="footer-list">
          <ul>
            <li>home</li>
            <li>about</li>
            <li>courses</li>
            <li>contact</li>
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
    </footer>
  );
}

export default Footer;
