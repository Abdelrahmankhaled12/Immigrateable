import './style.scss'; // Importing the SCSS stylesheet for component-specific styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing FontAwesomeIcon component
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'; // Importing specific icon from FontAwesome
import img from '../../../assets/img watch.png'
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from React Router

const Late = () => {

    const navigate = useNavigate(); // Hook for navigation

    return (
        <div className='late'>
            <div className="container">
                <div className='image'>
                    <img src={img} alt="" />
                </div>
                <div className="text" data-aos="fade-left"
                    data-aos-delay="50" data-aos-duration="500">
                    <h1>Act <span>Now</span> Before It’s Too Late</h1>
                    <p>The Future of the DV Lottery is Uncertain:
                        The Diversity Visa (DV) Lottery program is at risk of ending forever if Donald Trump comes to power. Don’t miss your chance!  Apply now while you still can.</p>

                    <button onClick={() => navigate("/application")}>
                        <span>Apply Now Before It’s Too Late</span>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Late; 
