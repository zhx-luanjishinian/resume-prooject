import React from 'react';
import './index.less';

const SkillInfo = (props) => {
  const { skillData } = props;
  return (
    <div className="skill">
      {skillData.map((item, index) => {
        return (
          <div className="skill-item" key={index.toString()}>
            {item}
          </div>
        );
      })}
    </div>
  );
};
export default SkillInfo;
