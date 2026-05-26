import React from 'react';
import './CB7Section.css';
import { ActionButton } from '../../shared/UI/ActionButton';
import { LearnMoreLink } from '../../shared/UI/LearnMoreLink';
import { TextBlock } from '../../shared/UI/TextBlock';
import amlDashboardImg from '../../../assets/aml_dashboard.svg';
import cb7Svg from '../../../assets/CB7.svg';

export default function CB7Section() {
  return (
    <section className="cb7-section" id="cb7" aria-label="CB7 Core Banking">
      <div className="cb7-watermark" aria-hidden>CB7</div>
      <img src={cb7Svg} className="cb7-watermark-svg" aria-hidden alt="" />

      <div className="cb7-container">
        <div className="cb7-content">
          <TextBlock
            className="cb7-text"
            variant="display"
            heading="A complete cloud-based core banking."
            description="Faster time to market with our cloud-based core banking services"
            descriptionMaxWidth="327px"
          />
          <ActionButton
            href="#demo"
            variant="solid"
            size="cta"
            hover="blue-invert"
            className="cb7-demo-button"
          >
            REQUEST DEMO
          </ActionButton>
          <LearnMoreLink href="#learn-more-cb7" />
        </div>
        <div className="cb7-image-container">
          <div className="cb7-image-frame" role="img" aria-label="AML Dashboard screenshot">
            <div className="cb7-frame-border" aria-hidden />
            <div className="cb7-frame-bar" aria-hidden />
            <div className="cb7-image-mask">
              <img
                src={amlDashboardImg}
                alt="AML Dashboard showing banking analytics"
                className="cb7-dashboard-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
