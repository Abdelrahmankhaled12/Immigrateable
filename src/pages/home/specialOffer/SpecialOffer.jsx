import './style.scss'; // Importing the SCSS stylesheet for component-specific styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing FontAwesomeIcon component
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'; // Importing specific icon from FontAwesome
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from React Router

// Functional component for displaying a special offer section
const SpecialOffer = () => {
    const navigate = useNavigate(); // Hook for navigation

    return (
        <div className='specialOffer'>
            <div className="container">
                <div></div>
                <div className="text" data-aos="fade-left"
                    data-aos-delay="50" data-aos-duration="500">
                    <h1>Special Offer</h1>
                    <p>Sign up today and get a 50% discount on your first application fee!</p>
                    <button onClick={() => navigate("/application")}>
                        <span>Claim Your Discount and Apply Now</span>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SpecialOffer; // Exporting the component to be used in other parts of the application
