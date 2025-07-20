import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import HeroSectionDeveloperPortfolio from "pages/hero-section-developer-portfolio";
import AboutMePersonalNarrative from "pages/about-me-personal-narrative";
import ToolsProfessionalWorkflowDisplay from "pages/tools-professional-workflow-display";
import ContactCommunicationPortal from "pages/contact-communication-portal";
import TechnologiesInteractiveStackShowcase from "pages/technologies-interactive-stack-showcase";
import ProjectsCuratedCaseStudies from "pages/projects-curated-case-studies";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<HeroSectionDeveloperPortfolio />} />
        <Route path="/hero-section-developer-portfolio" element={<HeroSectionDeveloperPortfolio />} />
        <Route path="/about-me-personal-narrative" element={<AboutMePersonalNarrative />} />
        <Route path="/tools-professional-workflow-display" element={<ToolsProfessionalWorkflowDisplay />} />
        <Route path="/contact-communication-portal" element={<ContactCommunicationPortal />} />
        <Route path="/technologies-interactive-stack-showcase" element={<TechnologiesInteractiveStackShowcase />} />
        <Route path="/projects-curated-case-studies" element={<ProjectsCuratedCaseStudies />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;