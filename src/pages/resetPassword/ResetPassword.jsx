// Importing necessary styles and components
import './style.scss';
import { Animation, Effect, Footer, Header } from '../../components'; // Importing custom components
import img from '../../assets/login.png'; // Importing image asset
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from React Router
import { useEffect, useState } from 'react'; // Importing React hooks
import { TimaAnimation } from '../../constants'; // Importing constant for animation timing

// Functional component for the Reset Password page
const ResetPassword = () => {

    const navigate = useNavigate(); // Hook for navigation between pages

    // State to store the email input value
    const [email, setEmail] = useState("");

    // State to control whether the animation is active (true) or finished (false)
    const [animationOff, setAnimationOff] = useState(true);

    // Function to turn off the animation after the duration specified by the TimaAnimation constant
    const animationOFF = () => {
        setTimeout(() => {
            setAnimationOff(false); // Turns off animation after the specified delay
        }, TimaAnimation);
    };

    // useEffect hook to scroll to top of the page and start animation when component mounts
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls the page to the top on component load
        animationOFF(); // Starts the timer to turn off the animation
    }, []); // Empty dependency array ensures this runs only once when the component is mounted

    return (
        <>
            {/* Conditionally rendering either the Animation component or the rest of the page based on animationOff state */}
            {animationOff ? (
                <Animation />
            ) : (
                <Effect>
                    <Header />
                    <div className="resetPassword">
                        <div className="container">
                            <div className="grid">
                                <div className='formResetPassword'>
                                    <div className="title">
                                        <h1>Reset Password</h1>
                                    </div>
                                    <form>
                                        <div className="input">
                                            <label htmlFor="email">Email <span>*</span></label>
                                            <input
                                                id="email"
                                                type="email"
                                                value={email} // Controlled input value
                                                onChange={(e) => setEmail(e.target.value)} // Update email state on change
                                                placeholder="Enter your email" // Placeholder text for the input
                                                required // Mark the input as required
                                            />
                                        </div>
                                        <button type="submit">Reset Password</button> {/* Button to submit the form */}
                                        <p>
                                            Remember password?{" "}
                                            <span onClick={() => navigate("/login")}>Back to Log in</span> {/* Link to the login page */}
                                        </p>
                                    </form>
                                </div>
                                <div className="image">
                                    <img src={img} alt="background" />
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

export default ResetPassword; // Exporting the ResetPassword component for use in other parts of the application
