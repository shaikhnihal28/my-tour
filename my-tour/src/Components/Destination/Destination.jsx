import '../../Components/Destination/Destination.css';
import DestinationData from "../Destination/DestinationData";
import Mountain1 from "../../Images/1.jpg";
import Mountain2 from "../../Images/2.jpg";
import Mountain3 from "../../Images/3.jpg";
import Mountain4 from "../../Images/4.jpg";

const Destination = () => {
    return (
      <div className="destination">
        <h1>Popular Destination</h1>
        <p>Tours Give You The Opportunity The</p>
        <DestinationData
          className="first-des"
          heading="Taal Volcono, Bantangas"
          text="
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
                quae doloribus? At deserunt, ut, voluptate natus minus dicta
                neque aliquam blanditiis nesciunt soluta saepe autem pariatur
                odit. Inventore, eveniet sapiente. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Esse, quae doloribus? At deserunt,
                ut, voluptate natus minus dicta neque aliquam blanditiis
                nesciunt soluta saepe autem pariatur odit. Inventore, eveniet
                sapiente."
          img1={Mountain1}
          img2={Mountain2}
        />
        <DestinationData
          className="first-des-reverse"
          heading="Trippy Beginner React JS Responsive Tour"
          text="
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
                quae doloribus? At deserunt, ut, voluptate natus minus dicta
                neque aliquam blanditiis nesciunt soluta saepe autem pariatur
                odit. Inventore, eveniet sapiente. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Esse, quae doloribus? At deserunt,
                ut, voluptate natus minus dicta neque aliquam blanditiis
                nesciunt soluta saepe autem pariatur odit. Inventore, eveniet
                sapiente."
          img1={Mountain3}
          img2={Mountain4}
        />
      </div>
    );
}
export default Destination