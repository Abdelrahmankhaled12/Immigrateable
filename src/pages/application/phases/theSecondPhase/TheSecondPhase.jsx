import React, { useEffect, useState } from 'react';
import CountryToDay from '../../components/countryToDay/CountryToDay';
import MailingAddress from '../../components/mailingAddress/MailingAddress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ImmigrateableProApplication from '../../immigrateableProApplication/ImmigrateableProApplication';
import { useSelector } from 'react-redux';

const TheSecondPhase = ({ phases, setPhases }) => {
  // Access the address state from the Redux store
  const { address } = useSelector(state => state.address);

  // State to manage the activation of the "Save & Continue" button
  const [active, setActive] = useState(false);

  // Effect to check if all required fields are filled and activate the button
  useEffect(() => {
    const isFormComplete = () => {
      return (
        address.countryLive.trim() &&
        address.addressLineOne.trim() &&
        address.city.trim() &&
        address.district.trim() &&
        address.phoneNumber.trim() &&
        address.postalCode.trim()
      );
    };

    setActive(isFormComplete());
  }, [address]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (active) {
      setPhases(phases + 1);
    }
  };

  return (
    <>
      <h1>Address</h1>
      <div className="grid">
        <form onSubmit={handleSubmit}>
          <div className='theSecondPhase'>
            <CountryToDay />
            <MailingAddress />
          </div>
          <div className="controls">
            <button
              onClick={() => setPhases(phases - 1)}
              type='button'
              className='backButton'
            >
              Back
            </button>
            <button
              type='submit'
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
  );
};

export default TheSecondPhase;
