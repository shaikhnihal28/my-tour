import AboutUs from "../Components/AboutUs/AboutUs";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import AboutImg from '../Images/night.jpg';
function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Welcome To About"
        btnClass="hide "
      />
      <AboutUs/>
      <Footer/>
    </> 
  );
}

export default About;
