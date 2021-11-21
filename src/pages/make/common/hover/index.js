import React, { useState, useEffect } from 'react';
import { Row, Col, message } from 'antd';
import { add, delet } from '../common';
import { cloneDeep } from 'lodash';
import './index.less';
const Hover = (props) => {
  const [maxlength, setMaxlength] = useState(3);
  const [minlength, setMinlength] = useState(1);
  // const [maxlength,setMaxlength]=useState(3)

  const { Data, addData, UseFunction, setVisible, target } = props;
  const hoverAdd = () => {
    const newArr = add(Data, addData);
    UseFunction(cloneDeep(newArr));
    newArr.length === maxlength && message.warning(`此项内容最多可添加${maxlength}`);
  };
  const hoverDelete = () => {
    const newArr = delet(Data);

    UseFunction(cloneDeep(newArr));
    newArr.length === minlength && message.warning('至少保留1项');
  };
  const hoverDidden = () => {
    setVisible(false);
  };
  useEffect(() => {
    switch (target) {
      case 'educate':
        return;
      case 'skill':
        setMaxlength(10);
        setMinlength(1);
        return;
      case 'project':
        setMaxlength(5);
        setMinlength(1);
        return;
      case 'internship':
        setMaxlength(5);
        setMinlength(1);
        return;
      case 'honor':
        setMaxlength(10);
        setMinlength(1);
        return;
      case 'evalution':
        setMaxlength(5);
        setMinlength(1);
        return;
      default:
        return;
    }
  }, [maxlength, minlength]);
  return (
    <div className="hover">
      <Row gutter={[16, 24]} justify="center">
        <Col span={6}>
          <div className="hover-move"></div>
        </Col>
        {Data.length < maxlength && (
          <Col span={6}>
            <div className="hover-add" onClick={hoverAdd}></div>
          </Col>
        )}
        {Data.length > minlength && (
          <Col span={6}>
            <div className="hover-delete" onClick={hoverDelete}></div>
          </Col>
        )}
        {!!setVisible && (
          <Col span={6}>
            <div className="hover-hidden" onClick={hoverDidden}></div>
          </Col>
        )}
      </Row>
    </div>
  );
};
export default Hover;
