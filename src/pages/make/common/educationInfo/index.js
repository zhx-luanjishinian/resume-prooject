import React from 'react';
import { Row, Col } from 'antd';
import './index.less';

const EducationInfo = (props) => {
  const { educateData } = props;

  return (
    <div className="education">
      {educateData.map((ele, index) => {
        return (
          <div key={index}>
            <div className="education-baseinfo">
              <Row>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 0 }}>
                  <p>{ele.time}</p>
                </Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 1 }}>
                  <p>{ele.shchool}</p>
                </Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 1 }}>
                  <p>{ele.college}</p>
                </Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 1 }}>
                  <p>{ele.Professional}</p>
                </Col>
              </Row>
            </div>
            <div className="education-course">
              <span>主修课程：</span>
              {ele.mainCourse.join('，')}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default EducationInfo;
