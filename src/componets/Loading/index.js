import { Spin } from 'antd';
import React from 'react';
import './index.less';

const LoadingComp = () => (
  <div className="comp-loading-wrapper">
    <Spin tip="页面加载中..." />
  </div>
);

export default LoadingComp;
