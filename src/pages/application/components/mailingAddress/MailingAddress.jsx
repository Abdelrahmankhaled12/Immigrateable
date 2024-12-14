import {
    setAddressLineOne,
    setAddressLineTwo,
    setCity,
    setDistrict,
    setPhoneNumber,
    setPostalCode
} from '../../../../store/address';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';

const MailingAddress = () => {
    // Access the address state from the Redux store
    const { address } = useSelector(state => state.address);

    // Get the dispatch function to dispatch actions
    const dispatch = useDispatch();

    // Handle changes for each input field
    const handleAddressLineOneChange = (e) => {
        dispatch(setAddressLineOne(e.target.value));
    };

    const handleAddressLineTwoChange = (e) => {
        dispatch(setAddressLineTwo(e.target.value));
    };

    const handleCityChange = (e) => {
        dispatch(setCity(e.target.value));
    };

    const handleDistrictChange = (e) => {
        dispatch(setDistrict(e.target.value));
    };

    const handlePostalCodeChange = (e) => {
        dispatch(setPostalCode(e.target.value));
    };

    const handlePhoneNumber = (e) => {
        dispatch(setPhoneNumber(e.target.value));
    };


    return (
        <div className="mailingAddress">
            <div className="box">
                <div className="title">
                    <h2>Mailing Address</h2>
                    <p>The U.S. Government will send more information to this mailing address if you get chosen.</p>
                </div>
                <div className="fields">
                    <div className="input">
                        <label htmlFor="addressLineOne">Address Line 1 <span>*</span></label>
                        <input
                            type="text"
                            id="addressLineOne"
                            placeholder="Enter your address line 1"
                            onChange={handleAddressLineOneChange}
                            value={address.addressLineOne}
                            className={address.addressLineOne !== "" ? "activeInput" : ""}
                            required
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="addressLineTwo">Address Line 2</label>
                        <input
                            type="text"
                            id="addressLineTwo"
                            placeholder="Enter your address line 2 (if any)"
                            onChange={handleAddressLineTwoChange}
                            value={address.addressLineTwo}
                            className={address.addressLineTwo !== "" ? "activeInput" : ""}
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="city">City/Town <span>*</span></label>
                        <input
                            type="text"
                            id="city"
                            placeholder="Type to search city/town"
                            onChange={handleCityChange}
                            value={address.city}
                            className={address.city !== "" ? "activeInput" : ""}
                            required
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="district">District/Country/Province/State <span>*</span></label>
                        <input
                            type="text"
                            id="district"
                            placeholder="District/Country/Province/State"
                            onChange={handleDistrictChange}
                            value={address.district}
                            required
                            className={address.district !== "" ? "activeInput" : ""}

                        />
                    </div>
                    <div className="input">
                        <label htmlFor="phoneNumber">Phone Number <span>*</span></label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            placeholder="Enter your phone number"
                            onChange={handlePhoneNumber}
                            value={address.phoneNumber}
                            required
                            className={address.phoneNumber !== "" ? "activeInput" : ""}

                        />
                    </div>
                    <div className="input">
                        <label htmlFor="postalCode">Postal Code <span>*</span></label>
                        <input
                            type="text"
                            id="postalCode"
                            placeholder="Enter your postal code"
                            onChange={handlePostalCodeChange}
                            value={address.postalCode}
                            required
                            className={address.postalCode !== "" ? "activeInput" : ""}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MailingAddress;
