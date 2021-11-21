import React, { useState } from 'react';
import '../../common/common.less';
import Hover from '../../common/hover';
import Divide from '../../common/divide';
import Title from '../../common/title';
import { cloneDeep } from 'lodash';
import SkillInfo from '../../common/skillinfo';

const Skill = (props) => {
  const { selfSkill, setSkillVisible } = props;
  const [skillData, setSkillData] = useState(cloneDeep(selfSkill));

  return (
    <div className="hover-box">
      <Hover
        Data={skillData}
        addData={selfSkill[0]}
        UseFunction={setSkillData}
        target={'skill'}
        setVisible={setSkillVisible}
      />
      <Title title="专业技能" />
      <SkillInfo skillData={skillData} />
      <Divide />
    </div>
  );
};
export default Skill;
