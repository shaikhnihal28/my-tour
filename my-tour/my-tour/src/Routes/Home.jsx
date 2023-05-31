import Hero from '../Components/Hero/Hero';
import Navbar from "../Components/Navbar/Navbar";
import Destination from '../Components/Destination/Destination';
import Trip from '../Components/Trip/Trip';
import Footer from '../Components/Footer/Footer';
import LoginForm from './LoginForm';
// import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
function Home() {
  // const history = useHistory();

  // const handleClick =()=> {
  //   history.push("/contact");
  // }
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1636213669717-7170fbff8383?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
      {/* <button onClick={handleClick}>Go To Login</button> */}
      <LoginForm />
    </>
  );
}

export default Home;
