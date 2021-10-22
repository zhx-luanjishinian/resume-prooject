import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col } from 'antd';
import { page1 } from '../../common/data';
import './index.less';

const Page1 = () => {
  const children = page1.map((d, i) => (
    <QueueAnim
      component={Col}
      key={d.title}
      type="bottom"
      className="col"
      componentProps={{ span: 8 }}
    >
      <div key="image" className="image" style={{ backgroundImage: `url(${d.src})` }} />
      <h3 key="h3">{d.title}</h3>
      <p key="p">{d.content}</p>
    </QueueAnim>
  ));
  return (
    <div className="home-layout-wrapper home-func-wrapper" id="home-func">
      <h2>功能介绍</h2>
      <i className="line" />

      <OverPack className="home-layout" location="home-func" playScale={0.2}>
        <QueueAnim
          className="home-func"
          type="bottom"
          key="home-func"
          ease="easeOutQuart"
          leaveReverse
        >
          <QueueAnim component={Row} componentProps={{ gutter: 171 }}>
            {children}
          </QueueAnim>
        </QueueAnim>
      </OverPack>
    </div>
  );
};
export default Page1;
