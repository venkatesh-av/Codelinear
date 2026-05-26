import React from 'react';
import ProductShowcase from './ProductShowcase.tsx';
import './CB7ProductSection.css';
import amlDashboardImg from '../../assets/aml_dashboard.svg';

export default function CB7ProductSection() {
  const features = [
    { title: 'Account management', description: '' },
    { title: 'Deposits & withdrawals', description: '' },
    { title: 'Transaction processing', description: '' },
    { title: 'Interest calculation', description: '' },
    { title: 'Reconciliation & reporting', description: '' },
    { title: 'Regulatory compliance', description: '' },
  ];

  return (
    <section className="cb7-section">
      <div className="cb7-decor">CB7</div>
      <div className="cb7-inner">
        <ProductShowcase
          title="A complete cloud-based core banking"
          description={`CB7 helps your financial institution improve the client experience, automate and optimize procedures, and ensure regulatory compliance — all on a secure, scalable cloud-native platform.`}
          imageUrl={amlDashboardImg}
          hasFeatures
          features={features}
        />
      </div>
    </section>
  );
}
