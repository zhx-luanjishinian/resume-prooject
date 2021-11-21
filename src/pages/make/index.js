import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
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
const selfSkill = [
  '熟练DIV+CSS页面布局、重构。熟悉网页开发流程、切图以及HTML 页面代码优化等技术',
  '熟练HTML5+CSS3，熟练掌握javascript语言，熟练使用jQuery、bootstrap等前端框架，熟悉w3c标准',
  '熟练运用浏览器兼容技术，熟悉响应式布局和弹性盒布局，百分比自适应布局',
  '熟悉ECMA标准，熟练掌握DOM、BOM操作，熟悉面向对象JS编程。 熟练AJAX/JSON，熟悉正则表达式、JS面向对象',
  '熟悉 Vue 框架，使用 webpack 搭建 vue-cli 脚手架开发单页面项目，并且打包项目以及MVC&MVVM设计模式与模块化开发流程',
  '熟练使用 git 版本控制器以及熟练使用Sublime、Photoshop、Dreamwaver等相关开发工具，熟练webpack编译工具',
  '掌握PHP编程语言， 熟练使用MySQL数据库，熟练掌握Smarty模版引擎，并有项目开发经验； 熟悉TP、CI框架',
];
const educateData1 = [
  {
    time: '2017.09-2021.06',
    shchool: '优加实习大学',
    college: '计算机技术与科学',
    Professional: '计算机技术与科学',
    mainCourse: [
      'C语言',
      '数据结构',
      '计算机网络',
      'JAVA程序设计',
      'C++程序设计',
      '程序设计',
      '数据结构',
      '计算机网络',
      'JAVA程序设计',
      'C++程序设计',
      '程序设计',
    ],
  },
];
const projectInitiData = [
  {
    time: '2019.03-2020.04',
    name: '城市公交信息管理及仿真系统',
    role: '负责人',
    content: [
      '第一阶段查询统计分析功能:基于 xampp (环境）+HTML+mysql+PHP+JS+百度地图 API 实现武汉公交客流站点、线路、区域的查询显示和时空统计分析同时将结果可视化；',
      '第二阶段仿真功能:基于考虑乘客行为的 JS 仿真算法，实现工作日、节假日、以及不同天气对公交线路、站点的候车客流、断面客流进行仿真并且实现结果二维可视化',
      '第三阶段预测功能:基于历史客流数据统计，使用三次指数平滑预测算法，实现未来某一天指定线路、站点上下车客流的预测。',
    ],
    achievement: ['2020年全国大学生创新创业大赛一等将', '2021年北京互联网➕竞赛金牌'],
  },
  {
    time: '2019.03-2020.04',
    name: '城市公交信息管理及仿真系统',
    role: '负责人',
    content: [
      '第一阶段查询统计分析功能:基于 xampp (环境）+HTML+mysql+PHP+JS+百度地图 API 实现武汉公交客流站点、线路、区域的查询显示和时空统计分析同时将结果可视化；',
      '第二阶段仿真功能:基于考虑乘客行为的 JS 仿真算法，实现工作日、节假日、以及不同天气对公交线路、站点的候车客流、断面客流进行仿真并且实现结果二维可视化',
      '第三阶段预测功能:基于历史客流数据统计，使用三次指数平滑预测算法，实现未来某一天指定线路、站点上下车客流的预测。',
    ],
  },
];
const internshipInitiData = [
  {
    time: '2019.01-2020.08',
    title: '优加科技有限公司',
    tag: '财务分析实习生',
    content: [
      '●了解客户融资结算需求，向日系企业客户提供本外币存贷款、票据、外汇、国际结算 、理财产品、跨境资金池、贸易融资等产品和服务。 ',
      '●分析最新经济金融及信贷政策导向、研究外汇市场动向，满足客户综合业务咨询需求 ',
      '●定期学习银行新产品、分析客户需求，对相关客户进行营销；',
      '●协调与各部门之间的工作，沟通能力较强，为客户解决各种问题，得到客户好评；',
      '●定期参加各类培训，熟悉相关的金融政策及规定，保证合规 。',
    ],
  },
  {
    time: '2018.01-2018.03',
    title: '薛定谔D猫科技有限公司',
    tag: '猫猫管家实习生',
    content: [
      '●了解客户融资结算需求，向日系企业客户提供本外币存贷款、票据、外汇、国际结算 、理财产品、跨境资金池、贸易融资等产品和服务。 ',
      '●分析最新经济金融及信贷政策导向、研究外汇市场动向，满足客户综合业务咨询需求 ',
      '●定期学习银行新产品、分析客户需求，对相关客户进行营销；',
      '●协调与各部门之间的工作，沟通能力较强，为客户解决各种问题，得到客户好评；',
      '●定期参加各类培训，熟悉相关的金融政策及规定，保证合规 。',
      '●协调与各部门之间的工作，沟通能力较强，为客户解决各种问题，得到客户好评；',
      '●定期参加各类培训，熟悉相关的金融政策及规定，保证合规 。',
    ],
  },
];
const honorInitiData = [
  '2020 微信小程序应用开发大赛全国一等奖',
  '2020 年全国大学生计算机技能应用大赛特等奖',
  '2022 微信小程序应用开发大赛全国二等奖',
  '2017 年全国大学生计算机技能应用大赛优秀奖',
  '2021 微信小程序应用开发大赛全国三等奖',
  '2018 年全国大学生计算机技能应用大赛三奖',
];
const evalutionInitiData = [
  { title: '兴趣爱好', content: '吉他，阅读，编程、羽毛球、游泳、吉他' },
  { title: '自我评价', content: '善于合作，勤奋热情，认真负责，动手和学习能力强，能吃苦，有恒心' },
];
const Make = () => {
  const [educateVisible, setEducateVisible] = useState(true);
  const [skillVisible, setSkillVisible] = useState(true);
  const [projectVisible, setProjectVisible] = useState(true);
  const [internshipVisible, setInternshipVisible] = useState(true);
  const [honorVisible, setHonorVisible] = useState(true);
  const [evalutionVisible, setEvalutionVisible] = useState(true);

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
        {educateVisible && (
          <Educate educateData1={educateData1} setEducateVisible={setEducateVisible} />
        )}
        {skillVisible && <Skill selfSkill={selfSkill} setSkillVisible={setSkillVisible} />}
        {projectVisible && (
          <Project projectInitiData={projectInitiData} setProjectVisible={setProjectVisible} />
        )}
        {internshipVisible && (
          <Internship
            setInternshipVisible={setInternshipVisible}
            internshipInitiData={internshipInitiData}
          />
        )}
        {honorVisible && (
          <Honor setHonorVisible={setHonorVisible} honorInitiData={honorInitiData} />
        )}
        {evalutionVisible && (
          <Evalution
            setEvalutionVisible={setEvalutionVisible}
            evalutionInitiData={evalutionInitiData}
          />
        )}
      </div>
    </>
  );
};
export default withRouter(Make);
