import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './index.less';
import { getChildrenToRender, isImg } from '../../common/data';
class Footer extends React.Component {
  static defaultProps = {
    className: 'footer1',
  };

  getLiChildren = (data) =>
    data.map((item, i) => {
      const { title, childWrapper, ...itemProps } = item;
      return (
        <Col key={i.toString()} {...itemProps} title={null} content={null}>
          <h2 {...title}>
            {typeof title.children === 'string' && title.children.match(isImg) ? (
              <img src={title.children} width="100%" alt="img" />
            ) : (
              title.children
            )}
          </h2>
          <div {...childWrapper}>{childWrapper.children.map(getChildrenToRender)}</div>
        </Col>
      );
    });

  render() {
    const block = {
      className: 'footer',
      gutter: 0,
      children: [
        {
          name: 'block0',
          xs: 24,
          md: 6,
          className: 'block',
          title: {
            className: 'logo',
            children: 'https://zos.alipayobjects.com/rmsportal/qqaimmXZVSwAhpL.svg',
          },
          childWrapper: {
            className: 'slogan',
            children: [
              {
                name: 'content0',
                children: 'Animation specification and components of Ant Design.',
              },
            ],
          },
        },
        {
          name: 'block1',
          xs: 24,
          md: 6,
          className: 'block',
          title: { children: '产品' },
          childWrapper: {
            children: [
              { name: 'link0', href: '#', children: '优加实习' },
              { name: 'link1', href: '#', children: '优加小程序' },
              { name: 'link2', href: '#', children: '优加博客' },
              { name: 'link3', href: '#', children: '优加刷题' },
            ],
          },
        },
        {
          name: 'block2',
          xs: 24,
          md: 6,
          className: 'block',
          title: { children: '关于' },
          childWrapper: {
            children: [
              { href: '#', name: 'link0', children: 'FAQ' },
              { href: '#', name: 'link1', children: '联系我们' },
            ],
          },
        },
        {
          name: 'block3',
          xs: 24,
          md: 6,
          className: 'block',
          title: { children: '资源' },
          childWrapper: {
            children: [
              { href: '#', name: 'link0', children: 'Ant Design' },
              { href: '#', name: 'link1', children: 'Ant Motion' },
            ],
          },
        },
      ],
    };
    const copyright = {
      className: 'copyright',
      children: (
        <span>
          ©2018 by <a href="https://motion.ant.design">Ant Motion</a> All Rights Reserved
        </span>
      ),
    };
    const childrenToRender = this.getLiChildren(block.children);
    return (
      <div className="footer-wrapper footer1-wrapper">
        <OverPack className="footer1" playScale={0.2}>
          <QueueAnim
            type="bottom"
            key="ul"
            leaveReverse
            component={Row}
            componentProps={{ gutter: 0 }}
            className="footer"
          >
            {childrenToRender}
          </QueueAnim>
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            key="copyright"
            className="copyright-wrapper"
          >
            <div className="footer">
              <div className="copyright">{copyright.children}</div>
            </div>
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}

export default Footer;
