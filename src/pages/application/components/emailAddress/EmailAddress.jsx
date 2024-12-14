import { setEmailPrimaryApplicant } from '../../../../store/personalDetails';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';

const EmailAddress = () => {
    // Accessing primary applicant details from Redux store
    const { primaryApplicant } = useSelector(state => state.personalDetails);

    // Hook to dispatch actions to the Redux store
    const dispatch = useDispatch();

    return (
        <div className="emailAddress">
            <div className="box">
                <div className="title">
                    <h2>Email Address</h2>
                    <p>The U.S. Government will send more information to this email address if you get chosen.</p>
                </div>
                <div className="input">
                    <label htmlFor="email">Email <span>*</span></label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        onChange={(e) => dispatch(setEmailPrimaryApplicant(e.target.value))}
                        value={primaryApplicant.email}
                        required
                        className={primaryApplicant.email !== "" ? "activeInput" : ""}
                    />
                </div>
            </div>
        </div>
    );
};

export default EmailAddress;
