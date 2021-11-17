import React from 'react';
import Info from './components/info';
import Skill from './components/skill';
import Educate from './components/educate';
import Project from './components/project';
import Internship from './components/internship';
import Honor from './components/honor';
import Evalution from './components/evalution';
import Marquee from 'react-fast-marquee';
import { Alert } from 'antd';

import './index.less';
const Make = () => {
  return (
    <>
      <Alert
        closable
        style={{ marginBottom: 10 }}
        banner={true}
        message={
          <Marquee pauseOnHover gradient={false}>
            温馨提示：测试版本，平台只用用作测试功能，不会对你的信息进行保存，刷新页面会导致信息丢失。
          </Marquee>
        }
      />
      <div className="CV">
        <Info />
        <Educate />
        <Skill />
        <Project />

        <Internship />

        <Honor />

        <Evalution />
      </div>
    </>
  );
};
export default Make;
