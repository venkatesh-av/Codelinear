import React from 'react';
import './Footer.css';
import maskGroup from '../../../assets/Mask group.svg';

function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <a href={href} className="footer-link">
      <span className="footer-link-inner">
        <span>{label}</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.000248496 5.78968H10.9177" stroke="#00B4FD" strokeWidth="0.935782" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.45901 0.331201L10.9177 5.78993L5.45901 11.2487" stroke="#00B4FD" strokeWidth="0.935782" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <div className="footer-link-underline" />
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="footer-section" id="footer" aria-label="Footer">
      <div className="footer-glow-wrapper" aria-hidden="true">
        <svg width="1440" height="557" viewBox="0 0 1440 557" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="720" cy="278.386" rx="720" ry="278.386" fill="url(#paint0_linear_footer)" />
          <defs>
            <linearGradient id="paint0_linear_footer" x1="344.541" y1="-587.128" x2="1436.28" y2="87.262" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00B4FD" />
              <stop offset="1" stopColor="#003ACE" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="footer-container">
        <div className="footer-brand-col">
          <div className="footer-watermark-mask">
            <img src={maskGroup} alt="" className="footer-watermark-image" aria-hidden="true" />
          </div>
        </div>
        <div className="footer-content-col">
          <div className="footer-data-column">
            <div className="footer-address-card">
              <h4 className="footer-column-heading">London</h4>
              <p className="footer-address-text">
                Linktia Infosystems Ltd – CB7,<br />
                26 Main Road Sundridge, TN14 6EP, England, United Kingdom.
              </p>
            </div>
            
            <div className="footer-links-group">
              <h5 className="footer-links-heading">Solutions</h5>
              <div className="footer-links-list">
                <FooterLink label="Core Banking CB7" href="#cb7" />
                <FooterLink label="Digital Banking N7" href="#digital-banking" />
                <FooterLink label="Open Banking" href="#open-banking" />
                <FooterLink label="Loan Origination System" href="#loan-origination" />
                <FooterLink label="Loan Management System" href="#loan-management" />
                <FooterLink label="Digital Transformation" href="#digital-transformation" />
              </div>
            </div>
          </div>
          <div className="footer-data-column">
            <div className="footer-address-card">
              <h4 className="footer-column-heading">Dubai</h4>
              <p className="footer-address-text">
                Linktia Infosystems Ltd – CB7,<br />
                Jumeirah Business Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates.
              </p>
            </div>
            
            <div className="footer-links-group">
              <h5 className="footer-links-heading">N7 Banking</h5>
              <div className="footer-links-list">
                <FooterLink label="About Us" href="#about" />
                <FooterLink label="Solutions" href="#solutions" />
                <FooterLink label="Contact" href="#contact" />
                <FooterLink label="Company" href="#company" />
                <FooterLink label="Careers" href="#careers" />
                <FooterLink label="Insights" href="#insights" />
                <FooterLink label="Core Team" href="#core-team" />
                <FooterLink label="Brand Center" href="#brand-center" />
              </div>
            </div>
          </div>
          <div className="footer-data-column">
            <div className="footer-address-card">
              <h4 className="footer-column-heading">Pune</h4>
              <p className="footer-address-text">
                Linktia Infosystems Ltd – CB7,<br />
                Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India.
              </p>
            </div>
            
            <div className="footer-links-group">
              <h5 className="footer-links-heading">Our Socials</h5>
              <div className="footer-links-list">
                <FooterLink label="LinkedIn" href="https://linkedin.com" />
                <FooterLink label="X" href="https://x.com" />
              </div>
            </div>
          </div>

        </div>

      </div>
      <div className="footer-bottom-row">
        <p className="footer-copyright-text">
          Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
        </p>
      </div>

    </footer>
  );
}
