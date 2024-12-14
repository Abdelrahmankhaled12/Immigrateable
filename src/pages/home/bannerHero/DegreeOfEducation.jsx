import * as React from 'react';
import './style.scss';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';  // Import specific icons from FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Import FontAwesomeIcon component

const items = [
    "No high school at all",
    "Some high school, no degree (less than 12 years of school)",
    "High school, no degree (12+ years of school)",
    "High school degree",
    "University degree",
];

export function DegreeOfEducation() {

    const [style, setStyle] = React.useState("none")
    const [choose, setChoose] = React.useState("Select your education level")

    return (
        <div style={{ position: "relative" }}>
            <div className="menu-button" onClick={() => setStyle(style === "none" ? "block" : "none")}>
                {choose}
                <div className="icon">
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
            </div>
            <div className="menu-items" style={{ display: style }} >
                {
                    items.map((item) => (
                        <p className="menu-item" key={item} onClick={() => { setStyle("none"), setChoose(item) }}>
                            {item}
                        </p>
                    ))
                }
            </div>
        </div>
    );
}
