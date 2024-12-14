import React from 'react'
import CountryToDay from '../../components/countryToDay/CountryToDay'
import MailingAddress from '../../components/mailingAddress/MailingAddress'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ImmigrateableProApplication from '../../immigrateableProApplication/ImmigrateableProApplication';
import EmailAddress from '../../components/emailAddress/EmailAddress';
import CountryOfEligibility from '../../components/countryOfEligibility/CountryOfEligibility';
import PrimaryApplicant from '../../components/primaryApplicant/PrimaryApplicant';
import AddFamilyMember from '../../components/addFamilyMember/AddFamilyMember';
import Photograph from '../../components/photograph/Photograph';


const TheThreePhase = ({ phases, setPhases }) => {

    return (
        <>
            <h1>Personal details</h1>
            <div className="grid">
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
                    <h1>Address</h1>
                    <CountryToDay />
                    <MailingAddress />
                    <div className="controls">
                        <button onClick={() => setPhases(phases - 1)} className='backButton'>Back</button>
                        <button onClick={() => setPhases(phases + 1)}>
                            <p>Save & Continue</p>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                </div>
                <ImmigrateableProApplication phases={phases} />
            </div>
        </>
    )
}

export default TheThreePhase