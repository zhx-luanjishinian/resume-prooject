import PropTypes from 'prop-types';
import React from 'react';
import { ReactDOM } from 'react';
import { InputNumber, Button, Checkbox } from 'antd';
import TweenOne from 'rc-tween-one';
import Children from 'rc-tween-one/lib/plugin/ChildrenPlugin';
import './index.less';

TweenOne.plugins.push(Children);

class DataAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.data,
      animation: null,
      formatMoney: false,
    };
  }

  onChangeMoney = (e) => {
    this.setState({
      formatMoney: e.target.checked,
    });
  };
  componentDidMount() {
    // 初始显示列表
    const { value, formatMoney } = this.state;
    this.setState({
      animation: {
        Children: {
          value: typeof value === 'number' ? value : this.props.data,
          floatLength: 0,
          formatMoney,
        },
        duration: 3000,
        delay: 1000,
      },
    });
  }
  componentDidUpdate() {
    // 更新显示列表
    window.scrollTo(0, document.body.scrollHeight);
  }

  onChange = (value) => {
    console.log(value);
    this.setState({
      value,
    });
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          height: '100%',
          minHeight: '0px',
          alignItems: 'center',
          textAlign: 'center',
          float: 'right',
        }}
      >
        <div style={{ width: '100%' }}>
          <TweenOne className="W" animation={this.state.animation}></TweenOne>
        </div>
      </div>
    );
  }
}
DataAnimation.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  paused: PropTypes.bool,
};
export default DataAnimation;
