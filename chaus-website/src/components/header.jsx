import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    // import navbar componenent (link the profile page in the componenet) 
    <div className="header-container">
      <div className="logo-container">
        Chau Ta
      </div>
      <div className="button-container">
        <Link to='about' className="button" style={{ color:'black'}}>
          ABOUT
        </Link>
        <Link to='projects' className="button" style={{ color:'black'}}>
          PROJECTS
        </Link>
        <a href="https://drive.google.com/file/d/1wqyyXZmoXeLTk9giEtWCVXwMavGf2jx0/view?usp=sharing" className='button' target="resume" rel="noopener noreferrer" style={{ color:'black'}}>
          RESUME
        </a>
      </div>
    </div>
  );
};

export default Header;
