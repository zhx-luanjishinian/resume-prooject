import React from 'react';
import Brand from './components/Brand';
import Advantage from './components/Advantage';
import Product from './components/Product';
import { Feature60DataSource } from './common/data';
import Feature6 from './components/serviceData';
// // import Solution from '../components/Solution';
// import GoodCases from '../components/GoodCases';
// import Partner from '../components/Partner';
// import Contact from '../components/Contact';
// import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  return (
    <main className="home-main">
      <Brand />
      <Feature6 id="Feature6_0" key="Feature6_0" />,
      <Advantage />
      <Product />
      {/*<GoodCases />
       <Advantage />
      <Partner />
      <Contact />
      <ScrollToTop /> */}
    </main>
  );
};

export default Index;
