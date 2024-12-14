/* eslint-disable react/prop-types */  // Disable prop-types linting for this file (can be removed in TSX as prop-types aren't necessary)
import './style.scss';  // Import SCSS stylesheet for styling
import { faXmark } from '@fortawesome/free-solid-svg-icons';  // Import specific icons from FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Import FontAwesomeIcon component
import logo from '../../../assets/Group 38.png';  // Import logo image
import { useNavigate } from 'react-router-dom';  // Import hooks from react-router-dom for navigation and getting the current location
import { HEADER_LINKS } from '../../../constants';  // Import HEADER_LINKS constant


const MenuMobile = ({ isOpenMenu, closeModalMenu }) => {

    const navigate = useNavigate(); // Hook for navigation
    
    return (
        <>
            {/* Main menu container with conditional class based on isOpenMenu prop */}
            <div className={isOpenMenu ? "menu menu_active" : "menu"}>
                <div className="flex">
                    <div className="content">
                        <div>
                            <div className="top">
                                {/* Logo area */}
                                <div className="logo" onClick={() => navigate("/")}>
                                    <img src={logo} alt="logo" />
                                    <p>Immigrate<span>able</span></p>
                                </div>
                                {/* Close button with FontAwesome icon */}
                                <button onClick={() => closeModalMenu()}>
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>
                            </div>
                        </div>
                        {/* Buttons section */}
                        <div className="buttons">
                            {/* Conditional rendering: Only show 'Start for free' button if not on the /application page */}
                            {
                                location.pathname !== "/application" && (
                                    <button className='startForFree' onClick={() => navigate("/application")}>
                                        Start for free
                                    </button>
                                )
                            }

                            {/* Login button */}
                            <button className="loginButton" onClick={() => navigate("/login")}>Login</button>
                        </div>
                        <ul>
                            {/* Map over HEADER_LINKS to render each link as a list item */}
                            {
                                HEADER_LINKS.map((item, index) => (
                                    <li
                                        key={index}  // Unique key for each list item
                                        onClick={() => navigate(item.router)}  // Navigate to the link's route when clicked
                                    >
                                        {item.title}  {/* Render the link's title */}
                                    </li>
                                ))
                            }
                        </ul>

                    </div>
                    {/* Clickable area to close menu by calling closeModalMenu */}
                    <div style={{ flex: 1 }} onClick={() => closeModalMenu()}></div>
                </div>
            </div>
        </>
    );
};

export default MenuMobile;  // Export MenuMobile component as the default export
