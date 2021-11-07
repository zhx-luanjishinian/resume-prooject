import Footer from '../components/footer';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Header, { HeaderItems } from '../components/header';
import Modify from './pages/modify';
import Index from './pages';
import './index.less';
import Interviews from './pages/interviews';
const Home = () => {
  useEffect(() => {
    // document.querySelector('.good-cases')?.scrollIntoView();
  }, []);
  return (
    <div className="home">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/modify" component={Modify} />
          <Route exact path="/interviews" component={Interviews} />
          <Route exact path="/" component={Index} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
};
export default Home;
export const HomeRoutes = [...HeaderItems.map((el) => el.link)];
