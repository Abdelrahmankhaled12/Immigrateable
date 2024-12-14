// Import necessary React modules and MUI (Material-UI) components
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Import assets and styles
import icon from '../../../assets/Group.png';
import './style.scss';
import left from '../../../assets/Left.png';
import right from '../../../assets/Right.png';

// Array containing FAQ items with questions and answers
const items = [
    {
        question: "What is the Green Card Lottery?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.", // Corresponding answer
    },
    {
        question: "Am I eligible to apply?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
        question: "How does Immigrateable.com help?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
]

// Functional component for the FAQ section
const FAQ = () => {
    return (
        <div className='fags'>
            <div className="leftImage">
                <img src={left} alt="" />
            </div>
            <div className="rightImage">
                <img src={right} alt="" />
            </div>
            <div className="container">
                <div className="title" data-aos="fade-up"
                    data-aos-delay="50" data-aos-duration="500">
                    <h1>FAQ</h1>
                </div>
                <div data-aos="fade-up"
                    data-aos-delay="50" data-aos-duration="500">
                    {
                        items.map((item, index) => (
                            <Accordion className='accordion' key={index}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <div className="text flex">
                                        <img src={icon} alt="" />
                                        <span>{item.question}</span>
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {item.answer}
                                </AccordionDetails>
                            </Accordion>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FAQ