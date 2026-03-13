import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import HomePage from "../pages/Home/HomePage";
import FilmsPage from "../pages/Films/FilmsPage";
import MovieDetailPage from "../pages/MovieDetail/MovieDetailPage";
import AboutPage from "../pages/About/AboutPage";
import NewsPage from "../pages/News/NewsPage";
import ContactPage from "../pages/Contact/ContactPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicy/PrivacyPolicyPage";
import DisclaimerPage from "../pages/Disclaimer/DisclaimerPage";

function AppRoutes() {

  return (
    <BrowserRouter>

      <MainLayout>

        <Routes>

          <Route path="/" element={<HomePage />} />

          <Route path="/films" element={<FilmsPage />} />

          <Route path="/films/:slug" element={<MovieDetailPage />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/news" element={<NewsPage />} />

          <Route path="/contact" element={<ContactPage />} />

          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

          <Route path="/disclaimer" element={<DisclaimerPage />} />

        </Routes>

      </MainLayout>

    </BrowserRouter>
  );
}

export default AppRoutes;