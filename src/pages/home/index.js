import Footer from '../components/footer';
import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/header';
import Index from '../';
import './index.less';
const Home = () => {
  return (
    <div className="home">
      <Header />
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/home/news" component={News} />
        <Route exact path="/home/policy" component={Policy} />
        <Route exact path="/home/help" component={Help} />
        <Route
          exact
          path={['/home/search/keyword/:keyword', '/home/search/category/:category']}
          component={SearchResult}
        />
        <Route exact path="/home/detail" component={Detail} />
        <Route exact path="/home/detail/:id" component={Detail} /> */}
          <Route exact path="/" component={Index} />
        </Switch>
      </BrowserRouter>

      {/* <Footer /> */}
    </div>
  );
};
export default Home;
