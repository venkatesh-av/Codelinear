import React from 'react';
import './SolutionsSection.css';
import { ActionButton } from '../UI/ActionButton';
import { LearnMoreLink } from '../UI/LearnMoreLink';
import { TextBlock } from '../UI/TextBlock';
import CoreBankingIconSVG from '../../../assets/Core Banking CB7.svg';
import DigitalBankingIconSVG from '../../../assets/Digital Banking N7.svg';
import OpenBankingIconSVG from '../../../assets/Open Banking.svg';
import LoanOriginationIconSVG from '../../../assets/Loan Origination System.svg';
import LoanManagementIconSVG from '../../../assets/Loan Management System.svg';
interface Solution {
  id: string;
  title: string;
  description: string;
  badge?: string;
  icon: string;
}
interface SolutionCardProps {
  solution: Solution;
}

function SolutionCard({ solution }: SolutionCardProps) {
  return (
    <article className="solution-card">
      <div className="solution-card-header">
        <img src={solution.icon} alt={`${solution.title} icon`} className="solution-icon" />
        {solution.badge && (
          <span className="solution-badge" aria-label={`${solution.badge} certified`}>
            {solution.badge}
          </span>
        )}
      </div>
      <TextBlock
        className="solution-card-body"
        variant="card"
        headingLevel={3}
        heading={solution.title}
        description={solution.description}
      />
      <LearnMoreLink href="#" label="LEARN MORE" />

    </article>
  );
}
const solutions: Solution[] = [
  {
    id: 'cb7',
    title: 'Core Banking CB7',
    description:
      'CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.',
    icon: CoreBankingIconSVG,
  },
  {
    id: 'n7',
    title: 'Digital Banking N7',
    description:
      'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
    icon: DigitalBankingIconSVG,
  },
  {
    id: 'ob',
    title: 'Open Banking',
    description:
      'Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.',
    icon: OpenBankingIconSVG,
  },
  {
    id: 'los',
    title: 'Loan Origination System',
    description:
      'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
    icon: LoanOriginationIconSVG,
  },
  {
    id: 'lms',
    title: 'Loan Management System',
    description:
      'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
    badge: 'NBFC',
    icon: LoanManagementIconSVG,
  },
];
export default function SolutionsSection() {
  return (
    <section className="solutions-section" id="solutions" aria-labelledby="solutions-heading">
      <div className="solutions-bg-glow" aria-hidden="true" />

      <div className="solutions-container">
        <aside className="solutions-left">
          <TextBlock
            id="solutions-heading"
            variant="section"
            heading="All of our solutions are tailor-made to your needs"
          />
          <ActionButton href="#demo" variant="outline" size="cta-wide" hover="text-dark">
            REQUEST DEMO
          </ActionButton>
        </aside>
        <div className="solutions-right">
          <div className="solutions-grid" role="list">
            {solutions.map((s) => (
              <div key={s.id} role="listitem">
                <SolutionCard solution={s} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
