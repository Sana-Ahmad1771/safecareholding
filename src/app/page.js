import Header from './components/common/Header.jsx';
import AboutUs from './components/pages/home/StrategicApproach.jsx';
import Hero from './components/pages/home/Hero.jsx';
import TrustedBrands from './components/pages/home/TrustedBrands.jsx';
import OurBrands from './components/pages/home/OurBrands.jsx';
import QualityProducts from './components/pages/home/QualityProducts.jsx';
import ProductsServices from './components/pages/home/ProductsServices.jsx';
import SpecialServices from './components/pages/home/SpecialServices.jsx';
import Footer from './components/common/Footer.jsx';
import TechnologyGrid from './components/pages/home/Technology.jsx';
import { HeroSection } from './components/pages/home/HeroSection.jsx';
import About from './components/pages/home/About.jsx';
import GroupStrategy from './components/pages/home/StrategicApproach.jsx';
import Solutions from './components/pages/home/Solutions.jsx';
import ReadyToPartner from './components/pages/home/ReadyToPartner.jsx';
import Gallery from './components/pages/home/Gallery.jsx';
// import Testing from './components/pages/home/testing.jsx';

export default function Home() {
  return (
    <>
    <Header />
    <HeroSection/>
    {/* <Hero /> */}

    <TrustedBrands />
    <About />
    <Solutions />
    <GroupStrategy />
    <OurBrands />
    <QualityProducts />
    <ProductsServices />
    <SpecialServices />
    {/* <Testing /> */}
    <TechnologyGrid />
    <Gallery />
    <ReadyToPartner />
    <Footer />
    
    </>
  );
}
