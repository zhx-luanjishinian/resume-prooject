import React from 'react';
import Brand from '../../components/Brand';
import Advantage from '../../components/Advantage';
import Product from '../../components/Product';
import ServiceData from '../../components/serviceData';
import Teachvideo from '../../components/Teachvideo';
import UserFeedback from '../../components/UserFeedback';
import StartUse from '../../components/startUse';
import Process from '../../components/Process';
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
      <Advantage id="Feature1_0" key="Feature1_0" />
      <Teachvideo id="Feature2_0" key="Feature2_0" />
      <Process id="Feature3_0" key="Feature3_0" />
      <Product id="Feature4_0" key="Feature4_0" />
      <UserFeedback id="Feature5_0" key="Feature5_0" />
      <StartUse id="Feature7_0" key="Feature7_0" />
      {/* <ScrollToTop />  */}
    </main>
  );
};

export default Index;
