import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QRCode from 'qrcode.react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { page2 } from '../../common/data';
import './index.less';

export default function Product() {
  const children = page2.map((d, i) => {
    if (i > 2) {
      return null;
    }
    return (
      <Col key={i} className="col" span={8}>
        <div className="content-wrapper home-hover">
          <div className="image" style={{ backgroundImage: `url(${d.image})` }} />
          <div className="code-wrapper">
            <h4>扫码预览</h4>
            <QRCode value={d.url} size={160} />
          </div>
        </div>
      </Col>
    );
  });
  return (
    <div className="home-layout-wrapper home-case-wrapper">
      <OverPack className="home-layout" playScale={0.4}>
        <QueueAnim
          className="home-case"
          type="bottom"
          key="home-case"
          ease="easeOutQuart"
          leaveReverse
        >
          <h2 key="h2">优加免费福利产品</h2>
          <i key="i" className="line" />
          <QueueAnim
            key="content"
            component={Row}
            type="bottom"
            className="ss"
            style={{ display: 'flex', flexDirection: Row, marginLeft: 0 }}
            componentProps={{ gutter: 171 }}
          >
            {children}
          </QueueAnim>
        </QueueAnim>
      </OverPack>
    </div>
  );
}
