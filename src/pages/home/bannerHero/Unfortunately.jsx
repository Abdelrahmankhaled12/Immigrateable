import React from 'react'
import image from '../../../assets/like-9 1.png'
import { useNavigate } from "react-router-dom";  // Importing useNavigate hook from react-router-dom

const Unfortunately = () => {
    const navigate = useNavigate();  // Hook to programmatically navigate

    return (
        <>
            <div className="flex">
                <div style={{ flex: "1", width: "100%" }}>
                    <div className="contentCongratulations">
                        <div className="imageCongratulations">
                            <img src={image} alt="Congratulations" />
                        </div>
                        <div className="text">
                            <h3>Unfortunately,</h3>
                            <p>you are not eligible for the Green Card Lottery!</p>
                        </div>
                    </div>
                </div>
                <button style={ {fontSize: "16px" }} className='button' onClick={() => navigate("/")}>Contact Us for More Info</button>
            </div>
        </>
    )
}

export default Unfortunately;