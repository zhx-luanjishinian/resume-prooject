import React, { useState } from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { Carousel as AntCarousel, Row, Col } from 'antd';
// import { Feature60DataSource } from '../../common/data';
import 'antd/dist/antd.css';
import TweenOne from 'rc-tween-one';
import Children from 'rc-tween-one/lib/plugin/ChildrenPlugin';
import './index.less';
// const dataSource = { Feature60DataSource };
TweenOne.plugins.push(Children);
const ServiceData = () => {
  const [current, setCurrent] = useState(0);
  console.log(current.current);
  const carouselRef = React.createRef();
  const onTitleClick = (_, i) => {
    const currentCarouselRef = carouselRef.current.childRefs.carousel;
    currentCarouselRef.goTo(i);
  };

  const onBeforeChange = (_, newIndex) => {
    setCurrent(newIndex);
  };

  const getChildrenToRender = () => {
    const childWrapper = [
      {
        title: { className: 'feature6-title-text', children: '服务指标' },
        className: 'feature6-item',
        name: 'block0',
        children: [
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child0',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '人' },
              toText: true,
              children: '1116',
            },
            children: { className: 'feature6-text', children: '累计使用人数' },
          },
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child1',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '万' },
              toText: true,
              children: '1.2',
            },
            children: { className: 'feature6-text', children: '累计访问量' },
          },
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child2',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '次' },
              toText: true,
              children: '210',
            },
            children: { className: 'feature6-text', children: '日活跃量' },
          },
        ],
      },
      {
        title: { className: 'feature6-title-text', children: '资源分布' },
        className: 'feature6-item',
        name: 'block1',
        children: [
          {
            md: 8,
            xs: 24,
            name: 'child0',
            className: 'feature6-number-wrapper',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '人' },
              toText: true,
              children: '116',
            },
            children: { className: 'feature6-text', children: '简历修改人员' },
          },
          {
            md: 8,
            xs: 24,
            name: 'child1',
            className: 'feature6-number-wrapper',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '人' },
              toText: true,
              children: '9123',
            },
            children: { className: 'feature6-text', children: '模拟面试老师' },
          },
          {
            md: 8,
            xs: 24,
            name: 'child2',
            className: 'feature6-number-wrapper',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '万' },
              toText: true,
              children: '1.1',
            },
            children: { className: 'feature6-text', children: '内推成功人数' },
          },
        ],
      },
    ];
    const titleWrapper = {
      className: 'feature6-title-wrapper',
      barWrapper: {
        className: 'feature6-title-bar-wrapper',
        children: { className: 'feature6-title-bar' },
      },
      title: { className: 'feature6-title' },
    };
    const wrapper = { className: 'feature6-content-wrapper' };
    const Carousel = {
      className: 'feature6-content',
      dots: false,
    };
    const { ...carouselProps } = Carousel;
    const { barWrapper, title: titleChild, ...titleWrapperProps } = titleWrapper;
    const titleToRender = [];

    const childrenToRender = childWrapper.map((item, index) => {
      const { title, children, ...itemProps } = item;
      titleToRender.push(
        <div
          {...title}
          key={index.toString()}
          onClick={(e) => {
            onTitleClick(e, index);
          }}
          className={index === current ? `${title.className || ''} active` : title.className}
        >
          {title.children}
        </div>,
      );
      const childrenItem = children.map(($item, i) => {
        const { number, children: child, ...childProps } = $item;
        const numberChild = number.children.replace(/[^0-9.-]/g, '');
        const { unit, toText, ...numberProps } = number;
        return (
          <Col {...childProps} key={i.toString()}>
            <TweenOne
              {...numberProps}
              animation={{
                Children: {
                  value: parseFloat(numberChild),
                  floatLength:
                    parseFloat(numberChild) - Math.floor(parseFloat(numberChild)) > 0 ? 2 : 0,
                  formatMoney: true,
                },
                duration: 1000,
                delay: 300,
                ease: 'easeInOutCirc',
              }}
              component="span"
            >
              0
            </TweenOne>
            {unit && <span {...unit}>{unit.children}</span>}
            <p {...child}>{child.children}</p>
          </Col>
        );
      });
      return (
        <div key={index.toString()}>
          <QueueAnim type="bottom" component={Row} {...itemProps}>
            {childrenItem}
          </QueueAnim>
        </div>
      );
    });

    const width = 100 / childrenToRender.length;
    return (
      <QueueAnim
        key="queue"
        leaveReverse
        type="bottom"
        delay={[0, 100]}
        {...wrapper}
        ref={carouselRef}
      >
        <div {...titleWrapperProps} key="title">
          <div {...titleChild}>
            {titleToRender}
            <div
              className="feature6-title-bar-wrapper"
              style={{
                width: `${width}%`,
                left: `${width * current}%`,
              }}
            >
              <em className="feature6-title-bar" />
            </div>
          </div>
        </div>
        <AntCarousel
          {...carouselProps}
          key="carousel"
          infinite={false}
          beforeChange={onBeforeChange}
        >
          {childrenToRender}
        </AntCarousel>
      </QueueAnim>
    );
  };

  return (
    <div className="home-page-wrapper feature6-wrapper">
      <div>
        <OverPack className="home-page feature6" playScale={0.3}>
          {getChildrenToRender()}
        </OverPack>
      </div>
    </div>
  );
};
export default ServiceData;
