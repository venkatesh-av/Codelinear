import React from 'react';
import Navbar from './components/layout/Navbar/Navbar';
import HeroSection from './components/shared/Hero/HeroSection';
import SolutionsSection from './components/shared/Solutions/SolutionsSection';
import CB7Section from './components/core-banking-cb7/CB7Overview/CB7Section';
import WhatYouGetSection from './components/core-banking-cb7/CB7Features/WhatYouGetSection';
import DigitalBankingSection from './components/digital-banking-n7/N7Overview/DigitalBankingSection';
import InsightsSection from './components/digital-banking-n7/N7Insights/InsightsSection';
import CaseStudiesSection from './components/digital-banking-n7/N7CaseStudies/CaseStudiesSection';
import GoingPaperlessSection from './components/shared/PaperlessBanner/GoingPaperlessSection';
import Footer from './components/layout/Footer/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <SolutionsSection />
        <CB7Section />
        <WhatYouGetSection />
        <DigitalBankingSection />
        <InsightsSection />
        <CaseStudiesSection />
        <GoingPaperlessSection />
        <Footer />
      </main>
    </div>
  );
}
