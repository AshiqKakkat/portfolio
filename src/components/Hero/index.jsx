import React from 'react';
import Header from './Header';
import AvailabilityBadge from './AvailabilityBadge';
import HeroHeadline from './HeroHeadline';
import HeroIntro from './HeroIntro';
import HeroActions from './HeroActions';
import HeroStats from './HeroStats';
import PortraitScene from './PortraitScene';
import SignatureBlock from './SignatureBlock';
import ContactCard from './ContactCard';
import Mantra from './Mantra';
import ScrollIndicator from './ScrollIndicator';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden bg-primary text-text-main">

      {/* Film grain noise overlay */}
      <div className="noise-overlay"></div>

      {/* Subtle vertical guidelines */}
      <div className="guideline left-[3%] hidden md:block"></div>
      <div className="guideline left-[49%] hidden md:block"></div>
      <div className="guideline left-[79.5%] hidden xl:block"></div>
      <div className="guideline right-[3%] hidden md:block"></div>

      <Header />

      <main className="relative z-10 w-full max-w-[1600px] mx-auto h-full min-h-[100svh] flex flex-col pt-[100px] pb-12 px-[4vw] lg:px-[3vw]">

        {/* Background / Right Side Components */}
        <PortraitScene />
        <SignatureBlock />
        <Mantra />
        <ContactCard />
        <ScrollIndicator />

        {/* Foreground / Left Side Content (constrained width) */}
        <div className="relative z-20 flex-1 flex flex-col justify-center max-w-[590px] lg:pl-16 pointer-events-none">
          <div className="pointer-events-auto">
            <AvailabilityBadge />
            <HeroHeadline />
            <HeroIntro />
            <HeroActions />
          </div>
        </div>

        {/* Statistics positioned at bottom */}
        <div className="relative z-20 mt-auto pt-[15vh] pb-4 lg:pl-16 pointer-events-auto">
          <HeroStats />
        </div>

      </main>

    </section>
  );
};

export default Hero;
