import { useEffect, useState } from 'react';
import './style.scss';
import TheFristPhases from './phases/theFirstPhase/TheFristPhases';
import TheSecondPhase from './phases/theSecondPhase/TheSecondPhase';
import TheThreePhase from './phases/theThreePhase/TheThreePhase';
import TheLastPhase from './phases/theLastPhase/TheLastPhase';
import ThankYou from './thanlYou/ThankYou';
import Loading from '../../components/loading/Loading';
import Effect from '../../components/effect/Effect';
import { Animation, Footer, Header } from '../../components';
import IPAResponsive from './immigrateableProApplication/IPAResponsive/IPAResponsive';
import { TimaAnimation } from '../../constants';

const Application = () => {

    // State for tracking the current phase
    const [phases, setPhases] = useState(0);

    // State to manage the initial page load
    const [firstOpenPage, setFirstOpenPage] = useState(true);

    // State to manage animation during phase transition
    const [animationOff, setAnimationOff] = useState(false);

    // State to control whether the animation is active or not
    const [animationOffStart, setAnimationOffStart] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        animationOFFStart()
    }, []);

    useEffect(() => {
        // Scroll to top when phase changes
        window.scrollTo(0, 0);
        // Trigger animation and phase transition effects
        setAnimationOff(true);
        animationOFF();
    }, [phases]);

    // Function to manage the animation state after a delay
    const animationOFF = () => {
        setTimeout(() => {
            setFirstOpenPage(false);
            setAnimationOff(false);
        }, 1200); // Delay for 1.2 seconds
    };

    // Function to disable the animation after a certain duration defined in TimaAnimation constant
    const animationOFFStart = () => {
        setTimeout(() => {
            setAnimationOffStart(false); // After the delay, the animation is turned off
        }, TimaAnimation);
    };

    // Function to render the current phase
    const renderPhase = () => {
        switch (phases) {
            case 0:
                return <TheFristPhases phases={phases} setPhases={setPhases} />;
            case 1:
                return <TheSecondPhase phases={phases} setPhases={setPhases} />;
            case 2:
                return <TheThreePhase phases={phases} setPhases={setPhases} />;
            case 3:
                return <TheLastPhase phases={phases} setPhases={setPhases} />;
            default:
                return <ThankYou />;
        }
    };

    return (
        <>
            {/* Conditionally rendering based on the animationOff state */}
            {animationOffStart ? (
                <Animation />
            ) : (
                <Effect>
                    <Header />
                    <IPAResponsive phases={phases} />
                    <div className='application'>
                        <div className="container">
                            {
                                (animationOff && !firstOpenPage) ? (
                                    <div className="loading">
                                        <Loading />
                                    </div>
                                ) : (
                                    <Effect>
                                        {renderPhase()}
                                    </Effect>
                                )
                            }
                        </div>
                    </div>
                    <Footer />
                </Effect>
            )}
        </>
    );
}

export default Application;
