// Importing necessary styles and FontAwesome components
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing FontAwesomeIcon from FontAwesome
import { faCheck } from '@fortawesome/free-solid-svg-icons'; // Importing check icon from FontAwesome's free solid icons
import { useRef } from 'react';

// List of application phases
const items = [
    {
        phase: "Personal details",
        step: "step 1 / 4",
    },
    {
        phase: "Address",
        step: "step 2 / 4",
    },
    {
        phase: "Review",
        step: "step 3 / 4",
    },
    {
        phase: "Payment",
        step: "step 4 / 4",
    },
];

const IPAResponsive = ({ phases }) => {

    const carouselContainer = useRef(); // Reference to carousel container

    return (
        <div className='IPAResponsive' style={phases === 4 ? { display: "none" } : { display: "block" }} >
            <div className="content">
                <div className="partOne">
                    <h3>Immigrateable Pro Application</h3>
                    <ul ref={carouselContainer}>
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
                                <div className="icon">
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                                <div className="text">
                                    <span>{item.step}</span>
                                    <p>{item.phase}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default IPAResponsive;
