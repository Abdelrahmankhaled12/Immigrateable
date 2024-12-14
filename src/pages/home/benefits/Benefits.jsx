// Importing necessary styles and FontAwesome icons
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import img from '../../../assets/festive-suburban-house-with-flags-banners 1.png'
import img2 from '../../../assets/closeup-us-passport-with-immigration-visa-citizenship-travel-paperwork-wooden-tabl 4.png'
import img3 from '../../../assets/parents-spending-time-with-their-little-daughters 1.png'
import img4 from '../../../assets/young-healthcare-worker-senior-couple-analyzing-medical-test-results-home-visit 1.png'
import img5 from '../../../assets/happy-indian-worker-builder-with-wooden-boards 3.png'
import { useEffect, useRef, useState } from 'react';

const benefits = [
    {
        image: img,
        title: "Permanent Residency",
        body: "Enjoy the right to live and work anywhere in the USA without restrictions",
    },
    {
        image: img2,
        title: "Path to Citizenship",
        body: "Become eligible to apply for U.S. citizenship after five years of permanent residency",
    },
    {
        image: img3,
        title: "Family Sponsorship",
        body: "Sponsor your spouse and unmarried children under 21 for their green cards",
    },
    {
        image: img4,
        title: "Social Services Access",
        body: "Gain access to federal benefits such as Social Security, Medicare, and educational assistance",
    },
    {
        image: img5,
        title: "Employment Opportunities",
        body: "Open doors to various job opportunities and higher earning potential across various industries",
    },
]

const Benefits = () => {

    const carouselContainer = useRef();
    const [mouseDown, setMouseDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    useEffect(() => {
        const updateItemsPerPage = () => {
            if (window.innerWidth > 1024) {
                setItemsPerPage(3);
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
        <div className="benefits">
            <div className="container">
                <div className="title"  data-aos="fade-up"
                    data-aos-delay="50" data-aos-duration="500">
                    <h1><span>Benefits</span> of Winning a Green Card</h1>
                </div>
                <div className="boxes"
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onScroll={handleScroll}
                    ref={carouselContainer}
                >
                    {
                        benefits.map((item, index) => (
                            <div className="box" key={index} data-aos="fade-up"
                            data-aos-delay={(index + 1) * 50} data-aos-duration="500">
                                <div className="image">
                                    <img src={item.image} alt="image" />
                                </div>
                                <div className="text">
                                    <span>{index + 1}</span>
                                    <h2>{item.title}</h2>
                                    <p>{item.body}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="indicators">
                    {Array(Math.ceil(benefits.length / itemsPerPage)).fill().map((_, index) => (
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

export default Benefits