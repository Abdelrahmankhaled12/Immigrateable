import React, { useRef, useState, useEffect } from 'react';
import './style.scss';
import img from '../../../assets/testimonials_1.png';
import img2 from '../../../assets/testimonials_2.png';
import img3 from '../../../assets/testimonials_3.png';
import img4 from '../../../assets/testimonials_4.png';
import img5 from '../../../assets/testimonials_5.png';
import img6 from '../../../assets/testimonials_6.png';
import img7 from '../../../assets/testimonials_7.png';
import img8 from '../../../assets/testimonials_8.png';
import img9 from '../../../assets/testimonials_9.png';
import img10 from '../../../assets/testimonials_10.png';
import img11 from '../../../assets/testimonials_11.png';
import img12 from '../../../assets/testimonials_12.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const items = [
    {
        text: "I never thought I could win the Green Card Lottery, but Immigrateable.com made it possible. Their automated service is a game-changer!",
        name: "Ahmed",
        image: img,
        imageMobile: img6,

    },
    {
        text: "The process was so easy and stress-free. Immigrateable.com took care of everything. Now my family and I are living our American dream.",
        name: "Maria",
        image: img2,
        imageMobile: img7,
    },
    {
        text: "Immigrateable.com was the best decision I made. Their technology caught errors I missed. Now, I'm working in California and building a better future for my family.",
        name: "Grace",
        image: img3,
        imageMobile: img9,
    },
    {
        text: "I never thought I could win the Green Card Lottery, but Immigrateable.com made it possible. Their automated service is a game-changer!",
        name: "Mohamed",
        image: img4,
        imageMobile: img8,

    },
    {
        text: "The process was so easy and stress-free. Immigrateable.com took care of everything. Now my family and I are living our American dream.",
        name: "Pascal",
        image: img5,
        imageMobile: img10,
    },
    {
        text: "I never thought I could win the Green Card Lottery, but Immigrateable.com made it possible. Their automated service is a game-changer!",
        name: "Ahmed",
        image: img12,
        imageMobile: img11,
    },
]


const Testimonials = () => {
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
        <div className='testimonials'>
            <div className="container">
                <div className="title" data-aos="fade-up"
                    data-aos-delay="50" data-aos-duration="500">
                    <h1>Testimonials</h1>
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
                                <div className="text">
                                    <h2><span>"</span> {item.text}"</h2>
                                    <div className="footer">
                                        <p>{item.name}</p>
                                        <span>DV Lottery Winner</span>
                                    </div>
                                </div>
                                <div className="image imageMobile">
                                    <img src={item.imageMobile} alt="" />
                                </div>
                                <div className="image imageDesktop">
                                    <img src={item.image} alt="" />
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
            </div>
        </div>
    );
};

export default Testimonials;
