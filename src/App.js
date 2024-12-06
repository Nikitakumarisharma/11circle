import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TermsAndConditions from "./component/TermAndCondition";
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
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/terms-and-conditions" element={
            <>
            <TermsAndConditions />
            </>
            }>
              </Route>


          {/* Main app content */}
          <Route
            path="/"
            element={
              <>
                <Carousel />
                <StatsSection />
                <EasySteps />
                <FAQ />
                <FantasyCricket />
                <FAQSection />
                <TestimonialCarousel />
              </>
            }
          />
        </Routes>


        <Footer />
      </>
    </Router>
  );
}

export default App;
