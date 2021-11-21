import React, { useState, useEffect } from 'react';
import Divide from '../../common/divide';
import Title from '../../common/title';
import Hover from '../../common/hover';
import EvalutionInfo from '../../common/evalutioninfo';
import '../../common/common.less';
import { cloneDeep } from 'lodash';

const Evalution = (props) => {
  const { evalutionInitiData, setEvalutionVisible } = props;
  const [evalutionData, setEvalutionData] = useState(cloneDeep(evalutionInitiData));

  return (
    <div className="hover-box">
      <Hover
        Data={evalutionData}
        addData={evalutionInitiData[0]}
        UseFunction={setEvalutionData}
        setVisible={setEvalutionVisible}
        target={'evalution'}
      />
      <Title title="个人荣誉" />
      <EvalutionInfo evalutionData={evalutionData} />
      <Divide />
    </div>
  );
};
export default Evalution;
