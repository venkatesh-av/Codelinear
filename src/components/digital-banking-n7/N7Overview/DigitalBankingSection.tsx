import './DigitalBankingSection.css';
import { ActionButton } from '../../shared/UI/ActionButton';
import { CheckIcon } from '../../shared/UI/CheckIcon';
import { LearnMoreLink } from '../../shared/UI/LearnMoreLink';
import { TextBlock } from '../../shared/UI/TextBlock';

import phone1Img from '../../../assets/DigitalBankingSection/iPhone 13 Pro.svg';
import phone2Img from '../../../assets/DigitalBankingSection/iPhone 13 Pro-2.svg';
import phone3Img from '../../../assets/DigitalBankingSection/iPhone-13-Pro-3.svg';
import n7BackgroundImg from '../../../assets/DigitalBankingSection/N7.svg';
import sevenBackgroundImg from '../../../assets/DigitalBankingSection/7.svg';
import sparcleBackgroundImg from '../../../assets/DigitalBankingSection/Sparcle.svg';
import starIconImg from '../../../assets/DigitalBankingSection/Star-vector.svg';
import handWaveImg from '../../../assets/DigitalBankingSection/hand-wave-Vector.svg';

const showcases = [
  {
    rowClass: 'row-one',
    layout: 'phone-first',
    phone: phone1Img,
    phoneAlt: 'iPhone 13 Pro dashboard mockup',
    heading: 'Fully compliant with regulatory requirement',
    description: "The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures.",
    checks: [
      'Pre-integrated Security System',
      'Fully Compliant With Regulatory Requirement',
      'Digitally Connected Core'
    ]
  },
  {
    rowClass: 'row-two',
    layout: 'features-first',
    phone: phone2Img,
    phoneAlt: 'iPhone 13 Pro analytics mockup',
    heading: 'No legacy IT systems',
    description: 'Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.',
    checks: [
      'Adaptive & Intelligent API monetization',
      'Ambient User Experience',
      'Cloud-native With lower TCO'
    ]
  },
  {
    rowClass: 'row-three',
    layout: 'phone-first',
    phone: phone3Img,
    phoneAlt: 'iPhone 13 Pro settings mockup',
    heading: 'No traditional branches',
    description: 'Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.',
    checks: [
      'Branchless & Paperless Banking',
      'Digital Transformation Capability',
      'Optimized, Adoptable and Scalable'
    ]
  }
];

function MarqueeGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="db-marquee-group" aria-hidden={hidden ? 'true' : undefined}>
      <img src={starIconImg} className="db-star-icon" alt="" aria-hidden="true" />
      <span className="db-marquee-gradient-text">N7</span>
      <img src={starIconImg} className="db-star-icon" alt="" aria-hidden="true" />
      <span className="db-marquee-bold-text">Say</span>
      <img src={handWaveImg} className="db-marquee-hand-wave" alt="" aria-hidden="true" />
      <span className="db-marquee-bold-text">to the new way of banking</span>
      <img src={starIconImg} className="db-star-icon" alt="" aria-hidden="true" />
      <span className="db-marquee-gradient-text">CB7</span>
      <img src={starIconImg} className="db-star-icon" alt="" aria-hidden="true" />
      <span className="db-marquee-bold-text">Say</span>
      <img src={handWaveImg} className="db-marquee-hand-wave" alt="" aria-hidden="true" />
      <span className="db-marquee-bold-text">to the new way of banking</span>
    </div>
  );
}

function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="db-col-phone">
      <img src={src} className="db-phone-composite" alt={alt} />
    </div>
  );
}

function FeatureBlock({
  heading,
  description,
  checks
}: {
  heading: string;
  description: string;
  checks: string[];
}) {
  return (
    <div className="db-col-features">
      <TextBlock
        className="db-feature-heading-group"
        variant="feature"
        tone="dark"
        headingLevel={3}
        heading={heading}
        description={description}
      />

      <div className="db-feature-checklist">
        {checks.map((item) => (
          <div key={item} className="db-checklist-item">
            <CheckIcon />
            <span className="db-checklist-text">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DigitalBankingSection() {
  return (
    <section className="db-section" id="digital-banking" aria-label="Digital Banking Platform">
      <div className="db-marquee-header">
        <div className="db-marquee-track">
          <MarqueeGroup />
          <MarqueeGroup hidden />
        </div>
      </div>

      <div className="db-content-canvas">
        <img src={n7BackgroundImg} className="db-bg-n7" alt="" aria-hidden="true" />
        <img src={sparcleBackgroundImg} className="db-bg-vector" alt="" aria-hidden="true" />
        <img src={sevenBackgroundImg} className="db-bg-seven" alt="" aria-hidden="true" />
        <img src={sparcleBackgroundImg} className="db-bg-ellipse" alt="" aria-hidden="true" />

        <div className="db-grid-container">
          <div className="db-col-intro">
            <TextBlock
              className="db-intro-headers"
              variant="display"
              tone="dark"
              heading="Digital banking out-of-the-box"
              description="N7 helps your financial institution improve the client experience, automate and optimize procedures"
            />

            <div className="db-intro-cta">
              <ActionButton href="#demo" variant="primary" size="cta" hover="dark-invert">
                REQUEST DEMO
              </ActionButton>

              <LearnMoreLink href="#learn-more" label="learn more" tone="gradient" />
            </div>
          </div>

          <div className="db-mobiles-stack-col">
            {showcases.map((showcase) => (
              <div
                key={showcase.heading}
                className={`db-showcase-row ${showcase.rowClass}${showcase.layout === 'features-first' ? ' alternating' : ''}`}
              >
                {showcase.layout === 'phone-first' && (
                  <PhoneMockup src={showcase.phone} alt={showcase.phoneAlt} />
                )}

                <FeatureBlock
                  heading={showcase.heading}
                  description={showcase.description}
                  checks={showcase.checks}
                />

                {showcase.layout === 'features-first' && (
                  <PhoneMockup src={showcase.phone} alt={showcase.phoneAlt} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="db-paperless-banner">
          <img src={n7BackgroundImg} className="db-paperless-bg" alt="" aria-hidden="true" />

          <div className="db-paperless-content">
            <h2>Take the full advantage of going paper-less now.</h2>
            <p>N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations</p>
          </div>

          <div className="db-paperless-actions">
            <ActionButton href="#contact" variant="outline" size="cta-wide" hover="soft">
              CONTACT US
            </ActionButton>
            <ActionButton href="#demo" variant="primary" size="cta" hover="accent-invert">
              REQUEST DEMO
            </ActionButton>
          </div>
        </div>
      </div>
    </section>
  );
}
