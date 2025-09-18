import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/header.css";

function Header(): JSX.Element {
  const [animateHeader, setAnimateHeader] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10 && !animateHeader) {
        setAnimateHeader(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [animateHeader]);

  return (
    <header className={`main-header ${animateHeader ? "slide-in" : ""}`}>
      <div>
        <h1>Enhanced Youth</h1>
      </div>
      <div>
        <nav>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/">Dashboard</Link>
            </li>
            {/* <li className="nav-item"><Link to="/about">About</Link></li> */}
            <li className="nav-item">
              <Link to="/courses">Courses</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link to="/profile">
                <img
                  src="https://via.placeholder.com/30"
                  alt="Profile"
                  className="profile-icon"
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
