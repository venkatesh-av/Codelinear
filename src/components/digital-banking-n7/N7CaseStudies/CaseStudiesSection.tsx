import React from 'react';
import './CaseStudiesSection.css';
import GeometricFourStars from '../../shared/UI/GeometricFourStars';
import { ActionButton } from '../../shared/UI/ActionButton';
import { LearnMoreLink } from '../../shared/UI/LearnMoreLink';
import { TextBlock } from '../../shared/UI/TextBlock';

function ZoomerrLogo() {
  return (
    <div className="cs-zoomerr-logo" aria-label="Zoomerr brand">
      <svg width="24" height="24" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M15.0057 30.0114C23.2931 30.0114 30.0114 23.2931 30.0114 15.0057C30.0114 6.71828 23.2931 0 15.0057 0C6.71826 0 0 6.71828 0 15.0057C0 23.2931 6.71826 30.0114 15.0057 30.0114ZM19.687 6.99028C19.9148 6.18088 19.1293 5.70226 18.412 6.21333L8.39802 13.3472C7.62005 13.9015 7.74242 15.0057 8.58184 15.0057H11.2188V14.9853H16.3581L12.1705 16.4628L10.3245 23.0211C10.0966 23.8305 10.882 24.3091 11.5994 23.798L21.6134 16.6642C22.3914 16.1099 22.2689 15.0057 21.4296 15.0057H17.4307L19.687 6.99028Z" fill="#586E84" />
      </svg>
      <span className="cs-zoomerr-text">Zoomerr</span>
    </div>
  );
}

export default function CaseStudiesSection() {
  return (
    <section className="cs-section" id="case-studies" aria-label="Our Case Studies">
      <div className="cs-container">
        
        <TextBlock
          className="cs-heading-block"
          variant="display"
          align="center"
          heading="Our Case Studies"
        />
        <div className="cs-slider-viewport">
          <div className="cs-card-peaking-bg" aria-hidden="true">
            <div className="cs-peaking-graphic">
              <GeometricFourStars width={240} height={204} color="rgba(0, 180, 253, 0.4)" />
            </div>
            <div className="cs-peaking-details">
              <span className="cs-category-peaking">getting started</span>
              <div className="cs-title-peaking" />
            </div>
          </div>
          <article className="cs-card-active">
            <div className="cs-card-graphic">
              <GeometricFourStars width={258} height={219} color="#00B4FD" />
            </div>
            <div className="cs-card-content">
              <div className="cs-card-meta">
                <span className="cs-card-category">getting started</span>
                <TextBlock
                  variant="article-large"
                  headingLevel={3}
                  heading="How we help brand reach out to more people"
                />
                <ZoomerrLogo />
              </div>

              <ActionButton
                href="#case-study-details"
                variant="outline"
                size="compact"
                hover="soft"
                fullWidth
                className="cs-read-more-button"
              >
                Read More
              </ActionButton>
            </div>
          </article>

        </div>
        <div className="cs-controls-row">
          <div className="cs-navigation">
            <ActionButton
              variant="icon-outline"
              size="icon"
              hover="icon"
              ariaLabel="Previous case study"
            >
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.0475 10.4707L1.88066 10.4707M10.4706 21.0477L3.13555 13.7126C1.3451 11.9222 1.3451 9.0193 3.13555 7.22885L10.4706 -0.106201" stroke="#00B4FD" strokeWidth="0.951876" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </ActionButton>
            <div className="cs-pagination-dots" role="presentation">
              <span className="cs-dot active-pill" />
              <span className="cs-dot" />
              <span className="cs-dot" />
            </div>

            <ActionButton
              variant="icon-outline"
              size="icon"
              hover="icon"
              ariaLabel="Next case study"
            >
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-0.106264 10.4707L19.0606 10.4707M10.4707 21.0477L17.8057 13.7126C19.5962 11.9222 19.5962 9.0193 17.8057 7.22885L10.4707 -0.106201" stroke="#00B4FD" strokeWidth="0.951876" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </ActionButton>
          </div>
          <div className="cs-view-all-wrapper">
            <LearnMoreLink href="#case-studies-all" label="view all" tone="blue" underlineHover="full" />
          </div>

        </div>

      </div>
    </section>
  );
}
