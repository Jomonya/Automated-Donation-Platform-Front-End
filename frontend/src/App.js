// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import DonatePage from './components/DonatePage';
import DonorDashboard from './components/DonorDashboard';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import WhatWeDo from './components/About/WhatWeDo';
import OurTeam from './components/About/OurTeam';
import Careers from './components/About/Careers';
import BeneficiaryStories from './components/BeneficiaryStories';
import CharityForm from './components/Charities/CharityForm';
import CharityList from './components/Charities/CharityList';
import Programs from './components/Programs/Programs';
import SanitizationProgram from './components/Programs/SanitizationProgram';
import PadAGirlProgram from './components/Programs/PadAGirl';
import CleanWaterProgram from './components/Programs/CleanWaterProgram';

const App = () => (
  <Router>
    <NavBar />
    <div className="main-content"> {/* Add this class for proper spacing */}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/donate' element={<DonatePage charity="Selected Charity Name" />} />
        <Route path='/donor-dashboard' element={<DonorDashboard />} />
        <Route path='/about/what-we-do' element={<WhatWeDo />} />
        <Route path='/about/our-team' element={<OurTeam />} />
        <Route path='/about/careers' element={<Careers />} />
        <Route path='/beneficiaries/stories' element={<BeneficiaryStories />} />
        <Route path='/charities/form' element={<CharityForm />} />
        <Route path='/charities/list' element={<CharityList />} />
        <Route path='/programs' element={<Programs />} />
        <Route path='/programs/sanitization' element={<SanitizationProgram />} />
        <Route path='/programs/pad-a-girl' element={<PadAGirlProgram />} />
        <Route path='/programs/clean-water' element={<CleanWaterProgram />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
    <Footer />
  </Router>
);

export default App;
