// Importing necessary styles, components, and assets
import './style.scss';
import { Animation, Effect, Footer, Header } from '../../components';
import { useNavigate } from "react-router-dom";
import background from '../../assets/background.png';
import { useEffect, useState } from 'react';
import { TimaAnimation } from '../../constants';

// Functional component for the "Not Found" page
const NotFoundPage = () => {

    const navigate = useNavigate(); // Hook to programmatically navigate between routes

    // State to control whether the animation is active or not
    const [animationOff, setAnimationOff] = useState(true);

    // Function to disable the animation after a certain duration defined in TimaAnimation constant
    const animationOFF = () => {
        setTimeout(() => {
            setAnimationOff(false); // After the delay, the animation is turned off
        }, TimaAnimation);
    };

    // Effect to trigger scroll to top and start the animation when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page on component load
        animationOFF(); // Start the timer to turn off animation
    }, []); // Empty dependency array means this effect runs once when the component mounts

    return (
        <>
            {/* Conditionally rendering based on the animationOff state */}
            {animationOff ? (
                <Animation />
            ) : (
                <Effect>
                    <Header />
                    <div className="notFoundPage">
                        <div className="image">
                            <img src={background} alt="404 Background" />
                        </div>
                        <div className="container">
                            <h1>404</h1>
                            <h4>Page Not Found</h4>
                            <p>Oops! It looks like the page you're looking for doesn't exist. <br />
                                Go back to the <span onClick={() => navigate('/')} >homepage</span>.</p>
                        </div>
                    </div>
                    <Footer />
                </Effect>
            )}
        </>
    );
}

export default NotFoundPage;
