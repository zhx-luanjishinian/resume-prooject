import logo from './logo.svg';
import { ConfigProvider } from 'antd';
import Home from './pages/home';
import zhCN from 'antd/es/locale/zh_CN';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllianceLayout from './componets/Layout';

import './App.css';

const App = () => {
  return (
    <ConfigProvider
      locale={zhCN}
      getPopupContainer={(node) => {
        // if (node) {
        //   return node.parentNode as HTMLElement;
        // }
        return document.body;
      }}
    >
      {
        <Router>
          <Switch>
            <Route exact path="/" component={<Home />} />
            <AllianceLayout />
          </Switch>
        </Router>
      }
    </ConfigProvider>
  );
};

export default App;
