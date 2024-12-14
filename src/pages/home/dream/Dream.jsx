// Importing necessary styles, FontAwesome icons, and required assets
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import right from '../../../assets/dream.png';
import left from '../../../assets/dream2.png';
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from React Router

// List of items to display in the carousel, each containing a title and body text
const items = [
    {
        title: "Submission <br /> Guarantee",
        body: "Your application will be submitted on time, every time, without fail",
    },
    {
        title: "Year-Round  <br /> Access",
        body: "Submit your details any time of the year",
    },
    {
        title: "Error-Free  <br /> Applications",
        body: "Our AI technology ensures your application meets all requirements.",
    },
    {
        title: "Lifetime  <br /> Resubmission",
        body: "We reapply for you every year until you win.",
    },
    {
        title: "Expert  <br /> Guidance",
        body: "Step-by-Step Support: From registration to winning, we support you through the process.",
    },
    {
        title: "Special <br /> Discount",
        body: "Sign up today and get 50% off your first application fee!",
    },
];

// Main component for the Dream section
const Dream = () => {
    const carouselContainer = useRef(); // Reference for the carousel container
    const [mouseDown, setMouseDown] = useState(false); // State to track if the mouse is pressed down
    const [startX, setStartX] = useState(0); // State to track the starting X position on mouse down
    const [scrollLeft, setScrollLeft] = useState(0); // State to store the initial scroll position
    const [currentIndex, setCurrentIndex] = useState(0); // State to store the current active index of the carousel
    const [itemsPerPage, setItemsPerPage] = useState(3); // State to determine how many items are shown per page
    const navigate = useNavigate(); // Hook for navigation

    // Effect to update the number of items per page based on the screen width
    useEffect(() => {
        const updateItemsPerPage = () => {
            if (window.innerWidth > 1024) {
                setItemsPerPage(3); // Show 3 items on large screens
            } else if (window.innerWidth > 768) {
                setItemsPerPage(2); // Show 2 items on medium screens
            } else {
                setItemsPerPage(1); // Show 1 item on small screens
            }
        };

        window.addEventListener('resize', updateItemsPerPage); // Update on window resize
        updateItemsPerPage(); // Initial check when component mounts

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', updateItemsPerPage);
    }, []);

    // Handles mouse down event to enable dragging the carousel
    const handleMouseDown = (event) => {
        setMouseDown(true); // Set mouse down state to true
        setStartX(event.pageX - carouselContainer.current.offsetLeft); // Capture starting X position
        setScrollLeft(carouselContainer.current.scrollLeft); // Store initial scroll position
    };

    // Handles mouse up and ends the drag interaction
    const handleMouseUp = () => {
        setMouseDown(false); // Reset mouse down state
    };

    // Handles mouse move event to allow dragging the carousel
    const handleMouseMove = (event) => {
        if (!mouseDown) return; // If not dragging, do nothing
        event.preventDefault(); // Prevent default drag behavior
        const x = event.pageX - carouselContainer.current.offsetLeft; // Calculate current X position
        const walk = (x - startX) * 1.5; // Calculate how far to scroll based on mouse movement
        carouselContainer.current.scrollLeft = scrollLeft - walk; // Update scroll position
    };

    // Handles scroll event to update the active index in the carousel
    const handleScroll = () => {
        const container = carouselContainer.current;
        const newIndex = Math.round(container.scrollLeft / container.offsetWidth); // Calculate new index based on scroll
        setCurrentIndex(newIndex); // Update current index
    };

    return (
        <div className="dream">
            <div className="rightImage">
                <img src={right} alt="Right decorative image" />
            </div>
            <div className="leftImage">
                <img src={left} alt="Left decorative image" />
            </div>
            <div className="container">
                <div className="title">
                    <h1>Achieve the <span>American Dream</span> with Immigrateable.com</h1>
                </div>
                {/* Carousel container */}
                <div className="boxes"
                    onMouseDown={handleMouseDown} // Start dragging
                    onMouseUp={handleMouseUp} // End dragging
                    onMouseLeave={handleMouseUp} // Stop dragging if mouse leaves the container
                    onMouseMove={handleMouseMove} // Handle dragging movement
                    onScroll={handleScroll} // Update current index on scroll
                    ref={carouselContainer} // Reference for the carousel container
                >
                    {/* Mapping through each item to display it in the carousel */}
                    {items.map((item, index) => (
                        <div className="box" key={index} data-aos="fade-up"
                            data-aos-delay={(index + 1) * 50} data-aos-duration="500">
                            <h2 dangerouslySetInnerHTML={{ __html: item.title }}></h2>
                            <p>{item.body}</p>
                        </div>
                    ))}
                </div>

                {/* Pagination dots for indicating the current page */}
                <div className="indicators">
                    {Array(Math.ceil(items.length / itemsPerPage)).fill().map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => {
                                const container = carouselContainer.current;
                                const scrollAmount = index * container.offsetWidth; // Calculate scroll amount for each dot
                                container.scrollTo({
                                    left: scrollAmount,
                                    behavior: "smooth", // Smooth scrolling effect
                                });
                                setCurrentIndex(index); // Set the clicked dot as the current index
                            }}
                        ></span>
                    ))}
                </div>

                {/* Call-to-action button */}
                <button onClick={() => navigate("/application")} >
                    <span>Start Your Application</span>
                    <FontAwesomeIcon icon={faChevronRight} /> {/* FontAwesome icon for a chevron */}
                </button>
            </div>
        </div>
    );
};

export default Dream; // Exporting the component to be used elsewhere
