import React from 'react';
import { Row, Col, Image } from 'antd';
import Divide from '../../common/divide';
import ImageInfo from '../../common/imageInfo';
import './index.less';
const item = {
  place: '宁夏 中卫',
  birthData: '19990203',
  status: '群众',
  tel: '17371442505',
  email: '553341082@qq.com',
};
const Info = () => {
  return (
    <div className="info">
      <Row>
        <Col xs={{ span: 1, offset: 1 }} lg={{ span: 11, offset: 0 }}>
          <div>
            <Image
              preview={false}
              width={267}
              src="https://6d78-mxm1923893223-ulteh-1302287111.tcb.qcloud.la/resume/%E5%8D%8E%E4%B8%AD%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6logo.png?sign=3abe5370a43495461f79aa7b24757a95&t=1636794093"
            />
            <div className="info-shcool-name">Huazhong University of Science and Technology</div>
            <div className="info-name">薛定谔</div>
          </div>
        </Col>
        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 7, offset: 0.8 }}>
          <div className="info-base">
            <p>籍贯：{item.place}</p>
            <p>出生年月：{item.birthData}</p>
            <p>政治面貌：{item.status}</p>
            <p>联系电话：{item.tel}</p>
            <p>电子邮箱：{item.email}</p>
          </div>
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 0 }}>
          <ImageInfo />
        </Col>
      </Row>
      <Divide />
    </div>
  );
};
export default Info;
