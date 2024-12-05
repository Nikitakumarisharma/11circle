import Carousel from "./component/crousal";
import EasySteps from "./component/easyStep";
import FantasyCricket from "./component/exyeDiscription";
import FAQSection from "./component/Faq";
import FAQ from "./component/Faq2";
import Footer from "./component/footor";
import StatsSection from "./component/userRating";
import Navbar from "./component/navbar";
import TestimonialCarousel from "./component/playerLove";

function App() {
  return (
    <>
    <Navbar />
    <Carousel />
    <StatsSection />
    <EasySteps />
    <FantasyCricket />
    <FAQSection />
    <TestimonialCarousel />
    <FAQ />
     <Footer />
    </>
  );
}

export default App;
