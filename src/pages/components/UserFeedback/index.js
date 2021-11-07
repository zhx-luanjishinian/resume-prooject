import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender, userInfo } from '../../common/data';
import { Avatar, Image } from 'antd';
import './index.less';
import BannerAnim, { Element } from 'rc-banner-anim';
import 'rc-banner-anim/assets/index.css';
const BgElement = Element.BgElement;

function UserFeedback() {
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
        children: '听一听，用户们的反馈',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content userfeedback-title-content',
        children: '他们都推荐使用优加简历模板',
      },
    ],
  };

  return (
    <div className="user-feekback-wrapper userfeedback-wrapper">
      <div className="user-feekback userfeedback">
        <div key="title" className="title-wrapper">
          {titleWrapper.children.map(getChildrenToRender)}
        </div>
        <OverPack playScale={0.3} className="">
          <TweenOne
            key="video"
            animation={{ ...animation, delay: 300 }}
            className="userfeedback-video"
          >
            <BannerAnim prefixCls="banner-user" autoPlay autoPlaySpeed={2000}>
              {userInfo.map((item) => {
                return (
                  <Element
                    prefixCls="banner-user-elem"
                    key={item.id}
                    followParallax={{
                      delay: 1000,
                      data: [
                        { id: 'bg', value: 20, bgPosition: '50%', type: ['backgroundPositionX'] },
                        { id: 'content', value: 50, type: 'x' },
                        { id: 'name', value: 63, type: 'x' },
                        { id: 'desc', value: 60, type: 'x' },
                        { id: 'avatar', value: 56, type: 'x' },
                      ],
                    }}
                  >
                    <BgElement
                      key="bg"
                      className="bg"
                      style={{
                        background: '#fff',
                      }}
                    />
                    <div className="banner-content">
                      <div className="banner-content-top">
                        <Avatar
                          id="avatar"
                          style={{ marginRight: 16 }}
                          size={56}
                          src={<Image src={item.url} style={{ width: 56 }} />}
                        />
                        <div className="info">
                          <span id="name" className="info-name">
                            {item.name}
                          </span>
                          <span id="desc" className="info-desc">
                            {item.desc}
                          </span>
                        </div>
                      </div>
                      <div className="banner-content-bottom">
                        <TweenOne
                          id="content"
                          className="banner-user-text"
                          animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                        >
                          {item.content}
                        </TweenOne>
                      </div>
                    </div>
                  </Element>
                );
              })}
            </BannerAnim>
          </TweenOne>
        </OverPack>
      </div>
    </div>
  );
}

export default UserFeedback;

// import BannerAnim, { Element } from 'rc-banner-anim';
// import TweenOne from 'rc-tween-one';
// import React from 'react';
// import 'rc-banner-anim/assets/index.css';
// import './index.less';
// const BgElement = Element.BgElement;
// class UserFeedback extends React.Component {
//   render() {
//     return (
//       <div className="user-feedback">
//         <BannerAnim prefixCls="banner-user" autoPlay>
//           <Element prefixCls="banner-user-elem" key="0">
//             <BgElement
//               key="bg"
//               className="bg"
//               style={{
//                 background: '#364D79',
//               }}
//             />
//             <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
//               Ant Motion Banner
//             </TweenOne>
//             <TweenOne
//               className="banner-user-text"
//               animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
//             >
//               The Fast Way Use Animation In React
//             </TweenOne>
//           </Element>
//           <Element prefixCls="banner-user-elem" key="1">
//             <BgElement
//               key="bg"
//               className="bg"
//               style={{
//                 background: '#64CBCC',
//               }}
//             />
//             <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
//               Ant Motion Banner
//             </TweenOne>
//             <TweenOne
//               className="banner-user-text"
//               animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
//             >
//               The Fast Way Use Animation In React
//             </TweenOne>
//           </Element>
//         </BannerAnim>
//       </div>
//     );
//   }
// }
// export default UserFeedback;
