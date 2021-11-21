import React, { useState, useEffect } from 'react';
import Divide from '../../common/divide';
import Title from '../../common/title';
import { Tooltip } from 'antd';
import Hover from '../../common/hover';
import ProjectInfo from '../../common/projectinfo';
import '../../common/common.less';
import { cloneDeep } from 'lodash';

const Project = (props) => {
  const { projectInitiData, setProjectVisible } = props;
  const [projectData, setProjectData] = useState(cloneDeep(projectInitiData));

  return (
    <div className="hover-box">
      <Hover
        Data={projectData}
        addData={projectInitiData[0]}
        UseFunction={setProjectData}
        setVisible={setProjectVisible}
        target={'project'}
      />
      <Title title="科研项目" />
      <ProjectInfo projectData={projectData} />
      <Divide />
    </div>
  );
};
export default Project;
