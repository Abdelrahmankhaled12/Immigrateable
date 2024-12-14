// Importing necessary styles, assets, and components
import './style.scss'; // Styles for the header
import logo from '../../assets/Group 38.png'; // Logo image
import Languages from './languages/Languages'; // Language switcher component
import menu from '../../assets/menu.png'; // Menu icon for mobile
import MenuMobile from './menuMobile/MenuMobile'; // Mobile menu component
import { useState } from 'react'; // useState hook for state management
import { useLocation, useNavigate } from 'react-router-dom'; // Hooks for routing and navigation
import { HEADER_LINKS } from '../../constants'; // Header links constant

const Header = () => {

    // State to track if the mobile menu is open or closed
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    // Hook to navigate between different routes/pages
    const navigate = useNavigate();

    // Hook to get current location (route), useful for conditionally rendering elements
    const location = useLocation();

    return (
        <>
            {/* Main header structure */}
            <header>
                <div className="container">
                    <div className="partOne">

                        {/* Mobile menu icon for opening the sidebar */}
                        <div className="iconMenuMobile" onClick={() => setIsOpenMenu(true)}>
                            <img src={menu} alt="menu" />
                        </div>

                        {/* Logo section */}
                        <div className="logo" onClick={() => navigate("/")}> {/* Logo click navigates to the home page */}
                            <img src={logo} alt="Immigrateable logo" />
                            <p>Immigrate<span>able</span></p>
                        </div>

                        {/* Navigation links */}
                        <ul>
                            {HEADER_LINKS.map((item, index) => (
                                <li
                                    key={index}
                                    onClick={() => navigate(item.router)} // Navigate to the corresponding route on click
                                >
                                    {item.title} {/* Display the title of the link */}
                                </li>
                            ))}
                        </ul>
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

                        {/* Language switcher component */}
                        <Languages />
                    </div>
                </div>
            </header>

            {/* Mobile menu component for smaller screens */}
            <MenuMobile
                isOpenMenu={isOpenMenu} // Pass the state to control if the mobile menu is open
                closeModalMenu={() => setIsOpenMenu(false)} // Function to close the mobile menu
            />
        </>
    );
}

export default Header; // Exporting the Header component
