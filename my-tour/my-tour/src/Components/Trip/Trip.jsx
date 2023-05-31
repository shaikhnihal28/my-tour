import '../Trip/Trip.css';
import TripData from './TripData';
import Trip1 from "../../Images/5.jpg"
import Trip2 from "../../Images/8.jpg";
import Trip3 from "../../Images/6.jpg"

function Trip (){
   return (
     <div className="trip">
       <h1>Recent Trips</h1>
       <p>You can Discover Unique Destinations Using google Maps.</p>
       <div className="tripcard">
         <TripData
           image={Trip1}
           heading="Lorem ipsum dolor sit amet"
           text="
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quaerat debitis repellendus pariatur accusamus non autem, magnam provident odit consequatur, sequi id sint, quibusdam culpa blanditiis quia numquam sapiente illo."
         />
         <TripData
           image={Trip2}
           heading="Lorem ipsum dolor sit amet"
           text="
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quaerat debitis repellendus pariatur accusamus non autem, magnam provident odit consequatur, sequi id sint, quibusdam culpa blanditiis quia numquam sapiente illo."
         />
         <TripData
           image={Trip3}
           heading="Lorem ipsum dolor sit amet"
           text="
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quaerat debitis repellendus pariatur accusamus non autem, magnam provident odit consequatur, sequi id sint, quibusdam culpa blanditiis quia numquam sapiente illo."
         />
       </div>
     </div>
   );
}

export default Trip;