import React, { useState } from "react";


const Footer = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="footer-container">
      <div className="footer-section">
        <div className="footer-info">
          <div className="newsletter">
            <h2>BE THE FIRST TO KNOW</h2>
            <p>Sign Up for updates from Metta Muse</p>
            <div className="subscribe">
              <input type="text" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="contact">
            <h2>Contact Us</h2>
            <p>+442211335360</p>
            <p>customercare@mettamuse.com</p>
            <h2>CURRENCY</h2>
            <h3>USD</h3>
            <p>Transactions will be completed in European currency</p>
          </div>
        </div>

        <div className="footer-links">
          <div className="accordion">
            <div className="accordion-item">
              <p className="accordion-header" onClick={() => toggleSection("quickLinks")}>
                QUICK LINKS
              </p>
              {activeSection === "quickLinks" && (
                <div className="accordion-content">
                  <p>Orders & Shipping</p>
                  <p>Join/Login as a Seller</p>
                  <p>Payment & Pricing</p>
                  <p>Return & Refunds</p>
                  <p>FAQs</p>
                  <p>Privacy Policy</p>
                  <p>Terms & Conditions</p>
                </div>
              )}
            </div>

            <div className="accordion-item">
              <p className="accordion-header" onClick={() => toggleSection("socialPayments")}>
                Social & Payments
              </p>
              {activeSection === "socialPayments" && (
                <div className="accordion-content">
                  <div className="social">
                    <p>Instagram</p>
                    <p>LinkedIn</p>
                  </div>
                  <p>Metta Muse Accepts</p>
                  <div className="payment-icons">
                    <p>GPay</p>
                    <p>Mastercard</p>
                    <p>Paytm</p>
                    <p>Amex</p>
                    <p>iOS</p>
                    <p>OPay</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2023 Metta Muse. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
