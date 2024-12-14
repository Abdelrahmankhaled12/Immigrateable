// Importing necessary styles, components, and assets
import './style.scss';
import { Animation, Effect, Footer, Header } from '../../components';
import { useEffect, useState } from 'react';
import { TimaAnimation } from '../../constants';

// Functional component for the "Privacy Policy" page
const PrivacyPolicy = () => {

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
                                <h1>Privacy Policy</h1>
                            </div>
                            <div className="content">
                                <div className="date">
                                    <p>Last Updated: <span>[Date]</span></p>
                                </div>
                                <h1>1. Introduction</h1>
                                <p>[Your Company Name] ("Company", "we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.</p>
                                <h1>2. Information We Collect</h1>
                                <p>We may collect the following types of information:</p>
                                <ul>
                                    <li><span>Personal Information:</span> Name, email address, phone number, postal address, and other contact details. </li>
                                    <li><span>Financial Information:</span> Payment card details and bank account information for processing payments.</li>
                                    <li><span>Technical Information:</span> IP address, browser type, operating system, website visit data, and service usage information.</li>
                                </ul>
                                <h1>3. How We Use Your Information</h1>
                                <p>We use your information for the following purposes:</p>
                                <ul>
                                    <li>Processing Green Card applications and providing related services.</li>
                                    <li>Processing payments and managing orders.</li>
                                    <li>Communicating with you, including sending notifications and responding to inquiries.</li>
                                    <li>Improving our services and website.</li>
                                    <li>Fulfilling legal obligations and preventing frau</li>
                                </ul>
                                <h1>3.1 How We Use Your Information</h1>
                                <p>We use your information for the following purposes:</p>
                                <ul>
                                    <li>Processing Green Card applications and providing related services.</li>
                                    <li>Processing payments and managing orders.</li>
                                    <li>Communicating with you, including sending notifications and responding to inquiries.</li>
                                    <li>Improving our services and website.</li>
                                    <li>Fulfilling legal obligations and preventing frau</li>
                                </ul>
                                <h1>3.2 Sharing Your Information</h1>
                                <p>We use your information for the following purposes:</p>
                                <ul>
                                    <li>Processing Green Card applications and providing related services.</li>
                                    <li>Processing payments and managing orders.</li>
                                    <li>Communicating with you, including sending notifications and responding to inquiries.</li>
                                    <li>Improving our services and website.</li>
                                    <li>Fulfilling legal obligations and preventing frau</li>
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

export default PrivacyPolicy;
