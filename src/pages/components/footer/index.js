import React, { useState } from 'react';
import classnames from 'classnames';
import './index.less';

const Footer = () => {
  const [hoverWeixin, setHoverWeixin] = useState(false);
  const emailTo = () => {
    window.open('mailto:union_bd@kuaishou.com');
  };
  return (
    <footer className="footer">
      <div className="line1">
        <img alt="logo" src="/img/logo.png" />
        <div className="product">联系我们</div>
        <div className="products">
          <a target="_blank" href="https://www.kuaishou.com/" rel="noreferrer">
            <div className="link">备考面试</div>
          </a>
          <a target="_blank" href="https://e.kuaishou.com/" rel="noreferrer">
            <div className="link">就职学习</div>
          </a>
          <a target="_blank" href="https://www.kuaijinniu.com/" rel="noreferrer">
            <div className="link">微信公众号</div>
          </a>
        </div>

        <div className="contact-us">
          <div className="title">联系我们</div>
          <div>
            <div className="email">
              <span onClick={emailTo}>553341082@qq.com</span>
              <a target="_blank" href="/home/detail/1290" rel="noreferrer">
                <div className="tel">信息保护协议</div>
              </a>
            </div>
          </div>
        </div>
        <div
          className="weixin"
          onMouseEnter={() => setHoverWeixin(true)}
          onMouseLeave={() => setHoverWeixin(false)}
        >
          <img
            className="weixin-logo"
            alt="weixin"
            src={
              hoverWeixin
                ? 'https://ali2.a.kwimgs.com/udata/pkg/ks-ad-ssp-cdn/home/home2021/weixin.png'
                : 'https://ali2.a.kwimgs.com/udata/pkg/ks-ad-ssp-cdn/home/home2021/weixin-black.png'
            }
          />
          快手联盟微信公众号
          <img
            className={classnames('qr-code', { hover: hoverWeixin })}
            alt=""
            src="https://ali2.a.kwimgs.com/udata/pkg/ks-ad-ssp-cdn/home/home2021/weixin-qr.png"
          />
        </div>
      </div>
      <div className="line2">
        <div className="icp-info">
          www.kuaishou.com 2020@ All rights Reserved 京网文（2017）2551-280号
          <a
            target="_blank"
            href="https://beian.miit.gov.cn/#/Integrated/recordQuery"
            rel="noreferrer"
          >
            京ICP备07035647号-4
          </a>
          <a
            target="_blank"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020421"
            rel="noreferrer"
          >
            京公网安备 11010802020421号
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
