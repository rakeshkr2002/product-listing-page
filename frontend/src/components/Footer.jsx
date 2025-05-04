import React from "react";
import "../css/Home.css";
import { FaGooglePay } from "react-icons/fa";
import { BiLogoMastercard } from "react-icons/bi";
import { FaPaypal } from "react-icons/fa";
import { SiApplepay } from "react-icons/si";
import { SiAmazonpay } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="newsletter">
          <h2>BE THE FIRST TO KNOW</h2>
          <p>Sign up for updates from mettā muse.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="contact-info">
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettammuse.com</p>
          <h3>CURRENCY</h3>
          <p>USD</p>
          <p>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
      <hr />

      <div className="footer-middle">
        <div className="company-info">
          <h3>mettā muse</h3>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliance Docs</li>
          </ul>
        </div>
        <div className="quick-links">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="social-payment">
          <div className="follow-us">
            <h3>FOLLOW US</h3>
            <p>Instagram</p>
            <p>LinkedIn</p>
          </div>
          <div className="payment-options">
            <h3>mettā muse ACCEPTS</h3>
            <div className="icons">
              <FaGooglePay />
              <BiLogoMastercard />
              <SiAmazonpay />
              <SiApplepay />
              <FaPaypal />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2023 mettammuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
