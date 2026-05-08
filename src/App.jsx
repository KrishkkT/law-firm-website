import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PracticeAreasPage from './pages/PracticeAreasPage';
import PersonalInjuryPage from './pages/practice/PersonalInjuryPage';
import FamilyLawPage from './pages/practice/FamilyLawPage';
import BusinessLawPage from './pages/practice/BusinessLawPage';
import EstatePlanningPage from './pages/practice/EstatePlanningPage';
import CriminalDefencePage from './pages/practice/CriminalDefencePage';
import RealEstateLawPage from './pages/practice/RealEstateLawPage';
import CivilLitigationPage from './pages/practice/CivilLitigationPage';
import ConsumerLawPage from './pages/practice/ConsumerLawPage';
import RevenueLawPage from './pages/practice/RevenueLawPage';
import TeamPage from './pages/TeamPage';
import FAQPage from './pages/FAQPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import DisclaimerPage from './pages/DisclaimerPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <ScrollToTop />
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage isDark={isDark} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/practice-areas" element={<PracticeAreasPage />} />
          <Route path="/practice-areas/personal-injury" element={<PersonalInjuryPage />} />
          <Route path="/practice-areas/family-law" element={<FamilyLawPage />} />
          <Route path="/practice-areas/business-law" element={<BusinessLawPage />} />
          <Route path="/practice-areas/estate-planning" element={<EstatePlanningPage />} />
          <Route path="/practice-areas/criminal-defence" element={<CriminalDefencePage />} />
          <Route path="/practice-areas/real-estate-law" element={<RealEstateLawPage />} />
          <Route path="/practice-areas/civil-litigation" element={<CivilLitigationPage />} />
          <Route path="/practice-areas/consumer-law" element={<ConsumerLawPage />} />
          <Route path="/practice-areas/revenue-law" element={<RevenueLawPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
