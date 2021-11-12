import React from 'react';
const DescItem = (props) => {
  const data = props.data;
  console.log(props);
  return (
    <>
      {data.map((item) => {
        return (
          <div key={item.title}>
            <b style={{ color: '#5d6876' }}>{item.title}</b>
            <p>{item.desc}</p>
          </div>
        );
      })}
    </>
  );
};
export default DescItem;
