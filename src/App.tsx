import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import UploadResume from "./pages/UploadResume";
import SearchJobs from "./pages/SearchJobs";
import HotJobs from "./pages/HotJobs";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-between bg-gray-100 text-gray-800">
        <Navbar />
        <main className="flex-grow w-full max-w-3xl p-4 text-center">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/upload_resume" element={<UploadResume />} />
            <Route path="/search_jobs" element={<SearchJobs />} />
            <Route path="/hot_jobs" element={<HotJobs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;