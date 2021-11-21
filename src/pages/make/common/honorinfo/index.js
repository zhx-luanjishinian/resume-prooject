import React from 'react';
import { Row, Col } from 'antd';
import './index.less';

const HonorInfo = (props) => {
  const { honorData } = props;

  return (
    <div className="honor">
      <Row>
        {honorData.map((item, index) => {
          return (
            <Col xs={{ span: 12, offset: 1 }} lg={{ span: 12, offset: 0 }}>
              <div className="honor-item">● {item}</div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default HonorInfo;
