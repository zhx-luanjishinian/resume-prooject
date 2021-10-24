import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from '../../common/data';
import './index.less';

function Teachvideo() {
  const animation = {
    y: '+=30',
    opacity: 0,
    type: 'from',
    ease: 'easeOutQuad',
  };
  const titleWrapper = {
    children: [
      {
        name: 'title',
        children: '名企精英都在用的专业简历',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content content4-title-content',
        children: '30 分钟快速制作一份完美简历，帮助 500 万人才直通面试',
      },
    ],
  };

  return (
    <div className="home-page-wrapper content4-wrapper">
      <div className="home-page content4">
        <div key="title" className="title-wrapper">
          {titleWrapper.children.map(getChildrenToRender)}
        </div>
        <OverPack playScale={0.3} className="">
          <TweenOne key="video" animation={{ ...animation, delay: 300 }} className="content4-video">
            <video
              id="lp-video"
              autoplay="autoplay"
              muted="muted"
              loop="loop"
              poster=""
              width="900px"
              preload="auto"
              playsinline="playsinline"
              webkit-playsinline="true"
              autostart="0"
              src="https://files.wondercv.com/%E9%A6%96%E9%A1%B5%E8%A7%86%E9%A2%91_v3.ogg"
            ></video>
          </TweenOne>
        </OverPack>
      </div>
    </div>
  );
}

export default Teachvideo;
