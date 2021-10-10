import React, { useState } from 'react';
import './index.less';
import classnames from 'classnames';
import { useHistory } from 'react-router-dom';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Header = () => {
  const history = useHistory();
  const [hasBG, setHasBG] = useState(false);

  //const { pathname } = history.location;

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
              //           radar.customLog({
              //             eventType: EVENT_TYPE.TAB_CLICK,
              //             page: 'Home2021',
              //             message: el.text,
              //             extraInfo: {
              //               link: el.link,
              //               text: el.text,
              //             },
              //           });
              //           history.push(el.link);
            }}
          >
            <span className={classnames('node')} />
            {item.text}
          </div>
        ))}
        {/* {userInfo ? (
                                    <div
                                      className="login"
                                      onClick={() => {
                                        history.push('/index');
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
                                          register(window.location.href);
                                        }}
                                      >
                                        <span className="text">注册</span>
                                        <div className="animation" />
                                      </div>
                                      <div
                                        className="login"
                                        onClick={() => {
                                          openLoginModal();
                                        }}
                                      >
                                        <span className="text">登录</span>
                                        <div className="animation" />
                                      </div>
                                    </>
                                  )} */}
      </nav>
    </header>
  );
};
export default Header;
export const HeaderItems = [
  {
    text: '主页',
    link: '/',
  },
];
