import { setCityBorn, setCountryBorn, setCountryEligibility } from '../../../../store/personalDetails';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';

const CountryOfEligibility = () => {
    // Accessing primary applicant details from Redux store
    const { primaryApplicant } = useSelector(state => state.personalDetails);

    // Hook to dispatch actions to the Redux store
    const dispatch = useDispatch();

    return (
        <div className="countryOfEligibility">
            <div className="box">
                <div className="title">
                    <h2>country of eligibility</h2>
                </div>
                <div className="fields">
                    <div className="input">
                        <label htmlFor="">Country where you were born <span>*</span> </label>
                        <input
                            onChange={(e) => dispatch(setCountryBorn(e.target.value))}
                            value={primaryApplicant.countryBorn}
                            type="text" placeholder='Type to search country'
                            required
                            className={primaryApplicant.countryBorn !== "" ? "activeInput" : ""}

                        />
                    </div>
                    <div className="input">
                        <label htmlFor="">City where you were born <span>*</span> </label>
                        <input
                            type="text"
                            placeholder='Type to search city'
                            onChange={(e) => dispatch(setCityBorn(e.target.value))}
                            value={primaryApplicant.cityBorn}
                            required
                            className={primaryApplicant.cityBorn !== "" ? "activeInput" : ""}

                        />
                    </div>
                    <div className="input">
                        <label htmlFor="">Country of eligibility <span>*</span> </label>
                        <input
                            type="text"
                            placeholder='Type to search country'
                            required
                            onChange={(e) => dispatch(setCountryEligibility(e.target.value))}
                            value={primaryApplicant.countryEligibility}
                            className={primaryApplicant.countryEligibility !== "" ? "activeInput" : ""}

                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CountryOfEligibility