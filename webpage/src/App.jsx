import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Home from './pages/Home';

import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Services from './pages/Services';
import Events from './pages/Events';
import Terms from './pages/Terms';

// Product Sub-pages
import AIEnvelop from './pages/products/AIEnvelop';
import AICopilotConsulting from './pages/products/AICopilotConsulting';
import AICopilotPolice from './pages/products/AICopilotPolice';
import NutritionCopilot from './pages/products/NutritionCopilot';
import NewsAI from './pages/products/NewsAI';
import PersonalFinanceCopilot from './pages/products/PersonalFinanceCopilot';
import UnderWorks from './pages/products/UnderWorks';

// Service Sub-pages
import ProjectScoping from './pages/services/ProjectScoping';
import BuildingPOC from './pages/services/BuildingPOC';
import GenAIAdvisory from './pages/services/GenAIAdvisory';
import GenAIConsulting from './pages/services/GenAIConsulting';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="products" element={<Products />} />
          <Route path="products/ai-envelop" element={<AIEnvelop />} />
          <Route path="products/ai-copilot-consulting" element={<AICopilotConsulting />} />
          <Route path="products/ai-copilot-police" element={<AICopilotPolice />} />
          <Route path="products/nutrition-copilot" element={<NutritionCopilot />} />
          <Route path="products/news-ai" element={<NewsAI />} />
          <Route path="products/personal-finance-copilot" element={<PersonalFinanceCopilot />} />
          <Route path="products/underworks" element={<UnderWorks />} />

          <Route path="services" element={<Services />} />
          <Route path="services/project-scoping" element={<ProjectScoping />} />
          <Route path="services/building-poc" element={<BuildingPOC />} />
          <Route path="services/genai-advisory" element={<GenAIAdvisory />} />
          <Route path="services/genai-consulting" element={<GenAIConsulting />} />

          <Route path="events" element={<Events />} />

          <Route path="contact" element={<Contact />} />
          <Route path="terms" element={<Terms />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
