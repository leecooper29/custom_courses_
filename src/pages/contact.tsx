import "../css/contact.css";
import SubscriptionPlans from "../components/SubscriptionPlans";

function onSubmit() {
  console.log("Thank you for contacting us! We will get back to you soon.");
}

function Contact(){
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h2>Subscription Types</h2>
        <SubscriptionPlans />
      </div>
      <div className="contact-header">
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <h2>Connect with me</h2>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows={4} required></textarea>

          <button type="submit" className="submit-button" onClick={onSubmit}>
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
