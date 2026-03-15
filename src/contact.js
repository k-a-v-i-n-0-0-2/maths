import React from 'react';
import { FiMapPin, FiClock, FiPhone } from 'react-icons/fi';
import './contact.css'; // Import the CSS file for the contact page

const ContactPage = () => {
  return (
    <div className="contact-page">
      <section id="contact" className="contact-section">
        <div className="container">
          {/* Section Header */}
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">
              Schedule a consultation or learn more about our programs
            </p>
          </div>

          {/* Contact Information */}
          <div className="contact-content">
            <div className="contact-info animate-on-scroll">
              <div className="contact-item">
                <FiMapPin className="contact-icon" />
                <div>
                  <h3>Location</h3>
                  <p>123 Education Street, Mathematics Building, 2nd Floor</p>
                </div>
              </div>

              <div className="contact-item">
                <FiClock className="contact-icon" />
                <div>
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9am - 7pm</p>
                  <p>Saturday: 9am - 2pm</p>
                </div>
              </div>

              <div className="contact-item">
                <FiPhone className="contact-icon" />
                <div>
                  <h3>Contact Number</h3>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="contact-buttons">
                <a href="tel:+919876543210" className="contact-btn">
                  <FiPhone /> Call Now
                </a>
                <a href="https://wa.me/919876543210" className="contact-btn whatsapp">
                  <FiPhone /> WhatsApp
                </a>
              </div>
            </div>

            {/* Google Maps */}
            <div className="contact-form animate-on-scroll">
              <div className="map-container" style={{
                position: "relative",
                width: "100%",
                height: "450px",
                overflow: "hidden",
                borderRadius: "16px",
                boxShadow: "var(--shadow-sm)",
                border: "1px solid var(--light-gray)"
              }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.123456789!2d-122.08467!3d37.422199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDI1JzE5LjkiTiAxMjLCsDA1JzA0LjgiVw!5e0!3m2!1sen!2sus!4v1648765234567!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
