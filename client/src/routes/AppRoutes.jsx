import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

// PUBLIC
import HomePage from "../pages/Home/HomePage";
import FilmsPage from "../pages/Films/FilmsPage";
import MovieDetailPage from "../pages/MovieDetail/MovieDetailPage";
import AboutPage from "../pages/About/AboutPage";
import NewsPage from "../pages/News/NewsPage";
import ContactPage from "../pages/Contact/ContactPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicy/PrivacyPolicyPage";
import DisclaimerPage from "../pages/Disclaimer/DisclaimerPage";

// ADMIN
import AdminLogin from "../pages/admin/Login";
import Dashboard from "../pages/admin/Dashboard";
import ManageMovies from "../pages/admin/ManageMovies";
import AddMovie from "../pages/admin/AddMovie";

import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC ROUTES WITH LAYOUT */}
        <Route element={<MainLayout />}>

          <Route path="/" element={<HomePage />} />
          <Route path="/films" element={<FilmsPage />} />
          <Route path="/films/:slug" element={<MovieDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />

        </Route>

        {/* ADMIN LOGIN (NO LAYOUT) */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* ADMIN PROTECTED ROUTES (NO MAINLAYOUT) */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/movies"
          element={
            <ProtectedRoute>
              <ManageMovies />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/movies/add"
          element={
            <ProtectedRoute>
              <AddMovie />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;