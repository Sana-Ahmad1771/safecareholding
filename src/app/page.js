import Header from './components/common/Header.jsx';
import AboutUs from './components/pages/home/AboutUs.jsx';
import Hero from './components/pages/home/Hero.jsx';
import TrustedBrands from './components/pages/home/TrustedBrands.jsx';
import OurBrands from './components/pages/home/OurBrands.jsx';
import QualityProducts from './components/pages/home/QualityProducts.jsx';
import ProductsServices from './components/pages/home/ProductsServices.jsx';
import SpecialServices from './components/pages/home/SpecialServices.jsx';
// import Testing from './components/pages/home/testing.jsx';

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <TrustedBrands />
    <AboutUs />
    <OurBrands />
    <QualityProducts />
    <ProductsServices />
    <SpecialServices />
    {/* <Testing /> */}
    </>
  );
}
