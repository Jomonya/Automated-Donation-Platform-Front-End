import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Import social media icons

const Footer = () => (
  <footer className='footer'>
    <div className="footer-content">
      <p>&copy; 2024 Automated Donation Platform. All rights reserved.</p>
      <div className="contact-info">
        <p>Email: support@donationplatform.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Address: 123 Charity Lane, Donation City, Country</p>
      </div>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
