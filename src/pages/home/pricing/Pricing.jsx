import './style.scss'

import React, { useRef, useState, useEffect } from 'react';

import right from '../../../assets/img plans right.png'
import left from '../../../assets/img pplans left.png'

const items = [
    {
        category: "Free",
        price: "0",
        features: [
            "Year-Round Application Acceptance",
            "Application Compliance Review",
            "Photo Compliance Verification",
            "User Login Account",
        ]
    },
    {
        category: "Pro",
        price: "35",
        features: [
            "Year-Round Application Acceptance",
            "Application Compliance Review",
            "Photo Compliance Verification",
            "User Login Account",
            "Free English Course",
            "Unlimited Access/Changes",
            "Correct and Timely Submission",
            "Certificate of Participation",
            "Winning Notifications",
            "Re-apply Notifications",
        ]

    },
    {
        category: "Elite",
        price: "45",
        features: [
            "Year-Round Application Acceptance",
            "Application Compliance Review",
            "Photo Compliance Verification",
            "User Login Account",
            "Free English Course",
            "Unlimited Access/Changes",
            "Correct and Timely Submission",
            "Certificate of Participation",
            "Winning Notifications",
            "Re-apply Notifications",
            "Automatic Re-application",
        ]
    },
    {
        category: "VIP",
        price: "55",
        features: [
            "Year-Round Application Acceptance",
            "Application Compliance Review",
            "Photo Compliance Verification",
            "User Login Account",
            "Free English Course",
            "Unlimited Access/Changes",
            "Correct and Timely Submission",
            "Certificate of Participation",
            "Winning Notifications",
            "Re-apply Notifications",
            "Automatic Re-application",
            "Interview Preparation",
            "After Winning Assistance",
            "Flight Ticket Reimbursement",
        ]
    },
]


const Pricing = () => {
    const carouselContainer = useRef();
    const [mouseDown, setMouseDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4);

    useEffect(() => {
        const updateItemsPerPage = () => {
            if (window.innerWidth > 1024) {
                setItemsPerPage(4);
            } else if (window.innerWidth > 768) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(1);
            }
        };

        window.addEventListener('resize', updateItemsPerPage);
        updateItemsPerPage();

        return () => window.removeEventListener('resize', updateItemsPerPage);
    }, []);

    const handleMouseDown = (event) => {
        setMouseDown(true);
        setStartX(event.pageX - carouselContainer.current.offsetLeft);
        setScrollLeft(carouselContainer.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setMouseDown(false);
    };

    const handleMouseMove = (event) => {
        if (!mouseDown) return;
        event.preventDefault();
        const x = event.pageX - carouselContainer.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        carouselContainer.current.scrollLeft = scrollLeft - walk;
    };

    const handleScroll = () => {
        const container = carouselContainer.current;
        const newIndex = Math.round(container.scrollLeft / container.offsetWidth);
        setCurrentIndex(newIndex);
    };


    return (
        <div className='pricing'>
            <div className="container">
                <div className="title" data-aos="fade-up"
                    data-aos-delay="50" data-aos-duration="500">
                    <h1>Your Pathway to the American Dream</h1>
                    <p>Choosing us means partnering with a service committed to your success in the DV Lottery.</p>
                </div>
                <div className="boxes"
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onScroll={handleScroll}
                    ref={carouselContainer}
                >
                    <div className="rightImage" data-aos="fade-right"
                    data-aos-delay="200" data-aos-duration="500">
                        <img src={right} alt="" />
                    </div>
                    <div className="leftImage">
                        <img src={left} alt="" />
                    </div>
                    {
                        items.map((item, index) => (
                            <div className="box" key={index}
                                data-aos="fade-up"
                                data-aos-delay={(index + 1) * 50} data-aos-duration="500"
                            >
                                <div>
                                    <div className="category">
                                        <p>{item.category}</p>
                                    </div>
                                    <div className="price">
                                        <span>$</span>
                                        <p>{item.price}</p>
                                    </div>
                                    <ul>
                                        {
                                            item.features.map(feature => (
                                                <li key={feature}>{feature}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <button>Apply Now</button>
                            </div>
                        ))
                    }
                </div>

                <div className="indicators">
                    {Array(Math.ceil(items.length / itemsPerPage)).fill().map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => {
                                const container = carouselContainer.current;
                                const scrollAmount = index * container.offsetWidth;
                                container.scrollTo({
                                    left: scrollAmount,
                                    behavior: "smooth",
                                });
                                setCurrentIndex(index);
                            }}
                        ></span>
                    ))}
                </div>


            </div>
        </div>
    )
}

export default Pricing