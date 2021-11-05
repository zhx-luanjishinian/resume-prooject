import React, { useState, useEffect } from 'react';
import './index.less';
import classnames from 'classnames';
import { useHistory } from 'react-router-dom';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const blackHeaderList = ['/home/search', '/home/detail'];

const Header = () => {
  const history = useHistory();
  //const { pathname } = history.location;
  const [hasBG, setHasBG] = useState(false);
  useEffect(() => {
    const home = document.querySelector('.home');
    home.scrollTop = 0;
    const handleScroll = (e) => {
      //setHasBG(e.target.scrollTop > 5 || blackHeaderList.some((item) => pathname.startsWith(item)));
    };
    home?.addEventListener('scroll', handleScroll);
    return () => {
      home?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={classnames('header', { hasBG })}>
      <img
        src="/img/logo-white.png"
        alt="优加实习社"
        onClick={() => history.push('/')}
        className="logo"
      />
      <nav className="header-items">
        {HeaderItems.map((item) => (
          <div
            key={item.text}
            className={classnames('header-item', {
              //active: item.link === pathname,
            })}
            onClick={() => {
              history.push(item.link);
            }}
          >
            <span className={classnames('node')} />
            {item.text}
          </div>
        ))}
        {false ? (
          <div
            className="login"
            onClick={() => {
              history.push('/make');
            }}
          >
            <span className="text">进入平台</span>
            <div className="animation" />
          </div>
        ) : (
          <>
            <div
              className="regist"
              onClick={() => {
                //register(window.location.href);
              }}
            >
              <span className="text">注册</span>
              <div className="animation" />
            </div>
            <div
              className="login"
              onClick={() => {
                // openLoginModal();
              }}
            >
              <span className="text">登录</span>
              <div className="animation" />
            </div>
          </>
        )}
      </nav>
    </header>
  );
};
export default Header;
export const HeaderItems = [
  {
    text: '首页',
    link: '/',
  },
  {
    text: '简历修改',
    link: '/make',
  },
  {
    text: '模拟面试',
    link: '/',
  },
];
