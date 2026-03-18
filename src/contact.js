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
                  <p>+91 9790995747</p>
                  <p>+91 6374621126</p>
                </div>
              </div>

              <div className="contact-buttons">
                <a href="tel:+919790995747" className="contact-btn">
                  <FiPhone /> Call Now
                </a>
                <a href="https://wa.me/919790995747" className="contact-btn whatsapp">
                  <FiPhone /> WhatsApp
                </a>
              </div>
            </div>

            {/* Google Maps */}
            <div className="contact-form animate-on-scroll" style={{ width: '100%', padding: '0' }}>
              <div className="map-stack" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <div className="map-item-wrapper">
                  <div className="map-label" style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '10px', 
                    marginBottom: '15px',
                    fontWeight: '600',
                    color: '#0a2463',
                    fontSize: '1.2rem'
                  }}>
                    <FiMapPin style={{ color: '#1e88e5' }} />
                    <span>Sri Sandhiya Institution (Irumbuliyur Branch)</span>
                  </div>
                  <div className="map-container" style={{
                    position: "relative",
                    width: "100%",
                    height: "350px",
                    overflow: "hidden",
                    borderRadius: "16px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    border: "1px solid #e9ecef"
                  }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.789982185133!2d80.19031537431566!3d12.92121568738955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d65b0cf0bbb%3A0x1c0243810f7ebf57!2sSri%20sandhiya%20institute!5e0!3m2!1sen!2sin!4v1773849564554!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: "0" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Sri Sandhiya Institution Location"
                    ></iframe>
                  </div>
                </div>

                <div className="map-item-wrapper">
                  <div className="map-label" style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '10px', 
                    marginBottom: '15px',
                    fontWeight: '600',
                    color: '#0a2463',
                    fontSize: '1.2rem'
                  }}>
                    <FiMapPin style={{ color: '#1e88e5' }} />
                    <span>Sri Sandhiya Institution (Main Branch)</span>
                  </div>
                  <div className="map-container" style={{
                    position: "relative",
                    width: "100%",
                    height: "350px",
                    overflow: "hidden",
                    borderRadius: "16px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    border: "1px solid #e9ecef"
                  }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.939078506173!2d80.1051545!3d12.9116371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f5c78c2d399%3A0x7e8d01e4df3dba41!2sSri%20sandhiya%20tution!5e0!3m2!1sen!2sin!4v1773847966100!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: "0" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Sri Sandhiya Tuition Location"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
