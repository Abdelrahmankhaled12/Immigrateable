// Importing necessary styles and assets
import './style.scss';
import info from '../../assets/info.png';
import mail from '../../assets/mail.png';
import phone from '../../assets/phone.png';
import Whatsapp from '../../assets/Whatsapp.png';
import Telegram from '../../assets/Telegram.png';
import twitter from '../../assets/twitter.png';
import facebook from '../../assets/facebook.png';
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from React Router

const Footer = () => {
    const navigate = useNavigate(); // Hook for navigation

    return (
        <footer>
            <div className="container">

                {/* Section for general information and disclaimer */}
                <div className="partOne">
                    <div className="icon">
                        <img src={info} alt="Information" />
                    </div>
                    <p>
                        Immigrateable.com operates independently and is not affiliated with the U.S. Government.
                        The official U.S. Diversity Visa Lottery is available for free at www.state.gov
                    </p>
                </div>

                {/* Section for contact information and social media links */}
                <div className="partTwo">
                    <div className="grid">

                        {/* Contact Us Section */}
                        <div className="boxOne">
                            <h2>Contact Us</h2>
                            <div className="boxes">
                                <div className="box">
                                    <div className="icon">
                                        <img src={mail} alt="Email" />
                                    </div>
                                    <p>support@immigrateable.com</p>
                                </div>
                                <div className="box">
                                    <div className="icon">
                                        <img src={phone} alt="Phone" />
                                    </div>
                                    <p>+1-800-555-5555</p>
                                </div>
                            </div>
                        </div>

                        {/* Follow Us Section with social media links */}
                        <div className="boxTwo">
                            <h2>Follow Us</h2>
                            <div className="icons">
                                <a href="#">
                                    <img src={facebook} alt="Facebook" />
                                </a>
                                <a href="#">
                                    <img src={twitter} alt="Twitter" />
                                </a>
                                <a href="#">
                                    <img src={Telegram} alt="Telegram" />
                                </a>
                                <a href="#">
                                    <img src={Whatsapp} alt="Whatsapp" />
                                </a>
                            </div>
                            <h2>Meet the Team</h2>
                            <p onClick={() => navigate("/about-us")}>About Us</p>
                        </div>

                        {/* Legal Links Section */}
                        <div className="boxThree">
                            <h2>Legal</h2>
                            <div className="links">
                                <a href="#">Terms & Conditions</a>
                                <a onClick={() => navigate("/privacy-policy")}>Privacy Policy</a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
