import { setCountryLive } from '../../../../store/address';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';

const CountryToDay = () => {
    // Access the address state from the Redux store
    const { address } = useSelector(state => state.address);

    // Get the dispatch function to dispatch actions
    const dispatch = useDispatch();

    // Handle input change to update the country in the Redux store
    const handleCountryChange = (e) => {
        dispatch(setCountryLive(e.target.value));
    };

    return (
        <div className="countryToDay">
            <div className="box">
                <div className="title">
                    <h2>Country Where You Live Today</h2>
                </div>
                <div className="fields">
                    <div className="input">
                        <label htmlFor="countryInput">
                            Country where you live today <span>*</span>
                        </label>
                        <input
                            type="text"
                            id="countryInput"
                            placeholder="Type to search country"
                            onChange={handleCountryChange} // Call handleCountryChange on input change
                            value={address.countryLive} // Controlled component
                            required
                            className={address.countryLive !== "" ? "activeInput" : ""}

                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryToDay;
