// Import necessary libraries and components
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Importing routing components from react-router-dom
import { AboutUs, Application, Home, Login, NotFoundPage, PrivacyPolicy, ResetPassword, Signup } from './pages'; // Importing page components
import 'aos/dist/aos.css' // Import AOS styles
import Aos from 'aos' // Import AOS library for animations
import { useEffect } from 'react' // Import useEffect hook from React

// Main App component where all routing is defined
function App() {

  useEffect(() => {
    // Initialize AOS library
    Aos.init({
      once: true, // Ensures animations only happen once
    });
  }, [])

  return (
    <>
      {/* BrowserRouter component wraps around all Routes for enabling client-side routing */}
      <BrowserRouter>
        <Routes>
          {/* Define the routes and corresponding components */}
          <Route path="/" element={<Home />} /> {/* Home page route */}
          <Route path="/about-us" element={<AboutUs />} /> {/* About Us page route */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* Privacy Policy page route */}
          <Route path="/application" element={<Application />} /> {/* Application page route */}
          <Route path="/login" element={<Login />} /> {/* Login page route */}
          <Route path="/resetPassword" element={<ResetPassword />} /> {/* Reset Password page route */}
          <Route path="/signup" element={<Signup />} /> {/* Signup page route */}
          <Route path="/*" element={<NotFoundPage />} /> {/* Wildcard route to handle 404 Not Found */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App; // Exporting the App component for use in other parts of the application
