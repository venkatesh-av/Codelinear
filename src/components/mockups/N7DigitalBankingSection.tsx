import React from 'react';
import ProductShowcase from './ProductShowcase.tsx';
import './N7DigitalBankingSection.css';
import amlDashboardImg from '../../assets/aml_dashboard.svg';

export default function N7DigitalBankingSection() {
  const features = [
    { title: 'Customer on-boarding', description: '' },
    { title: 'Payments processing', description: '' },
    { title: 'Loan origination & disbursal', description: '' },
    { title: 'Configurable products', description: '' },
    { title: 'CRM activities', description: '' },
    { title: 'Analytics & reporting', description: '' },
  ];

  return (
    <section className="n7-section">
      <div className="n7-inner">
        <ProductShowcase
          title="Run a more efficient, flexible, and digitally connected core banking system"
          description={`N7 combines human-centred design, engineering, and data science to help you deliver delightful customer journeys and faster time-to-market.`}
          imageUrl={amlDashboardImg}
          hasFeatures
          features={features}
          isAlternate
        />
      </div>
    </section>
  );
}
