import React from 'react';
import Brand from './components/Brand';
import Advantage from './components/Advantage';
import Product from './components/Product';
import ServiceData from './components/serviceData';
import Teachvideo from './components/Teachvideo';
import UserFeedback from './components/UserFeedback';
import StartUse from './components/startUse';
import Process from './components/Process';
// // import Solution from '../components/Solution';
// import GoodCases from '../components/GoodCases';
// import Partner from '../components/Partner';
// import Contact from '../components/Contact';
// import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  return (
    <main className="home-main">
      <Brand />
      <ServiceData id="Feature6_0" key="Feature6_0" />,
      <Advantage />
      <Teachvideo />
      <Process />
      <Product />
      <UserFeedback />
      <StartUse />
      {/*<GoodCases />
       <Advantage />
      <Partner />
      <Contact />
      <ScrollToTop /> */}
    </main>
  );
};

export default Index;
