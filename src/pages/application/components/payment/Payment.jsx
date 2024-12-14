import { 
    setCVC, 
    setCardInformation, 
    setCardholderName, 
    setCountry, 
    setEmail, 
    setMMYY, 
    setPaymentMethod 
} from '../../../../store/payment'; // Importing action creators
import './style.scss'; // Importing styles
import { useDispatch, useSelector } from 'react-redux'; // Importing hooks from React-Redux

const Payment = () => {
    // Accessing payment state from Redux store
    const { payment } = useSelector(state => state.payment);

    // Hook to dispatch actions
    const dispatch = useDispatch();

    return (
        <div className="payment">
            {/* Email input */}
            <div className="input">
                <label htmlFor="email">Email <span>*</span></label>
                <input
                    type="email"
                    id="email"
                    placeholder='Enter your email'
                    onChange={(e) => dispatch(setEmail(e.target.value))}
                    value={payment.email}
                    required
                />
            </div>

            {/* Payment method selection */}
            <div className="radiosFields">
                <p>Payment method <span>*</span></p>
                <div className="radios">
                    <div className="radio">
                        <input
                            type="radio"
                            name="PaymentMethod"
                            id='Card'
                            onChange={(e) => dispatch(setPaymentMethod(e.target.value))}
                            value="Card"
                            checked={payment.paymentMethod === "Card"}
                        />
                        <label className='left' htmlFor="Card">Card</label>
                    </div>
                    <div className="radio">
                        <input
                            type="radio"
                            name="PaymentMethod"
                            onChange={(e) => dispatch(setPaymentMethod(e.target.value))}
                            value="Alipay"
                            checked={payment.paymentMethod === "Alipay"}
                            id="Alipay"
                        />
                        <label className='right' htmlFor="Alipay">Alipay</label>
                    </div>
                </div>
            </div>

            {/* Card information input */}
            <div className="input cardInfo">
                <label htmlFor="cardInfo">Card information <span>*</span></label>
                <input
                    type="text"
                    id="cardInfo"
                    placeholder='1256 1236 1236 1236'
                    onChange={(e) => dispatch(setCardInformation(e.target.value))}
                    value={payment.cardInformation}
                    required
                />
            </div>

            {/* Expiration date and CVC inputs */}
            <div className="fieldsInputs">
                <div className="input">
                    <input
                        type="text"
                        placeholder='MM/YY'
                        onChange={(e) => dispatch(setMMYY(e.target.value))}
                        value={payment.mmYY}
                        required
                    />
                </div>
                <div className="input">
                    <input
                        type="text"
                        placeholder='CVC'
                        onChange={(e) => dispatch(setCVC(e.target.value))}
                        value={payment.cvc}
                        required
                    />
                </div>
            </div>

            {/* Cardholder name input */}
            <div className="input">
                <label htmlFor="cardholderName">Cardholder name <span>*</span></label>
                <input
                    type="text"
                    id="cardholderName"
                    placeholder='Full name on card'
                    onChange={(e) => dispatch(setCardholderName(e.target.value))}
                    value={payment.cardholderName}
                    required
                />
            </div>

            {/* Country input */}
            <div className="input">
                <label htmlFor="country">Enter country or region <span>*</span></label>
                <input
                    type="text"
                    id="country"
                    placeholder='Enter your country or region'
                    onChange={(e) => dispatch(setCountry(e.target.value))}
                    value={payment.country}
                    required
                />
            </div>
        </div>
    );
}

export default Payment;
