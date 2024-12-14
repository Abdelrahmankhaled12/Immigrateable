// Import necessary styles and assets
import './style.scss';
import { useNavigate } from "react-router-dom"; // Hook for navigation between pages
import icon from '../../../assets/Eye.png'; // Importing eye icon for showing/hiding password
import { useState } from 'react'; // Importing useState hook for managing form state

const FormLogin = () => {

    const navigate = useNavigate(); // Hook for navigating programmatically

    // State to manage email and password inputs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // State to toggle password visibility
    const [showPassword, setShowPassword] = useState("password"); // Default is password hidden

    return (
        <div className='formLogin'>
            <div className="title">
                <h1>Log in to your account</h1>
                <p>Welcome to Immigrateable — Track your application</p>
            </div>

            {/* Login form */}
            <form action="">
                {/* Email input field */}
                <div className="input">
                    <label htmlFor="email">Email <span>*</span></label>
                    <input
                        id="email"
                        type="email"
                        value={email} // Controlled input value
                        onChange={(e) => setEmail(e.target.value)} // Update email state on change
                        placeholder="Enter your email" // Placeholder text
                        required // Email is required
                    />
                </div>

                {/* Password input field */}
                <div className="input">
                    <div className="inputTitlePassword">
                        <label htmlFor="password">Password <span>*</span></label>
                        <p onClick={() => navigate("/resetPassword")}>Forgot password?</p> {/* Link to reset password */}
                    </div>
                    <div className="inputPassword">
                        {/* Toggle visibility of the password when hovering over the icon */}
                        <div className="icon"
                            onMouseEnter={() => setShowPassword("text")} // Show password on hover
                            onMouseLeave={() => setShowPassword("password")} // Hide password when not hovering
                        >
                            <img src={icon} alt="Show/Hide Password Icon" />
                        </div>
                        <input
                            id="password"
                            type={showPassword} // Dynamically setting input type to show or hide password
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Update password state on change
                            required // Password is required
                        />
                    </div>
                </div>

                {/* Remember me checkbox */}
                <div className="forget">
                    <label className="checkbox">
                        <input
                            type="checkbox"
                        />
                        <span className="checkmark"></span>
                        <span className='remember'>Remember me</span>
                    </label>
                </div>

                {/* Login button */}
                <button>Log in</button>

                {/* Link to sign up page if the user doesn't have an account */}
                <p>New to Immigrateable? <span onClick={() => navigate("/signup")}>Sign up</span></p>
            </form>
        </div>
    );
}

export default FormLogin; // Exporting the component
