import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import ContactImg from "../Images/2.jpg";
import ContactForm from "../Components/ContactForm/ContactForm"


function Contact() { 
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="Welcome To Contact"
        btnClass="hide "
      />
      <ContactForm/>
      <Footer/>
    </>
  );
}

export default Contact;
