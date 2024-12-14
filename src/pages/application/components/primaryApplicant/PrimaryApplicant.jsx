import { setDateOfBirth, setFirstName, setLastName, setMiddleName, setSex } from '../../../../store/personalDetails';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux'; // Importing hooks from React-Redux

const PrimaryApplicant = () => {
    // Accessing primary applicant details from Redux store
    const { primaryApplicant } = useSelector(state => state.personalDetails);

    // Hook to dispatch actions to the Redux store
    const dispatch = useDispatch();

    // Function to handle input changes and dispatch actions
    const handleInputChange = (setter) => (e) => {
        dispatch(setter(e.target.value));
    };

    function changeDate(setDateOfBirth) {
        return (event) => {
            let input = event.target.value;

            input = input.replace(/[^\d]/g, '');

            if (input.length >= 1 && input.length <= 2) {
                let month = input.slice(0, 2);
                if (parseInt(month) > 12) {
                    month = '12';
                } else if (month.length === 1 && parseInt(month) > 1) {
                    month = '0' + month;
                }
                input = month;
            }

            else if (input.length > 2 && input.length <= 4) {
                let month = input.slice(0, 2);
                let day = input.slice(2, 4);
                if (parseInt(day) > 31) {
                    day = '31';
                }
                console.log(day)
                input = month + '/' + day;
            }

            else if (input.length > 4) {
                let month = input.slice(0, 2);
                let day = input.slice(2, 4);
                let year = input.slice(4, 8);
                if (year.length > 4) {
                    year = year.slice(0, 4);
                }
                input = month + '/' + day + '/' + year;
            }

            if (input.length > 10) {
                input = input.slice(0, 10);
            }


            dispatch(setDateOfBirth(input));
        };
    }

    return (
        <div className="primaryApplicant">
            <div className="box">
                <div className="title">
                    <h2>Primary Applicant</h2>
                    <p>Privacy notice: Your information will not be shared with any 3rd party.</p>
                </div>
                <div className="fields">
                    <div className="input">
                        <label htmlFor="firstName">First name <span>*</span></label>
                        <input
                            id="firstName"
                            onChange={handleInputChange(setFirstName)}
                            value={primaryApplicant.firstName}
                            type="text"
                            placeholder='Enter your first name'
                            required
                            className={primaryApplicant.firstName !== "" ? "activeInput" : ""}

                        />
                    </div>
                    <div className="input">
                        <label htmlFor="lastName">Last name <span>*</span></label>
                        <input
                            id="lastName"
                            type="text"
                            onChange={handleInputChange(setLastName)}
                            value={primaryApplicant.lastName}
                            placeholder='Enter your last name'
                            required
                            className={primaryApplicant.lastName !== "" ? "activeInput" : ""}

                        />
                    </div>
                    <div className="input">
                        <label htmlFor="middleName">Middle name</label>
                        <input
                            id="middleName"
                            onChange={handleInputChange(setMiddleName)}
                            value={primaryApplicant.middleName}
                            type="text"
                            placeholder='Enter your middle name (if any)'
                            className={primaryApplicant.middleName !== "" ? "activeInput" : ""}

                        />
                    </div>
                    <div className="input">
                        <label htmlFor="dateOfBirth">Date of birth <span>*</span></label>
                        <input
                            id="dateOfBirth"
                            type="text"
                            placeholder='mm/dd/yyyy'
                            required
                            onChange={changeDate(setDateOfBirth)}
                            value={primaryApplicant.dateOfBirth}
                            className={primaryApplicant.dateOfBirth !== "" ? "activeInput" : ""}
                        />
                    </div>
                    <div className="radiosFields">
                        <p>Sex <span>*</span></p>
                        <div className="radios">
                            <div className="radio">
                                <input
                                    type="radio"
                                    name="sex"
                                    id="Female"
                                    onChange={handleInputChange(setSex)}
                                    value="Female"
                                    checked={primaryApplicant.sex === "Female"}
                                />
                                <label className='left' htmlFor="Female">Female</label>
                            </div>
                            <div className="radio">
                                <input
                                    type="radio"
                                    name="sex"
                                    id="Male"
                                    onChange={handleInputChange(setSex)}
                                    value="Male"
                                    checked={primaryApplicant.sex === "Male"}
                                />
                                <label className='right' htmlFor="Male">Male</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrimaryApplicant;
