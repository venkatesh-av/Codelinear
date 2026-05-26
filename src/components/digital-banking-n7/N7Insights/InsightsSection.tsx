import React from 'react';
import './InsightsSection.css';
import GeometricFourStars from '../../shared/UI/GeometricFourStars';
import { ActionButton } from '../../shared/UI/ActionButton';
import { LearnMoreLink } from '../../shared/UI/LearnMoreLink';
import { TextBlock } from '../../shared/UI/TextBlock';

export default function InsightsSection() {
  return (
    <section className="insights-section" id="insights" aria-label="Fintech Insights">
      <div className="insights-glow-wrapper" aria-hidden="true">
        <svg width="557" height="557" viewBox="0 0 557 557" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="278.386" cy="278.386" r="278.386" fill="url(#paint0_linear_insights)" />
          <defs>
            <linearGradient id="paint0_linear_insights" x1="133.216" y1="-587.128" x2="684.931" y2="-455.355" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00B4FD" />
              <stop offset="1" stopColor="#003ACE" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="insights-container">
        <div className="insights-intro-col">
          <TextBlock
            variant="section"
            heading="Get yourself up-to-speed on all the things happening in fintech"
          />
          <ActionButton href="#insights-all" variant="outline" size="cta-wide" hover="soft">
            Insights
          </ActionButton>
        </div>
        <div className="insights-grid-col">
          <article className="insights-card-featured">
            <div className="insights-card-graphic">
              <GeometricFourStars width={180} height={153} color="#00B4FD" />
            </div>
            <div className="insights-card-content">
              <div className="insights-card-meta">
                <span className="insights-card-category">getting started</span>
                <TextBlock
                  variant="article"
                  headingLevel={3}
                  heading="How to transition from a traditional to a digital bank"
                />
                <div className="insights-card-author-row">
                  <span className="insights-card-author">David Grohl</span>
                  <span className="insights-card-date">17/08/24</span>
                </div>
              </div>
              <ActionButton
                href="#read-blog-1"
                variant="outline"
                size="compact"
                hover="soft"
                fullWidth
                className="insights-read-more-button"
              >
                Read More
              </ActionButton>
            </div>
          </article>
          <div className="insights-lower-row">
            
            <article className="insights-card-small">
              <div className="insights-card-content">
                <div className="insights-card-meta">
                  <span className="insights-card-category">getting started</span>
                  <TextBlock
                    variant="article"
                    headingLevel={3}
                    heading="How to transition from a traditional to a digital bank"
                  />
                  <div className="insights-card-author-row">
                    <span className="insights-card-author">David Grohl</span>
                    <span className="insights-card-date">17/08/24</span>
                  </div>
                </div>
                <ActionButton
                  href="#read-blog-2"
                  variant="outline"
                  size="compact"
                  hover="soft"
                  fullWidth
                  className="insights-read-more-button"
                >
                  Read More
                </ActionButton>
              </div>
            </article>

            <article className="insights-card-small">
              <div className="insights-card-content">
                <div className="insights-card-meta">
                  <span className="insights-card-category">getting started</span>
                  <TextBlock
                    variant="article"
                    headingLevel={3}
                    heading="How to transition from a traditional to a digital bank"
                  />
                  <div className="insights-card-author-row">
                    <span className="insights-card-author">David Grohl</span>
                    <span className="insights-card-date">17/08/24</span>
                  </div>
                </div>
                <ActionButton
                  href="#read-blog-3"
                  variant="outline"
                  size="compact"
                  hover="soft"
                  fullWidth
                  className="insights-read-more-button"
                >
                  Read More
                </ActionButton>
              </div>
            </article>

          </div>
          <div className="insights-footer-link-row">
            <LearnMoreLink href="#insights-all" label="read all insights" tone="blue" underlineHover="full" />
          </div>

        </div>
      </div>
    </section>
  );
}
