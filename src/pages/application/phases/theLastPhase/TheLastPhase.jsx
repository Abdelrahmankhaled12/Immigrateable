import './style.scss'; // Importing the stylesheet
import flag from '../../../../assets/Group 36.png'; // Importing the flag image
import Payment from '../../components/payment/Payment';
import ImmigrateableProApplication from '../../immigrateableProApplication/ImmigrateableProApplication';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';  // Importing useSelector hook from react-redux
import { useEffect, useState } from 'react';

// TheLastPhase component - this component renders the payment form UI
const TheLastPhase = ({ phases, setPhases }) => {

    const { payment } = useSelector(state => state.payment);  // Selecting notifications state from the Redux store

    const [active , setActive ] = useState(false)

    useEffect(() => {
        if(payment.email.trim() && payment.paymentMethod.trim() && payment.cardInformation.trim() && payment.mmYY.trim() && payment.cvc.trim() && payment.country.trim() && payment.cardholderName.trim()) {
            setActive(true)
        }else {
            setActive(false)
        }
    }, [payment])

    return (
        <>
            <h1>Payment</h1>
            <div className="grid">
                <div>
                    <div className='theLastPhase'>
                        <div className="box">
                            <div className="gridTheLastPhase">
                                {/* Image section with accompanying text */}
                                <div className='image'>
                                    <img src={flag} alt="Flag" />
                                    <div className="text">
                                        <p>immigrateble <span>pro </span> application </p>
                                        <h2>$35</h2>
                                    </div>
                                </div>
                                <Payment />
                            </div>
                        </div>
                    </div>
                    <div className="controls">
                        <button onClick={() => setPhases(phases - 1)} className='backButton'>Back</button>
                        <button
                        //  className={active ? "" : "hide"}
                          onClick={() => setPhases(phases + 1)}>
                            <p>Finish & Pay</p>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                </div>
                <ImmigrateableProApplication phases={phases} />
            </div>
        </>

    );
}

export default TheLastPhase;
