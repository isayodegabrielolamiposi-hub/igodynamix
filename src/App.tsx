/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { HowWeWork } from './components/HowWeWork';
import { WhoWeHelp } from './components/WhoWeHelp';
import { PortfolioSection } from './components/PortfolioSection';
import { PackagesSection } from './components/PackagesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { InternationalBar } from './components/InternationalBar';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';

import { ServiceModal } from './components/ServiceModal';
import { ProjectModal } from './components/ProjectModal';
import { ArticleModal } from './components/ArticleModal';
import { PolicyModal } from './components/PolicyModal';

import { ServiceItem, PortfolioItem, BlogArticle } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Modals state
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);
  const [activePolicy, setActivePolicy] = useState<'privacy' | 'terms' | null>(null);

  // Inquiry prefill state
  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);
  const [prefilledPackage, setPrefilledPackage] = useState<string | undefined>(undefined);
  const [prefilledAddons, setPrefilledAddons] = useState<string[] | undefined>(undefined);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleInquireWithService = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    scrollToSection('contact');
  };

  const handleRequestQuote = (packageName: string, addons: string[]) => {
    setPrefilledPackage(packageName);
    setPrefilledAddons(addons);
    scrollToSection('contact');
  };

  const handleInquireForStage = (stageTitle: string) => {
    setPrefilledService(stageTitle);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#05080F] text-slate-100 flex flex-col font-sans selection:bg-[#D4AF37]/30 selection:text-white">
      {/* Navigation Header */}
      <Navbar onNavigate={scrollToSection} activeSection={activeSection} />

      {/* Main Content Layout */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onExploreServices={() => scrollToSection('services')}
          onStartProject={() => scrollToSection('contact')}
        />

        {/* About Section */}
        <AboutSection onInquire={() => scrollToSection('contact')} />

        {/* Services Section */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onInquireWithService={handleInquireWithService}
        />

        {/* How We Work: 4-Step Process */}
        <HowWeWork onPlanMarketing={() => scrollToSection('contact')} />

        {/* Who We Help: First-Time, Published, and Launching Authors */}
        <WhoWeHelp onInquireForStage={handleInquireForStage} />

        {/* Portfolio & Creative Showcase */}
        <PortfolioSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* Packages & Interactive Scope Builder */}
        <PackagesSection onRequestQuote={handleRequestQuote} />

        {/* Testimonials & Ethical Social Proof Framework */}
        <TestimonialsSection />

        {/* Searchable Author Resources & Blog */}
        <BlogSection onReadArticle={(article) => setSelectedArticle(article)} />

        {/* International Client Experience Bar */}
        <InternationalBar />

        {/* Contact & Book Project Inquiry */}
        <InquirySection
          prefilledService={prefilledService}
          prefilledPackage={prefilledPackage}
          prefilledAddons={prefilledAddons}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenPrivacy={() => setActivePolicy('privacy')}
        onOpenTerms={() => setActivePolicy('terms')}
      />

      {/* Interactive Modals */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onInquire={handleInquireWithService}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={handleInquireWithService}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onInquire={() => scrollToSection('contact')}
      />

      <PolicyModal
        type={activePolicy}
        onClose={() => setActivePolicy(null)}
      />
    </div>
  );
}
