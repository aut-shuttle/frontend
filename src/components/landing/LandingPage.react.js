import React from 'react';
import AppFooter from "./views/AppFooter";
import Hero from "./views/Hero"
import AppAppBar from "./views/AppAppBar";
import Values from "./views/Values";
import HowItWorks from "./views/HowItWorks"
import SmokingHero from "./views/SmokingHero"

const LandingPage = () => {
  return (
    <div id="app">
      <AppAppBar />
      <Hero />
      <HowItWorks />
      <Values />
      <SmokingHero />
      <AppFooter />
    </div>
  );
};

export default LandingPage;