import React from 'react';
import './index.less';

const EducationInfo = (props) => {
  const { evalutionData } = props;
  return (
    <div className="education">
      {evalutionData.map((item, index) => {
        return (
          <div className="education-item" key={index.toString()}>
            <span>{item.title}: </span>
            {item.content}
          </div>
        );
      })}
    </div>
  );
};
export default EducationInfo;
