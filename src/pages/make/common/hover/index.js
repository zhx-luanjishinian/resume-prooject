import React from 'react';
import { Row, Col } from 'antd';
import { add, delet } from '../common';
import { cloneDeep } from 'lodash';
import './index.less';
const Hover = (props) => {
  const { Data, addData, UseFunction } = props;
  const hoverAdd = () => {
    const newArr = add(Data, addData);
    UseFunction(cloneDeep(newArr));
  };
  const hoverDelete = () => {
    const newArr = delet(Data);
    UseFunction(cloneDeep(newArr));
  };
  return (
    <div className="hover">
      <Row gutter={[16, 24]} justify="center">
        <Col span={6}>
          <div className="hover-move"></div>
        </Col>
        <Col span={6}>
          <div className="hover-add" onClick={hoverAdd}></div>
        </Col>
        <Col span={6}>
          <div className="hover-delete" onClick={hoverDelete}></div>
        </Col>
        <Col span={6}>
          <div className="hover-hidden"></div>
        </Col>
      </Row>
    </div>
  );
};
export default Hover;
