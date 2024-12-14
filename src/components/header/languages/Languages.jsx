// Importing necessary styles, assets, and components
import './style.scss'; // Styles specific to the language selector component
import en from '../../../assets/en.png'; // English language flag image
import spain from '../../../assets/spain.png'; // Spanish language flag image
import Pt from '../../../assets/Pt.png'; // Portuguese language flag image

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesome icon library
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; // Chevron icon for dropdown
import * as React from 'react'; // Importing React
import MenuItem from '@mui/material/MenuItem'; // MenuItem component from Material UI
import FormControl from '@mui/material/FormControl'; // Form control wrapper from Material UI
import Select from '@mui/material/Select'; // Select dropdown component from Material UI

const Languages = () => {
    // State to track the selected language
    const [language, setLanguage] = React.useState(''); // Initially no language is selected

    // Function to handle language selection change
    const handleChange = (event) => {
        setLanguage(event.target.value); // Update the selected language
    };

    return (
        <div className='languages'>
            <FormControl>
                {/* Select component for language selection */}
                <Select
                    value={language} // Controlled component value tied to state
                    onChange={handleChange} // Handler for change event
                    displayEmpty // Allows the dropdown to display an empty value if no selection is made
                    className='languages'
                    renderValue={selected => {
                        // Custom render function for showing the selected language icon and label
                        if (!selected) {
                            return (
                                <p>
                                    <img src={en} alt="English" /> {/* Default language icon */}
                                    En
                                    <FontAwesomeIcon icon={faChevronDown} /> {/* Dropdown icon */}
                                </p>
                            );
                        }
                        return (
                            <p>
                                <img src={selected === 'Es' ? spain : Pt} alt={selected} /> {/* Dynamically load the flag */}
                                {selected}
                                <FontAwesomeIcon icon={faChevronDown} />
                            </p>
                        );
                    }}
                >
                    {/* Menu items for language options */}
                    <MenuItem value="">
                        <p>
                            <img src={en} alt="English" /> {/* English flag */}
                            En
                            <FontAwesomeIcon icon={faChevronDown} /> {/* Chevron down icon */}
                        </p>
                    </MenuItem>
                    <MenuItem value="Es">
                        <p>
                            <img src={spain} alt="Spanish" /> {/* Spanish flag */}
                            Es
                            <FontAwesomeIcon icon={faChevronDown} /> {/* Chevron down icon */}
                        </p>
                    </MenuItem>
                    <MenuItem value="Pt">
                        <p>
                            <img src={Pt} alt="Portuguese" /> {/* Portuguese flag */}
                            Pt
                            <FontAwesomeIcon icon={faChevronDown} /> {/* Chevron down icon */}
                        </p>
                    </MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

export default Languages;
