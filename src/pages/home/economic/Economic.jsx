import React, { useRef, useState, useEffect } from 'react';
import './style.scss';
import img from '../../../assets/economic_1.png';
import img2 from '../../../assets/economic_2.png';
import img3 from '../../../assets/economic_3.png';
import img4 from '../../../assets/economic_4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import icon from '../../../assets/money-12 1.png'
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from React Router
import left from '../../../assets/img economic left.png'
import right from '../../../assets/img economic right.png'

const items = [
    {
        image: img,
        title: "Construction Worker",
        averageSalary: "$40,000",
        jobGrowth: "11% <br /> <span>Faster than average</span> ",
        benefits: [
            "Health insurance",
            "Retirement plans",
            "Job stability",
        ]
    },
    {
        image: img2,
        title: "Truck Driver",
        averageSalary: "$45,000",
        jobGrowth: "6%",
        benefits: [
            "Health insurance",
            "Paid time off",
            "Travel opportunities",
        ]
    },
    {
        image: img3,
        title: "Electrician",
        averageSalary: "$56,000",
        jobGrowth: "8% <br /> <span>Faster than average</span> ",
        benefits: [
            "High demand",
            "Union benefits",
            "Retirement plans",
        ]
    },
    {
        image: img4,
        title: "Welder",
        averageSalary: "$44,000",
        jobGrowth: "3%",
        benefits: [
            "Job security",
            "Healthcare benefits",
            "Opportunities for overtime",
        ]
    },
    {
        image: img,
        title: "Construction Worker",
        averageSalary: "$40,000",
        jobGrowth: "11% <br /> <span>Faster than average</span> ",
        benefits: [
            "Health insurance",
            "Retirement plans",
            "Job stability",
        ]
    },
    {
        image: img2,
        title: "Truck Driver",
        averageSalary: "$45,000",
        jobGrowth: "6%",
        benefits: [
            "Health insurance",
            "Paid time off",
            "Travel opportunities",
        ]
    },
    {
        image: img3,
        title: "Electrician",
        averageSalary: "$56,000",
        jobGrowth: "8% <br /> <span>Faster than average</span> ",
        benefits: [
            "High demand",
            "Union benefits",
            "Retirement plans",
        ]
    },
    {
        image: img4,
        title: "Welder",
        averageSalary: "$44,000",
        jobGrowth: "3%",
        benefits: [
            "Job security",
            "Healthcare benefits",
            "Opportunities for overtime",
        ]
    },
]


const Economic = () => {
    const carouselContainer = useRef();
    const [mouseDown, setMouseDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4);
    const navigate = useNavigate(); // Hook for navigation

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

    const navigation = (dir) => {
        const container = carouselContainer.current;

        const scrollAmount =
            dir === "left"
                ? container.scrollLeft - (container.offsetWidth + 5)
                : container.scrollLeft + (container.offsetWidth + 5);

        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });

        const newIndex = dir === "left" ? currentIndex - 1 : currentIndex + 1;
        setCurrentIndex(Math.max(0, Math.min(newIndex, Math.ceil(items.length / itemsPerPage) - 1)));
    };

    const handleScroll = () => {
        const container = carouselContainer.current;
        const newIndex = Math.round(container.scrollLeft / container.offsetWidth);
        setCurrentIndex(newIndex);
    };

    return (
        <div className='economic'>
            <div className="leftImage">
                <img src={left} alt="" />
            </div>
            <div className="rightImage">
                <img src={right} alt="" />
            </div>
            <div className="container">
                <div className="title" data-aos="fade-up"
                    data-aos-delay="50" data-aos-duration="500">
                    <h1>Economic <span>Incentives</span> of Winning a Green Card</h1>
                    <p>Discover the Opportunities</p>
                </div>
                <div className="boxes"
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onScroll={handleScroll}
                    ref={carouselContainer}
                    data-aos="fade-up"
                    data-aos-delay="50" data-aos-duration="500"
                >
                    {
                        items.map((item, index) => (
                            <div className="box" key={index}>
                                <div className="image">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="text">
                                    <h2>{item.title}</h2>
                                    <div className="salary">
                                        <div className="textSalary">
                                            <div className="icon">
                                                <img src={icon} alt="" />
                                            </div>
                                            <span>Average <br /> Salary</span>
                                        </div>
                                        <div className="averageSalary">
                                            <h3>{item.averageSalary}</h3>
                                            <span>/year</span>
                                        </div>
                                    </div>
                                    <div className="jobGrowth">
                                        <div className="textJobGrowth">
                                            <div className="icon">
                                                <img src={icon} alt="" />
                                            </div>
                                            <span>Job Growth</span>
                                        </div>
                                        <h3 dangerouslySetInnerHTML={{ __html: item.jobGrowth }} />
                                    </div>
                                    <h4>Benefits</h4>
                                    <ul>
                                        {item.benefits.map((element) => (
                                            <li key={element}>{element}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <button className='arrow left' onClick={() => navigation("left")}><FontAwesomeIcon icon={faArrowLeft} /></button>
                <button className='arrow right' onClick={() => navigation("right")}><FontAwesomeIcon icon={faArrowRight} /></button>

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

                <button className='startYourApplication' onClick={() => navigate("/application")}>
                    <span>Start Your Application</span>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    );
};

export default Economic;
