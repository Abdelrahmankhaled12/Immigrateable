import React from 'react'
import image from '../../../assets/Frame 1000001461.png'
import { useNavigate } from "react-router-dom";  // Importing useNavigate hook from react-router-dom

const Congratulations = () => {
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
                            <h3>Congratulations!</h3>
                            <p>You fulfill the requirements to join the Green Card Lottery!</p>
                        </div>
                    </div>
                </div>
                <button style={{ width: "200px", fontSize: "16px" }} className='button' onClick={() => navigate("/application")}>Get Started</button>
            </div>
        </>
    )
}

export default Congratulations