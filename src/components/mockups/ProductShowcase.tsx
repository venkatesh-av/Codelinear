import React from 'react';
import './ProductShowcase.css';
import { ActionButton } from '../shared/UI/ActionButton';
import { LearnMoreLink } from '../shared/UI/LearnMoreLink';
import { TextBlock } from '../shared/UI/TextBlock';

interface ProductShowcaseProps {
  title: string;
  description: string;
  imageUrl?: string;
  hasFeatures?: boolean;
  features?: Array<{ title: string; description: string }>;
  isAlternate?: boolean;
}

export default function ProductShowcase({
  title,
  description,
  imageUrl,
  hasFeatures = false,
  features = [],
  isAlternate = false,
}: ProductShowcaseProps) {
  const content = (
    <div className="showcase-content">
      <TextBlock
        variant="showcase"
        heading={title}
        description={description}
      />
      
      {hasFeatures && features.length > 0 && (
        <div className="features-list">
          <h4>What you will get:</h4>
          <div className="features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-item">
                <div className="feature-checkbox">
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <circle cx="9.26182" cy="9.26182" r="9.26182" fill="url(#paint0)"/>
                    <path d="M4.92747 8.85313L3.02765 6.95331C2.92528 6.85094 2.78644 6.79343 2.64166 6.79343C2.49689 6.79343 2.35805 6.85094 2.25568 6.95331C2.05094 7.15805 2.05094 7.49299 2.25568 7.69772L4.54423 10.0138C4.75775 10.2274 5.10267 10.2274 5.3162 10.0138L11.1087 4.22128C11.2111 4.11891 11.2686 3.98007 11.2686 3.8353C11.2686 3.69052 11.2111 3.55168 11.1087 3.44931C11.0064 3.34694 10.8675 3.28943 10.7228 3.28943C10.578 3.28943 10.4391 3.34694 10.3368 3.44931L4.92747 8.85313Z" fill="#E9F4F9"/>
                    <defs>
                      <linearGradient id="paint0">
                        <stop stopColor="#00B4FD"/>
                        <stop offset="0.816" stopColor="#003ACE"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <span>{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="showcase-cta">
        <ActionButton href="#demo" variant="primary" size="compact" hover="blue-invert">
          REQUEST DEMO
        </ActionButton>
        <LearnMoreLink href="#learn" label="learn more" />
      </div>
    </div>
  );

  const image = imageUrl && (
    <div className="showcase-image">
      <div className="image-placeholder">
        <img src={imageUrl} alt="Product showcase" />
      </div>
    </div>
  );

  return (
    <div className={`product-showcase ${isAlternate ? 'alternate' : ''}`}>
      <div className="showcase-container">
        {isAlternate ? (
          <>
            {image}
            {content}
          </>
        ) : (
          <>
            {content}
            {image}
          </>
        )}
      </div>
    </div>
  );
}
