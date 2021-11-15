import React from 'react';
import { Empty } from 'antd';
const Diagnose = () => {
  return (
    <div>
      <Empty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{
          height: 60,
        }}
        description={<span>抱歉，此功能未开通！</span>}
      ></Empty>
    </div>
  );
};
export default Diagnose;
