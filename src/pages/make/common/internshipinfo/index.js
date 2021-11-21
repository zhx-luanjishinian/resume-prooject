import React from 'react';
import { Row, Col } from 'antd';
import './index.less';

const InternshipInfo = (props) => {
  const { internshiptData } = props;

  return (
    <div className="internship">
      {internshiptData.map((ele, index) => {
        return (
          <div key={ele.tag}>
            <div className="internship-baseinfo">
              <Row>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 0 }}>
                  <p>{ele.time}</p>
                </Col>
                <Col xs={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }}>
                  <p>{ele.title}</p>
                </Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 1 }}>
                  <p>{ele.tag}</p>
                </Col>
              </Row>
            </div>
            <div className="internship-content">
              <span>工作内容：</span>
              {ele.content?.map((item, index) => {
                return (
                  <div className="internship-content-item" key={index.toString()}>
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default InternshipInfo;
