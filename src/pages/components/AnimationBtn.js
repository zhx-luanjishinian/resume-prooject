import React from 'react';

const AnimationBtn = (props) => {
  const { className = '', onClick, text } = props;
  return (
    <div className={`${className} animation-button`} data-text={text} onClick={onClick}>
      {text.split('').map((el, index) => (
        <span key={el} style={{ transitionDelay: `${0.045 * index}s` }}>
          {el}
        </span>
      ))}
    </div>
  );
};
export default AnimationBtn;
