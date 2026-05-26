import './WhatYouGetSection.css';
import { TextBlock } from '../../shared/UI/TextBlock';
import { CheckIcon } from '../../shared/UI/CheckIcon';
import WhatYouGetImage from '../../../assets/WhatYouGetImage.svg';

const checklistItemsLeft = [
  "Customer-On Boarding",
  "Managing deposits and withdrawals",
  "Transaction management",
  "Interest Calculation",
  "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)"
];

const checklistItemsRight = [
  "CRM Activities",
  "Configuring New Banking Products",
  "Loan disbursal and Loan management",
  "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on."
];

export default function WhatYouGetSection() {
  return (
    <section className="wyg-section" id="features" aria-label="What You Will Get">
      <div className="wyg-container">
        <div className="wyg-image-container">
          <div className="wyg-image-frame" role="img" aria-label="Core Banking dashboard analytics screenshot">
            <div className="wyg-frame-border" aria-hidden="true" />
            <div className="wyg-frame-bar" aria-hidden="true" />
            <div className="wyg-image-mask">
              <img
                src={WhatYouGetImage}
                alt="Dashboard layout with analytics and chart reports"
                className="wyg-dashboard-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="wyg-content">
          <TextBlock
            variant="medium"
            heading="Run a more efficient, flexible, and digitally connected core banking system"
          />
          
          <div className="wyg-checklist-container">
            <TextBlock variant="subheading" headingLevel={3} heading="What you will get:" />
            
            <div className="wyg-columns">
              <div className="wyg-column">
                {checklistItemsLeft.map((item, idx) => (
                  <div key={idx} className="wyg-list-item">
                    <CheckIcon />
                    <span className="wyg-item-text">{item}</span>
                  </div>
                ))}
              </div>
              <div className="wyg-column">
                {checklistItemsRight.map((item, idx) => (
                  <div key={idx} className="wyg-list-item">
                    <CheckIcon />
                    <span className="wyg-item-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
