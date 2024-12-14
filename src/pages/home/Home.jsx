import { Animation, Effect, Footer, Header } from '../../components'
import HowItWorks from './howItWorks/HowItWorks'
import SpecialOffer from './specialOffer/SpecialOffer'
import FAQ from './faqs/FAQ'
import Pricing from './pricing/Pricing'
import Dream from './dream/Dream'
import Testimonials from './testimonials/Testimonials'
import BannerHero from './bannerHero/BannerHero'
import Late from './late/Late'
import Economic from './economic/Economic'
import Benefits from './benefits/Benefits'
import { useEffect, useState } from 'react';
import { TimaAnimation } from '../../constants';

const Home = () => {
  // State to control whether the animation is active or not
  const [animationOff, setAnimationOff] = useState(true);

  // Function to disable the animation after a certain duration defined in TimaAnimation constant
  const animationOFF = () => {
    setTimeout(() => {
      setAnimationOff(false); // After the delay, the animation is turned off
    }, TimaAnimation);
  };

  // Effect to trigger scroll to top and start the animation when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component load
    animationOFF(); // Start the timer to turn off animation
  }, [])


  return (
    <>
      {/* Conditionally rendering based on the animationOff state */}
      {animationOff ? (
        <Animation />
      ) : (
        <Effect>
          <Header />
          <BannerHero />
          <Dream />
          <Benefits />
          <Late />
          <Economic />
          <Testimonials />
          <HowItWorks />
          <Pricing />
          <SpecialOffer />
          <FAQ />
          <Footer />
        </Effect>
      )}
    </>
  )
}

export default Home