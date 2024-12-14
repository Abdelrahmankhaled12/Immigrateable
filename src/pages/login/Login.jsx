import './style.scss'
import { Animation, Effect, Footer, Header } from '../../components'
import FormLogin from './form/FormLogin'
import img from '../../assets/login.png'
import { useEffect, useState } from 'react'
import { TimaAnimation } from '../../constants'

const Login = () => {
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
            {animationOff ? (
                <Animation />
            ) : (
                <Effect>
                    <Header />
                    <div className="login">
                        <div className="container">
                            <div className="grid">
                                <FormLogin />
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

export default Login