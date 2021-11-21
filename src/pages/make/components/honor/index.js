import React, { useState, useEffect } from 'react';
import Divide from '../../common/divide';
import Title from '../../common/title';
import { Tooltip } from 'antd';
import Hover from '../../common/hover';
import HonorInfo from '../../common/honorinfo';
import '../../common/common.less';
import { cloneDeep } from 'lodash';

const Honor = (props) => {
  const { honorInitiData, setHonorVisible } = props;
  const [honorData, setHonorData] = useState(cloneDeep(honorInitiData));

  return (
    <div className="hover-box">
      <Hover
        Data={honorData}
        addData={honorInitiData[0]}
        UseFunction={setHonorData}
        setVisible={setHonorVisible}
        target={'honor'}
      />
      <Title title="个人荣誉" />
      <HonorInfo honorData={honorData} />
      <Divide />
    </div>
  );
};
export default Honor;
