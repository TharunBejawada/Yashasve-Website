import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { AllServicesPage } from '@/pages/AllServicesPage';
import { ServiceDetailPage } from '@/pages/ServiceDetailPage';
import { ResultsPage } from '@/pages/ResultsPage';
import { ContactPage } from '@/pages/ContactPage';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<AllServicesPage />} />
          <Route path="services/:id" element={<ServiceDetailPage />} />
          <Route path="results" element={<ResultsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
