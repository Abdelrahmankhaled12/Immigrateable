// Import necessary styles and assets
import './style.scss';
import { useNavigate } from "react-router-dom"; // Hook for navigation between pages
import icon from '../../../assets/Eye.png'; // Importing eye icon for showing/hiding password
import { useState } from 'react'; // Importing useState hook for managing form state

const SignForm = () => {

    const navigate = useNavigate(); // Hook for navigating programmatically

    // State to manage First Name  , Last Name, email and password inputs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    // State to toggle password visibility
    const [showPassword, setShowPassword] = useState("password"); // Default is password hidden

    return (
        <div className='signForm'>
            <div className="title">
                <h1>Get Started</h1>
                <p>Welcome to Immigrateable — Let’s create your account</p>
            </div>

            {/* Login form */}
            <form action="">

                {/* First name input field */}
                <div className="input">
                    <label htmlFor="firstName">First name <span>*</span></label>
                    <input
                        id="firstName"
                        type="text"
                        value={firstName} // Controlled input value
                        onChange={(e) => setFirstName(e.target.value)} // Update firstName state on change
                        placeholder="Enter your first name" // Placeholder text
                        required // firstName is required
                    />
                </div>


                {/* Last name input field */}
                <div className="input">
                    <label htmlFor="lastName">Last name <span>*</span></label>
                    <input
                        id="lastName"
                        type="text"
                        value={lastName} // Controlled input value
                        onChange={(e) => setLastName(e.target.value)} // Update lastName state on change
                        placeholder="Enter your last name" // Placeholder text
                        required // Last name is required
                    />
                </div>

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
                    <label htmlFor="password">Password <span>*</span></label>
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
                            placeholder="Min 8 chars"
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
                            required
                        />
                        <span className="checkmark"></span>
                        <span className='remember'>Sign up for our newsletter to get all the latest news</span>
                    </label>
                </div>

                <h4>By creating an account you agree to our Terms and Conditions and acknowledge that you have read our Privacy Policy.</h4>

                {/* Create account button */}
                <button>Create account</button>

                <p>Already have an account ? <span onClick={() => navigate("/login")}>Log in</span></p>
            </form>
        </div>
    );
}

export default SignForm; // Exporting the component
