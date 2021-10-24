import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import 'rc-banner-anim/assets/index.css';
import './index.less';

function StartUse() {
  const animation = {
    y: '+=30',
    opacity: 0,
    type: 'from',
    ease: 'easeOutQuad',
  };

  return (
    <div className="home-page-wrapper Startuse-wrapper">
      <div className="Startuse-home-page-wrapper Startuse">
        <div key="title" className="Startuse-title-wrapper">
          <h1 className="title-h1">即可开始体验优加简历</h1>
        </div>
        <OverPack playScale={0.3} className="">
          <TweenOne key="video" className="content-button">
            <div className="Startuse-button">免费生成专业简历</div>
          </TweenOne>
        </OverPack>
      </div>
    </div>
  );
}

export default StartUse;
