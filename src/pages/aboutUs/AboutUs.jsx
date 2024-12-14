// Importing necessary styles, components, and assets
import './style.scss';
import { Animation, Effect, Footer, Header } from '../../components';
import { useEffect, useState } from 'react';
import { TimaAnimation } from '../../constants';

// Functional component for the "Privacy Policy" page
const AboutUs = () => {

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
                    <div className="privacyPolicy">
                        <div className="container">
                            <div className="title">
                                <h1>About Us</h1>
                            </div>
                            <div className="content">
                                <div className="date">
                                    <p>Welcome to [Your Company Name], your trusted partner in navigating the Green Card application process.</p>
                                </div>
                                <h1>Our Mission</h1>
                                <p>Our mission is to simplify the path to permanent residency in the United States. We understand that the Green Card application process can be complex and daunting, which is why we are dedicated to providing clear, reliable, and comprehensive assistance to help you achieve your American dream.</p>
                                <h1>Who We Are</h1>
                                <p>
                                    Founded by a team of immigration experts and legal professionals, [Your Company Name] has years of experience in immigration law and a deep understanding of the U.S. immigration system. Our team is passionate about helping individuals and families from all over the world secure their future in the United States.                                </p>
                                <h1>What We Do</h1>
                                <p>We offer a full range of services designed to make your Green Card application process as smooth and stress-free as possible:</p>
                                <ul>
                                    <li>Consultation Services: Personalized advice and guidance tailored to your unique situation.</li>
                                    <li>Document Preparation: Assistance with gathering, completing, and reviewing all necessary documents.</li>
                                    <li>Application Submission: Ensuring your application is correctly submitted to the appropriate authorities.</li>
                                    <li>Follow-Up Support: Ongoing support and updates throughout the entire application process.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </Effect>
            )}
        </>
    );
}

export default AboutUs;
