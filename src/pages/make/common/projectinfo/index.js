import React from 'react';
import { Row, Col } from 'antd';
import './index.less';

const ProjectInfo = (props) => {
  const { projectData } = props;

  return (
    <div className="project">
      {projectData.map((ele, index) => {
        return (
          <div key={index}>
            <div className="project-baseinfo">
              <Row>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 0 }}>
                  <p>{ele.time}</p>
                </Col>
                <Col xs={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }}>
                  <p>{ele.name}</p>
                </Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 1 }}>
                  <p>{ele.role}</p>
                </Col>
              </Row>
            </div>
            <div className="project-content">
              <span>主要内容：</span>
              {ele.content?.map((item, index) => {
                return (
                  <div className="project-content-item" key={index.toString()}>
                    ● {item}
                  </div>
                );
              })}
            </div>
            {!!ele.achievement?.length && (
              <div className="project-achievement">
                <span>项目成果：</span>
                <Row>
                  {ele.achievement.map((item, index) => {
                    return (
                      <Col xs={{ span: 12, offset: 1 }} lg={{ span: 12, offset: 0 }}>
                        <div className="project-achievement-item">● {item}</div>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default ProjectInfo;
