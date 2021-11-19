import React, { useState } from 'react';
import '../../common/common.less';
import Hover from '../../common/hover';
import Divide from '../../common/divide';
import Title from '../../common/title';
import { cloneDeep } from 'lodash';
import SkillInfo from '../../common/skillinfo';
const selfSkill = [
  '熟练DIV+CSS页面布局、重构。熟悉网页开发流程、切图以及HTML 页面代码优化等技术',
  '熟练HTML5+CSS3，熟练掌握javascript语言，熟练使用jQuery、bootstrap等前端框架，熟悉w3c标准',
  '熟练运用浏览器兼容技术，熟悉响应式布局和弹性盒布局，百分比自适应布局',
  '熟悉ECMA标准，熟练掌握DOM、BOM操作，熟悉面向对象JS编程。 熟练AJAX/JSON，熟悉正则表达式、JS面向对象',
  '熟悉 Vue 框架，使用 webpack 搭建 vue-cli 脚手架开发单页面项目，并且打包项目以及MVC&MVVM设计模式与模块化开发流程',
  '熟练使用 git 版本控制器以及熟练使用Sublime、Photoshop、Dreamwaver等相关开发工具，熟练webpack编译工具',
  '掌握PHP编程语言， 熟练使用MySQL数据库，熟练掌握Smarty模版引擎，并有项目开发经验； 熟悉TP、CI框架',
];
const Skill = () => {
  const [skillData, setSkillData] = useState(cloneDeep(selfSkill));

  return (
    <div className="hover-box">
      <Hover Data={skillData} addData={selfSkill[0]} UseFunction={setSkillData} />
      <Title title="专业技能" />
      <SkillInfo skillData={skillData} />
      <Divide />
    </div>
  );
};
export default Skill;
