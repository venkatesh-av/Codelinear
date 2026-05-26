import React from 'react';
import './GoingPaperlessSection.css';
import { ActionButton } from '../UI/ActionButton';
import { TextBlock } from '../UI/TextBlock';

export default function GoingPaperlessSection() {
  return (
    <section className="paperless-section" aria-label="Going Paperless">
      <div className="paperless-container">
        <div className="paperless-content">
          <TextBlock
            variant="display"
            gap="lg"
            heading="Take the full advantage of going paper-less now."
            description="CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations"
            descriptionMaxWidth="463px"
          />
        </div>
        <div className="paperless-actions">
          <ActionButton href="#contact" variant="outline" size="cta-wide" hover="soft">
            Contact Us
          </ActionButton>
          <ActionButton href="#demo" variant="primary" size="cta" hover="accent-invert">
            Request Demo
          </ActionButton>
        </div>

      </div>
    </section>
  );
}
