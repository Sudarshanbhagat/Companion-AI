import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages
import { Splash } from './pages/Splash';
import { Welcome } from './pages/Welcome';
import { Onboarding } from './pages/Onboarding';
import { Login } from './pages/Login';
import { Permissions } from './pages/Permissions';
import { AvatarCreation } from './pages/AvatarCreation';
import { ModeSelection } from './pages/ModeSelection';
import { MainAI } from './pages/MainAI';
import { Settings } from './pages/Settings';
import { Profile } from './pages/Profile';
import { Memory } from './pages/Memory';
import { Subscription } from './pages/Subscription';
import { ErrorPage } from './pages/Error';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Splash />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/permissions" element={<Permissions />} />
        <Route path="/avatar-creation" element={<AvatarCreation />} />
        <Route path="/mode-selection" element={<ModeSelection />} />
        <Route path="/main" element={<MainAI />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/memory" element={<Memory />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
