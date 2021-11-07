// import logo from './logo.svg';
import { ConfigProvider } from 'antd';
import Home, { HomeRoutes } from './pages/home';
import zhCN from 'antd/es/locale/zh_CN';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllianceLayout from './componets/Layout';
import './App.css';
const App = () => {
  return (
    <ConfigProvider
      locale={zhCN}
      getPopupContainer={(node) => {
        return document.body;
      }}
    >
      {
        <Router>
          <Switch>
            <Route exact path={HomeRoutes} component={Home} />
            <AllianceLayout />
          </Switch>
        </Router>
      }
    </ConfigProvider>
  );
};

export default App;
