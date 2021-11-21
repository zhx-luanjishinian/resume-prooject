import React, { useState, useEffect } from 'react';
import Divide from '../../common/divide';
import Title from '../../common/title';
import { Tooltip } from 'antd';
import Hover from '../../common/hover';
import EducationInfo from '../../common/educationInfo';
import '../../common/common.less';
// import './index.less';
import { cloneDeep } from 'lodash';

const Educate = (props) => {
  const { educateData1, setEducateVisible } = props;
  const [educateData, setEducateData] = useState(cloneDeep(educateData1));

  return (
    <div className="hover-box">
      <Hover
        Data={educateData}
        addData={educateData1[0]}
        UseFunction={setEducateData}
        setVisible={setEducateVisible}
        target={'educate'}
      />
      <Title title="教育背景" />
      <EducationInfo educateData={educateData} />
      <Divide />
    </div>
  );
};
export default Educate;
