import React from 'react';
import Brand from './components/Brand';
import Page1 from './components/Advantage';
import Page2 from './components/Product';
// // import Solution from '../components/Solution';
// import GoodCases from '../components/GoodCases';
// import Partner from '../components/Partner';
// import Contact from '../components/Contact';
// import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  return (
    <main className="home-main">
      <Brand />
      <Page1 />
      <Page2 />

      {/*<GoodCases />
       <Advantage />
      <Partner />
      <Contact />
      <ScrollToTop /> */}
    </main>
  );
};

export default Index;
