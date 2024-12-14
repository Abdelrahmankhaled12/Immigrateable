// Importing necessary styles and FontAwesome icons
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from React Router

// Functional component for the "How It Works" section
const HowItWorks = () => {
    const navigate = useNavigate(); // Hook for navigation

    return (
        <div className='howItWorks'>
            <div className="container">
                <div className="title" data-aos="fade-up"
                    data-aos-delay="50" data-aos-duration="500">
                    <h1>How It Works</h1>
                </div>
                <div className="boxes">
                    <div className="box" data-aos="fade-up"
                        data-aos-delay="50" data-aos-duration="500">
                        <div className="number">
                            <p>1</p>
                        </div>
                        <h2>Sign Up</h2>
                        <p>Create an Account: <br /> Quick and easy registration process.</p>
                    </div>
                    <div className="box" data-aos="fade-up"
                        data-aos-delay="100" data-aos-duration="500">
                        <div className="number">
                            <p>2</p>
                        </div>
                        <h2>Submit Your Information</h2>
                        <p>Year-Round Access:  <br /> Provide your details for the DV Lottery.</p>
                    </div>
                    <div className="box" data-aos="fade-up"
                        data-aos-delay="150" data-aos-duration="500">
                        <div className="number">
                            <p>3</p>
                        </div>
                        <h2>We Handle the Rest</h2>
                        <ul>
                            <li><span>Expert Review:</span>  We check your application for accuracy and compliance.</li>
                            <li><span>Guaranteed Submission:</span> We ensure your application is submitted on time.</li>
                            <li><span>Lifetime Resubmission:</span> We reapply for the DV Lottery every year until you win.</li>
                        </ul>
                    </div>
                </div>
                <button onClick={() => navigate("/application")}>
                    <span>Start Your Jorney Now</span>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    )
}

export default HowItWorks