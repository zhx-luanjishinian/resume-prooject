import logo from './logo.svg';
import { ConfigProvider } from 'antd';
import Home from './pages/home';

import './App.css';

const App = () => {
  return (
    <ConfigProvider>
      <Home />
    </ConfigProvider>
  );
};

export default App;
