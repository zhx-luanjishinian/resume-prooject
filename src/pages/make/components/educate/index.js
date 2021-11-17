import React, { useState, useEffect } from 'react';
import Divide from '../../common/divide';
import Title from '../../common/title';
import EducationInfo from '../../common/educationInfo';
import './index.less';
import { cloneDeep } from 'lodash';

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
const Educate = () => {
  const [educateData, seta] = useState(cloneDeep(educateData1));

  return (
    <div
      onClick={() => {
        educateData1.push(educateData1[0]);
        seta(cloneDeep(educateData1));
      }}
      className="educate"
    >
      <Title title="教育背景" />
      <EducationInfo educateData={educateData} />
      <Divide />
    </div>
  );
};
export default Educate;