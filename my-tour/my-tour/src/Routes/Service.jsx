import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import ServicetImg from "../Images/1.jpg";
import Trip from "../Components/Trip/Trip"
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ServicetImg}
        title="Welcome To Service"
        btnClass="hide "
      />
      <Trip/>
      <Footer/>
    </>
  );
}

export default Service;
