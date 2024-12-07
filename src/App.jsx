import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../plugin.css";
import Navbar from "./components/Navbar";
import "./styles/index.scss";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Faq from "./pages/Faq";
import OnewaySearchResult from "./pages/OnewaySearchResult";
import Testimonial from "./pages/TestimonialPage";
import Contact from "./pages/Contact";
import CookiePolicy from "./pages/CookiePolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclamer from "./pages/Disclamer";
import TermCondition from "./pages/TermCondition";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/faq" element={<Faq />}></Route>
        <Route path="/testimonials" element={<Testimonial />}></Route>
        <Route path="/contact-us" element={<Contact />}></Route>
        <Route path="/cookie-policy" element={<CookiePolicy />}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="/disclaimer" element={<Disclamer />}></Route>
        <Route path="/term-condition" element={<TermCondition />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route
          path="/OnewaySearchResult"
          element={<OnewaySearchResult />}
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
