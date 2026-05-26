import React from 'react';
import './HeroSection.css';
import { ActionButton } from '../UI/ActionButton';
import { TextBlock } from '../UI/TextBlock';
import heroMainImg from '../../../assets/Pexels Photo by Andrea Piacquadio.svg';
import heroProfileImg from '../../../assets/profile.svg';
import heroRecentActivityImg from '../../../assets/recent_activity.svg';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-bg-glow" />

      <div className="hero-container">
        <div className="hero-content">
          <TextBlock
            className="hero-text"
            headingLevel={1}
            variant="hero"
            heading="The new foundation of modern banking"
            description="We drive innovation and growth, provide seamless customer experience and operational excellence"
          />
          <div className="hero-actions">
            <ActionButton href="#demo" variant="primary" size="hero" hover="blue-invert">
              REQUEST DEMO
            </ActionButton>
            <ActionButton href="#contact" variant="outline" size="hero-outline" hover="text-dark">
              CONTACT US
            </ActionButton>
          </div>
        </div>

        <div className="hero-images">
          <img
            src={heroMainImg}
            alt="Banking professional"
            className="hero-main-img"
          />
          <div className="hero-card hero-card-top">
            <img
              src={heroProfileImg}
              alt="Account overview card"
            />
          </div>
          <div className="hero-card hero-card-bottom">
            <img
              src={heroRecentActivityImg}
              alt="Recent activity card"
            />
          </div>
        </div>
      </div>

      <div className="trusted-by">
        <p className="trusted-label">Trusted By:</p>
        <div className="trusted-logos">
          <div className="trusted-logo-item">
            <svg className="trusted-logo-img logo-shells" viewBox="0 0 100 30" role="img" aria-label="Shells logo">
              <rect width="100" height="30" rx="4" fill="#E9F4F9" />
              <text x="50" y="20" fontSize="10" fontFamily="Roboto, Arial, sans-serif" fill="#586E84" textAnchor="middle">SHELLS</text>
            </svg>
            <span className="trusted-name">SHELLS</span>
          </div>
          <div className="trusted-logo-item">
            <svg width="17" height="17" viewBox="0 0 19 19" fill="none" className="trusted-icon">
              <path d="M13.0401 15.2268L0.729246 6.73479C-0.518306 5.87427 -0.0942208 4.08253 1.46144 3.66119L14.5456 0.109989C14.8228 0.00997888 15.1198 -0.0224863 15.4121 0.0152902C15.7043 0.0530667 15.9833 0.159994 16.2259 0.327199C16.4685 0.494404 16.6678 0.717062 16.8071 0.976694C16.9464 1.23633 17.0218 1.52545 17.027 1.82005L16.2516 13.8626C16.1596 15.292 14.2876 16.0873 13.0401 15.2268Z" fill="#586E84"/>
              <path d="M9.13547 17.323L1.88278 3.1395C1.71699 2.81502 1.64403 2.45106 1.67196 2.08775C1.69988 1.72445 1.8276 1.37591 2.04102 1.08058C2.25445 0.785248 2.54529 0.554595 2.88148 0.414057C3.21766 0.273518 3.58613 0.228557 3.94625 0.284134L17.3873 2.35858C17.6967 2.40634 17.9904 2.52688 18.2442 2.71027C18.498 2.89367 18.7046 3.13469 18.8472 3.41351C18.9896 3.69232 19.0639 4.00098 19.0639 4.3141C19.0638 4.62722 18.9894 4.93586 18.8469 5.21463L12.6551 17.3237C12.4888 17.6472 12.2366 17.9187 11.9261 18.1082C11.6155 18.2977 11.2588 18.3979 10.8951 18.3978C10.5313 18.3978 10.1746 18.2974 9.86417 18.1078C9.55372 17.9182 9.30161 17.6466 9.13547 17.323Z" fill="#586E84"/>
            </svg>
            <span className="trusted-name">SmartFinder</span>
          </div>
          <div className="trusted-logo-item">
            <svg width="18" height="18" viewBox="0 0 19 19" fill="none" className="trusted-icon">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.19894 18.3979C14.2794 18.3979 18.3979 14.2794 18.3979 9.19892C18.3979 4.11851 14.2794 0 9.19894 0C4.11849 0 0 4.11851 0 9.19892C0 14.2794 4.11849 18.3979 9.19894 18.3979ZM12.0687 4.28525C12.2084 3.78906 11.7269 3.49565 11.2871 3.80896L5.14824 8.18225C4.67132 8.52202 4.74634 9.19892 5.26092 9.19892H6.87745V9.18641H10.028L7.4609 10.0922L6.3292 14.1126C6.18951 14.6088 6.67098 14.9022 7.11078 14.5889L13.2496 10.2156C13.7266 9.87587 13.6515 9.19892 13.137 9.19892H10.6855L12.0687 4.28525Z" fill="#586E84"/>
            </svg>
            <span className="trusted-name">Zoomerr</span>
          </div>
          <div className="trusted-logo-item">
            <svg width="18" height="18" viewBox="0 0 19 19" fill="none" className="trusted-icon">
              <path d="M21.507 18.3979H28.9338L10.536 0H3.10913L21.507 18.3979Z" fill="#586E84"/>
              <path d="M14.3516 9.41258e-07L32.0868 17.7352V0H27.2873V5.59933L21.6879 0L14.3516 9.41258e-07Z" fill="#586E84"/>
              <path d="M0 0.615967V18.3978H4.79944V12.7985L10.3987 18.3978H17.7819L0 0.615967Z" fill="#586E84"/>
            </svg>
            <span className="trusted-name">ArtVenue</span>
          </div>
          <div className="trusted-logo-item">
            <svg width="14" height="16" viewBox="0 0 14 17" fill="none" className="trusted-icon">
              <path d="M7.7041 2.44347V0H0V16.788H7.7041V14.3446C6.12591 14.3446 4.61234 13.7176 3.49642 12.6017C2.38048 11.4857 1.75355 9.97222 1.75355 8.39403C1.75355 6.81584 2.38048 5.30227 3.49642 4.18635C4.61234 3.0704 6.12591 2.44347 7.7041 2.44347Z" fill="#586E84"/>
              <path d="M7.70412 2.44336V14.3445C9.28231 14.3445 10.7959 13.7175 11.9118 12.6016C13.0278 11.4856 13.6547 9.97211 13.6547 8.39392C13.6547 6.81573 13.0278 5.30216 11.9118 4.18624C10.7959 3.0703 9.28231 2.44336 7.70412 2.44336Z" fill="#586E84"/>
            </svg>
            <span className="trusted-name">kontrastr</span>
          </div>
          <div className="trusted-logo-item">
            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" className="trusted-icon">
              <path d="M0 0H12L8 9H4L0 0Z" fill="#586E84"/>
            </svg>
            <span className="trusted-name">
              <strong>WAVES</strong>MARATHON
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
