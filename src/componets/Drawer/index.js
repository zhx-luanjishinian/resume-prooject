import { Drawer, Tooltip } from 'antd';
import classnames from 'classnames';
import { useState } from 'react';
import Tips from './components/Tips';
import Diagnose from './components/Diagnose';
import Case from './components/Case';

import './index.less';
const drawerStyle = {
  borderRadius: 10,
  paddingTop: 10,
  background: '#fff',
  boxboxShadow: '0 0 30px 0 rgb(0 9 85 / 8%)',
};
const CVDrawer = (props) => {
  console.log(props.visible);
  const [tab, setTab] = useState(0);

  return (
    <Drawer
      title={
        <div
          onClick={() => {
            props.onClose();
          }}
        >
          <svg className="circle" xmlns="http://www.w3.org/2000/svg">
            <g>
              <ellipse
                className="background"
                ry="15"
                rx="15"
                cy="31.25"
                cx="31.25"
                strokeWidth="2"
              />
              <ellipse
                className="foreground"
                ry="15"
                rx="15"
                cy="31.25"
                cx="31.25"
                strokeWidth="2"
              />
              <line className="line line1" x1="23" y1="27" x2="40" y2="35" />
              <line className="line line2" x1="23" y1="27" x2="40" y2="35" />
            </g>
          </svg>
        </div>
      }
      width={320}
      //       style={{ paddingTop: 10 }}
      placement="right"
      drawerStyle={drawerStyle}
      closable={false}
      mask={false}
      visible={props.visible}
      getContainer={() => document.getElementById('www')}
      style={{ position: 'absolute' }}
    >
      <div className="panel_header">
        {props.menuRightList.map((item, index) => {
          return (
            <Tooltip placement="topLeft" title={item.title} arrowPointAtCenter key={item.title}>
              <a
                onClick={() => {
                  setTab(index);
                }}
                className={classnames(
                  'icon',
                  {
                    tips: item.title === '贴士',
                    diagnose: item.title === '诊断',
                    case: item.title === '案例',
                  },
                  { current: tab === index },
                )}
              ></a>
            </Tooltip>
          );
        })}
      </div>
      <div className="panel-content">
        {tab === 0 && <Tips />}
        {tab === 1 && <Diagnose />}
        {tab === 2 && <Case />}
      </div>
    </Drawer>
  );
};
export default CVDrawer;
