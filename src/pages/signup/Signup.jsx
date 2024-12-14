// Importing necessary styles and components
import './style.scss'; 
import { Animation, Effect, Footer, Header } from '../../components'; // Importing reusable components
import img from '../../assets/login.png'; // Importing the background image for the signup form
import { useEffect, useState } from 'react'; // Importing useEffect and useState hooks for component logic
import { TimaAnimation } from '../../constants'; // Importing animation duration constant
import SignForm from './form/SignForm'; // Importing SignForm component for the signup form

const Signup = () => {

    // State to control whether the animation is still running (true) or finished (false)
    const [animationOff, setAnimationOff] = useState(true);

    // Function to disable animation after a certain time (TimaAnimation constant defines the duration)
    const animationOFF = () => {
        setTimeout(() => {
            setAnimationOff(false); // Turns off animation after delay
        }, TimaAnimation); // Delay duration is set by TimaAnimation
    };

    // useEffect hook triggers when component mounts to:
    // - Scroll to the top of the page
    // - Start the animation and set a timer to turn it off
    useEffect(() => {
        window.scrollTo(0, 0); // Ensure the user is at the top of the page on component load
        animationOFF(); // Start the timer to disable the animation
    }, []); // Empty dependency array ensures it only runs once (on component mount)

    return (
        <>
            {/* Conditionally render either the Animation component or the main content */}
            {animationOff ? (
                <Animation /> // Render animation if it's still running
            ) : (
                <Effect> 
                    <Header /> 
                    <div className="signup">
                        <div className="container">
                            <div className="grid">
                                <SignForm /> {/* Custom SignForm component for the signup form */}
                                <div className="image">
                                    <img src={img} alt="Signup Background" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer /> 
                </Effect>
            )}
        </>
    );
}

export default Signup; // Exporting the Signup component
