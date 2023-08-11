import './footer.css';
import logo from '../images/logo/logo.svg';
import linkedin from '../images/social-media/white-linkedin.svg';
import github from '../images/social-media/white-github.svg';
import email from '../images/social-media/white-email.svg';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <img className="footer-image" src={logo} alt="footer" />
                    <div>CHAU TA</div>
                </div>
                <div className="footer-right">
                    <div>Contact me</div>
                    <div className='social-media'>
                        <a href="https://www.linkedin.com/in/chauta-/" target="_blank" rel="noopener noreferrer">
                            <img className='social-media-icon' src={linkedin} alt='linkedin' />
                            <div>chauta-</div>
                        </a>
                        <a href="https://github.com/chauta03" target="_blank" rel="noopener noreferrer">
                            <img className='social-media-icon' src={github} alt='github' />
                            <div>chauta03</div>
                        </a>
                        <a href="mailto:chauta.tkh@gmail.com" target="_blank" rel="noopener noreferrer">
                            <img className='social-media-icon' src={email} alt='email' />
                            <div>chauta.tkh@gmail.com</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
