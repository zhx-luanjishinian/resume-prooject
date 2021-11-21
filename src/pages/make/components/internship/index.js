import React, { useState, useEffect } from 'react';
import Divide from '../../common/divide';
import Title from '../../common/title';
import { Tooltip } from 'antd';
import Hover from '../../common/hover';
import InternshipInfo from '../../common/internshipinfo';
import '../../common/common.less';
import { cloneDeep } from 'lodash';
const Internship = (props) => {
  const { internshipInitiData, setInternshipVisible } = props;
  const [internshiptData, setInternshipData] = useState(cloneDeep(internshipInitiData));

  return (
    <div className="hover-box">
      <Hover
        Data={internshiptData}
        addData={internshipInitiData[0]}
        UseFunction={setInternshipData}
        setVisible={setInternshipVisible}
        target={'internship'}
      />
      <Title title="实习经历" />
      <InternshipInfo internshiptData={internshiptData} />
      <Divide />
    </div>
  );
  return;
};
export default Internship;
