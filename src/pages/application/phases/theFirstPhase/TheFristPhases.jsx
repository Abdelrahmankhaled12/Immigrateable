import React from 'react'
import PrimaryApplicant from '../../components/primaryApplicant/PrimaryApplicant'
import CountryOfEligibility from '../../components/countryOfEligibility/CountryOfEligibility'
import EmailAddress from '../../components/emailAddress/EmailAddress'
import ImmigrateableProApplication from '../../immigrateableProApplication/ImmigrateableProApplication'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Photograph from '../../components/photograph/Photograph'
import AddFamilyMember from '../../components/addFamilyMember/AddFamilyMember'
import { useSelector } from 'react-redux';  // Importing useSelector hook from react-redux
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from React Router

const TheFristPhases = ({ phases, setPhases }) => {

    const { primaryApplicant } = useSelector(state => state.personalDetails);  // Selecting notifications state from the Redux store
    
    const navigate = useNavigate(); // Hook for navigation

    useEffect(() => {
        console.log(primaryApplicant)
    }, [primaryApplicant])

    // State to manage the activation of the "Save & Continue" button
    const [active, setActive] = useState(false);

    // Effect to check if all required fields are filled and activate the button
    useEffect(() => {
        const isFormComplete = () => {
            return (
                primaryApplicant.firstName.trim() &&
                primaryApplicant.lastName.trim() &&
                primaryApplicant.dateOfBirth.trim() &&
                primaryApplicant.sex.trim() &&
                primaryApplicant.countryBorn.trim() &&
                primaryApplicant.countryEligibility.trim() &&
                primaryApplicant.cityBorn.trim() &&
                primaryApplicant.photograph !== "" &&
                primaryApplicant.email.trim()
            );
        };

        setActive(isFormComplete());
    }, [primaryApplicant]);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (active) {
            setPhases(phases + 1);
        }
    };


    return (
        <>
            <h1>Personal details</h1>
            <div className="grid">
                <form onSubmit={handleSubmit}>
                    <div>
                        <div className="personalDetails">
                            <PrimaryApplicant />
                            <CountryOfEligibility />
                            <div className="gridHome">
                                <EmailAddress />
                                <Photograph />
                            </div>
                            <AddFamilyMember />
                        </div>
                    </div>
                    <div className="controls">
                        <button className='backButton' onClick={() => navigate("/")}>Back</button>
                        <button
                            // className={active ? "" : "hide"}
                            // disabled={!active}
                            onClick={() => setPhases(phases + 1)}

                        >
                            <p>Save & Continue</p>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                </form>
                <ImmigrateableProApplication phases={phases} />
            </div>
        </>

    )
}

export default TheFristPhases