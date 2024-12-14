import './style.scss'
import img from '../../../assets/banner img mobile.png'
import CountryInput from './CountryInput'
import { useState } from 'react';
import {DegreeOfEducation} from './DegreeOfEducation';
import Congratulations from './Congratulations';
import Unfortunately from './Unfortunately';

const BannerHero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);  // State to manage the current index of the carousel

    return (
        <div className='bannerHero'>
            <div className="image">
                <img src={img} alt="" />
            </div>
            <div className="container">
                <div className="grid">
                    <div className="text" data-aos="fade-right"
                        data-aos-delay="50" data-aos-duration="500">
                        <h1>We Apply For Your <span>Green Card</span></h1>
                        <p className='textPara'>Apply Anytime! We’ll Review, Prepare, and Submit Your DV Lottery <br /> Application Every Year Until You Win</p>
                        <div className="carousel-container">
                            <div className="boxesRescheduleAppointment">
                                <div className="box" style={{ transform: `translateX(${(currentIndex - 1) * 300}%)` }}>
                                    <p>Do You Qualify for Green Card  Lottery ?</p>
                                    <div className="flex">
                                        <div style={{ flex: "1", width: "100%" }}>
                                            <CountryInput />
                                        </div>
                                        <button className='button' onClick={() => setCurrentIndex(2)} >Check My Eligibility Now</button>
                                    </div>
                                </div>
                                <div className="box" style={{ transform: `translateX(${(currentIndex - 2) * 600}%)` }}>
                                    <p>What is your highest degree of education?</p>
                                    <div className="flex">
                                        <div style={{ flex: "1", width: "100%" }}>
                                            <DegreeOfEducation />
                                        </div>
                                        <button className='button' onClick={() => setCurrentIndex(3)}>Next Question</button>
                                    </div>
                                </div>
                                <div className="box" style={{ transform: `translateX(${(currentIndex - 3) * 900}%)` }}>
                                    <p>Within the last 5 years, have you worked for at least 2 years in an occupation requiring at least 2 years of training or experience?</p>
                                    <div className="flex">
                                        <div style={{ flex: "1", width: "100%" }}>
                                            <div className="radiosFields">
                                                <div class="radios">
                                                    <div class="radio">
                                                        <input
                                                            value={"no"}
                                                            type="radio"
                                                            name="employeeCount"
                                                            id={"no"}
                                                        />
                                                        <label className='left' for={"no"}>No</label>
                                                    </div>
                                                    <div class="radio">
                                                        <input
                                                            value={"Yes"}
                                                            type="radio"
                                                            name="employeeCount"
                                                            id={"Yes"}
                                                        />
                                                        <label className='right' for={"Yes"}>Yes</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className='button' onClick={() => setCurrentIndex(4)}>Next Question</button>
                                    </div>
                                </div>
                                <div className="box" style={{ transform: `translateX(${(currentIndex - 4) * 1200}%)` }}>
                                    <Unfortunately />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerHero