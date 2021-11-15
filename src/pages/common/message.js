import { message } from 'antd';

export default {
  error(errMsg, operation) {
    const msg = errMsg ? `： ${errMsg}` : '';
    message.error(operation ? operation + msg : errMsg);
  },
  success: message.success,
  info: message.info,
};
