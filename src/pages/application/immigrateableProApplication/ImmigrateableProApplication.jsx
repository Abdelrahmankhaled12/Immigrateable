// Importing necessary styles and FontAwesome components
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing FontAwesomeIcon from FontAwesome
import { faCheck } from '@fortawesome/free-solid-svg-icons'; // Importing check icon from FontAwesome's free solid icons
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from React Router

// List of application phases
const items = [
    "Personal details",
    "Address",
    "Review",
    "Payment",
];

const ImmigrateableProApplication = ({ phases }) => {
    const navigate = useNavigate(); // Hook for navigation

    return (
        <div className='immigrateableProApplication'>
            <div className="content">
                
                {/* Left section: List of application phases */}
                <div className="partOne">
                    <h3>Immigrateable Pro Application</h3>
                    <ul>
                        {items.map((item, index) => (
                            <li 
                                key={index} 
                                className={
                                    phases === index 
                                    ? "active" 
                                    : phases > index 
                                    ? "done" 
                                    : "hide"
                                }
                            >
                                {/* Icon indicating phase completion */}
                                <div className="icon">
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* Right section: Action buttons */}
                <div className="partTwo">
                    <button className='ContactUsButton'>Contact us</button>
                    <button onClick={() => navigate("/login")}>Login or Sign up</button>
                </div>
                
            </div>
        </div>
    );
}

export default ImmigrateableProApplication;
