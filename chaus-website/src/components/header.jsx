import './header.css';
const Header = () => {
  return (
    // import navbar componenent (link the profile page in the componenet) 
    <div className="header-container">
      <div className="logo-container">
        CT
      </div>
      <div className="button-container">
        <a className="button">ABOUT</a>
        <a className="button">PROJECTS</a>
        <a className="button">RESUME</a>
      </div>
    </div>
  );
};

export default Header;
