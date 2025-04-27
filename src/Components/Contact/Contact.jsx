import "./Contact.css";

function Contact() {
  return (
    <div id="contact-section">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.</p>

      <div id="contact-content">
        {/* Contact Form */}
        <form id="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your Message" required></textarea>
          </div>

          <button type="submit" id="submit-button">Submit</button>
        </form>

        {/* Image */}
        <div id="contact-image">
          <img src="https://cdn.theforkmanager.com/static/styles/wysiwyg_blog/public/Restaurant%205.jpg?itok=VQdK280C" alt="Contact" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
