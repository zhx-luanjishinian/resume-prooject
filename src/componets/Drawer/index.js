import { Drawer, Button, Space } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import { useState } from 'react';
import Tips from './components/Tips';
import Diagnose from './components/Diagnose';
import Case from './components/Case';

import './index.less';

const CVDrawer = (props) => {
  console.log(props.visible);
  const [tab, setTab] = useState(0);

  return (
    <Drawer
      title={
        <div
          //           style={{ width: 120, height: 120, position: 'relative' }}
          onClick={() => {
            props.onClose();
          }}
        >
          <svg class="circle" xmlns="http://www.w3.org/2000/svg">
            <g>
              <ellipse class="background" ry="30" rx="30" cy="31.25" cx="31.25" stroke-width="2" />
              <ellipse class="foreground" ry="30" rx="30" cy="31.25" cx="31.25" stroke-width="2" />
              <line class="line line1" x1="23" y1="27" x2="40" y2="35" />
              <line class="line line2" x1="23" y1="27" x2="40" y2="35" />
            </g>
          </svg>
        </div>
      }
      width={292}
      placement="right"
      drawerStyle={{ borderRadius: 10 }}
      closable={false}
      mask={false}
      visible={props.visible}
      getContainer={() => document.getElementById('www')}
      style={{ position: 'absolute' }}
    >
      <div className="panel_header">
        {props.menuRightList.map((item, index) => {
          return (
            <a
              key={item.title}
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
