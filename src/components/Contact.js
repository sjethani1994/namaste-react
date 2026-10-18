import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact form data:", formData);
    alert("Thanks for contacting us!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <span className="contact-badge">GET IN TOUCH</span>

        <h1>
          We'd Love to <span>Hear From You.</span>
        </h1>

        <p>
          Have a question, feedback, or just want to say hello? We're here to
          help make your food experience better.
        </p>
      </section>

      <section className="contact-main">
        <div className="contact-info">
          <span className="contact-label">CONTACT INFORMATION</span>
          <h2>Let's Talk!</h2>

          <p className="contact-description">
            Have something on your mind? Send us a message and let us know how
            we can help.
          </p>

          <div className="contact-info-card">
            <div className="contact-icon">✉️</div>
            <div>
              <h3>Email Us</h3>
              <p>support@example.com</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon">📞</div>
            <div>
              <h3>Call Us</h3>
              <p>+91 00000 00000</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon">📍</div>
            <div>
              <h3>Our Location</h3>
              <p>India</p>
            </div>
          </div>

          <div className="contact-note">
            <span>🍽️</span>
            <p>
              Your feedback helps us create a better experience for every food
              lover.
            </p>
          </div>
        </div>

        <div className="contact-form-card">
          <h2>Send Us a Message</h2>
          <p className="contact-form-subtitle">
            Fill out the form below and say hello.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <div className="contact-form-group">
                <label htmlFor="contact-name">Full Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact-form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="What is this regarding?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="contact-message">Your Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Write your message here..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact-submit-btn">
              Send Message <span>→</span>
            </button>
          </form>
        </div>
      </section>

      <section className="contact-bottom">
        <h2>Hungry for Something Delicious?</h2>
        <p>Head back and discover your next favorite meal.</p>

        <Link to="/" className="contact-home-btn">
          Explore Restaurants →
        </Link>
      </section>
    </div>
  );
};

export default Contact;
