import Carousel from "./component/crousal";
import EasySteps from "./component/easyStep";
import FantasyCricket from "./component/fantacyCricket";
import FAQSection from "./component/Faq";
import FAQ from "./component/Faq2";
import Footer from "./component/footor";
import StatsSection from "./component/iconsLayout";
import Navbar from "./component/navbar";
import TestimonialCarousel from "./component/testimonial";

function App() {
  return (
    <>
    <Navbar />
    <Carousel />
    <StatsSection />
    <EasySteps />
    <FantasyCricket />
    <FAQ />
    <FAQSection />
    <TestimonialCarousel />
     <Footer />
    </>
  );
}

export default App;
