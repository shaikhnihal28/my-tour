import "./ContactForm.css";

function ContactForm(){
    return (
      <div className="form-container">
        <h1>Send A Message to Us!</h1>
        <form>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Subject" />
          <textarea placeholder="Message" rows="4" ></textarea>
          <button>Send Message</button>
        </form>
      </div>
    );
}

export default ContactForm;