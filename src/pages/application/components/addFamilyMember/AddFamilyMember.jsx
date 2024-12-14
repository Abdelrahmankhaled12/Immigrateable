import React, { useEffect, useState } from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import PhotographMemer from './PhotographMemer';
import { useDispatch, useSelector } from 'react-redux';
import { setAddFamilyMember, setDateOfBirthFamily, setFamilyMember, setFirstNameFamily, setLastNameFamily, setMiddleNameFamily, setRemoveFamilyMember } from '../../../../store/family';

const AddFamilyMember = () => {
    const [familyMembers, setFamilyMembers] = useState([]);
    // Access primary applicant details from Redux store
    const { family } = useSelector(state => state.family);

    // Hook to dispatch actions to Redux store
    const dispatch = useDispatch();


    const addFamilyMember = () => {
        setFamilyMembers([...familyMembers, {}]);
        dispatch(setAddFamilyMember());
    };

    const removeFamilyMember = (indexToRemove) => {
        setFamilyMembers(familyMembers.filter((_, index) => index !== indexToRemove));
        dispatch(setRemoveFamilyMember(indexToRemove));
    };

    function changeDate(index) {
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


            dispatch(setDateOfBirthFamily({
                item: input,
                index: index
            }));
        };
    }

    return (
        <div>
            {familyMembers.map((_, index) => (
                <div className="addFamilyMember" key={index}>
                    <div className="box">
                        <div className="title top">
                            <h2>Add Family Member {index === 0 ? "" : index + 1}</h2>
                            <button onClick={() => removeFamilyMember(index)}>
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>
                        <div className="fields">
                            <div className="radiosFields">
                                <p>Family member <span>*</span></p>
                                <div className="radios">
                                    <div className="radio">
                                        <input
                                            type="radio"
                                            name={`Familymember${index}`}
                                            id={`Spouse${index}`}
                                            onChange={(e) => dispatch(setFamilyMember({
                                                item: e.target.value,
                                                index: index
                                            }))}
                                            value={"Spouse"}
                                            checked={family[index].familyMember === "Spouse"}
                                        />
                                        <label className='left' htmlFor={`Spouse${index}`}>Spouse</label>
                                    </div>
                                    <div className="radio">
                                        <input
                                            type="radio"
                                            name={`Familymember${index}`}
                                            id={`Child${index}`}
                                            onChange={(e) => dispatch(setFamilyMember({
                                                item: e.target.value,
                                                index: index
                                            }))}
                                            value={"Child"}
                                            checked={family[index].familyMember === "Child"}
                                        />
                                        <label className='right' htmlFor={`Child${index}`}>Child</label>
                                    </div>
                                </div>
                            </div>
                            <div className="input">
                                <label>First name <span>*</span> </label>
                                <input
                                    type="text"
                                    placeholder='Enter your first name'
                                    onChange={(e) => dispatch(setFirstNameFamily({
                                        item: e.target.value,
                                        index: index
                                    }))}
                                    value={family[index].firstName}
                                    required
                                />
                            </div>
                            <div className="input">
                                <label>Last name <span>*</span> </label>
                                <input
                                    type="text"
                                    placeholder='Enter your last name'
                                    onChange={(e) => dispatch(setLastNameFamily({
                                        item: e.target.value,
                                        index: index
                                    }))}
                                    value={family[index].lastName}
                                    required
                                />
                            </div>
                            <div className="input">
                                <label>Middle name</label>
                                <input
                                    type="text"
                                    placeholder='Enter your middle name (if any)'
                                    onChange={(e) => dispatch(setMiddleNameFamily({
                                        item: e.target.value,
                                        index: index
                                    }))}
                                    value={family[index].middleName}
                                />
                            </div>
                            <div className="input">
                                <label>Date of birth <span>*</span> </label>
                                <input
                                    type="text"
                                    placeholder='mm/dd/yyyy'
                                    required
                                    onChange={changeDate(index)}
                                    value={family[index].dateOfBirth}
                                />
                            </div>
                        </div>
                        <PhotographMemer index={index} />
                    </div>
                </div>
            ))}
            <div className="addFamilyMemberButton" onClick={addFamilyMember}>
                <div className="box">
                    <h2>Add Family Member</h2>
                    <div className="icon">
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddFamilyMember;
