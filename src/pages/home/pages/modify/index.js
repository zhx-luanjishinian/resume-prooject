import { Result, Button } from 'antd';

const Modify = () => {
  return (
    <Result
      title="Your operation has been executed"
      extra={
        <Button type="primary" key="console">
          Go Console
        </Button>
      }
    />
  );
};
export default Modify;
