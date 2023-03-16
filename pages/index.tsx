// pages/index.tsx

import type { NextPage } from 'next';
import Experience from '../components/Experience';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import SeanGPT from '../components/SeanGPT';
import ExperienceHeading from '../components/ExperienceHeading';
import ParticlesBackground from '../components/ParticlesBackground';
import Card from '../components/Card';
import ResponsiveCardGrid from '../components/ResponsiveCardGrid';
import LogoSlider from '../components/LogoSlider';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div className="flex justify-center flex-col relative">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <LogoSlider />
      <div id="seangpt">
        <SeanGPT />
      </div>
      {/* <ResponsiveCardGrid /> */}

      <ExperienceHeading />
      <Experience />
      <Footer />

    </div>
  );
};

export default Home;
