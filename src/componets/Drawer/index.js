import { Drawer, Button, Space } from 'antd';
import './index.less';

const CVDrawer = (props) => {
  console.log(props.visible);

  return (
    <Drawer
      title={props.data.title}
      placement="right"
      onClose={props.onClose}
      mask={false}
      visible={props.visible}
      getContainer={() => document.getElementById('www')}
      style={{ position: 'absolute' }}
      extra={
        <Space>
          <Button onClick={props.onClose}>Cancel</Button>
          <Button onClick={props.onClose} type="primary">
            Submit
          </Button>
        </Space>
      }
    >
      <p>Some contents...</p>
    </Drawer>
  );
};
export default CVDrawer;
