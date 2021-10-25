import React, { useState } from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { Carousel as AntCarousel, Row, Col, Avatar, Image } from 'antd';
import 'antd/dist/antd.css';
import TweenOne from 'rc-tween-one';
import Children from 'rc-tween-one/lib/plugin/ChildrenPlugin';
import './index.less';
TweenOne.plugins.push(Children);
const Process = () => {
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
        title: '1.专业模版',
        desc: '由人力资源专家设计并推荐',
        url: 'https://6d78-mxm1923893223-ulteh-1302287111.tcb.qcloud.la/resume/%E6%B6%88%E6%81%AF.png?sign=5d0a7900ef5893bbdd634a11ae01936d&t=1635179949',
        children: [
          {
            md: 8,
            xs: 24,
            className: 'Process-number-wrapper',
            name: 'child0',
            number: {
              className: 'Process-number',
              unit: { className: 'Process-unit', children: '人' },
              toText: true,
              children: '1116',
            },
            children: { className: 'Process-text', children: '累计使用人数' },
          },
          {
            md: 8,
            xs: 24,
            className: 'Process-number-wrapper',
            name: 'child1',
            number: {
              className: 'Process-number',
              unit: { className: 'Process-unit', children: '万' },
              toText: true,
              children: '1.2',
            },
            children: { className: 'Process-text', children: '累计访问量' },
          },
          {
            md: 8,
            xs: 24,
            className: 'Process-number-wrapper',
            name: 'child2',
            number: {
              className: 'Process-number',
              unit: { className: 'Process-unit', children: '次' },
              toText: true,
              children: '210',
            },
            children: { className: 'Process-text', children: '日活跃量' },
          },
        ],
      },
      {
        title: '2.简历修改',
        desc: '一对一简历修改',
        url: 'https://6d78-mxm1923893223-ulteh-1302287111.tcb.qcloud.la/resume/%E7%82%B9%E8%AF%84.png?sign=afd4a39e78224f19e301d36004d2e1d6&t=1635180017',
        children: [
          {
            md: 8,
            xs: 24,
            name: 'child0',
            className: 'Process-number-wrapper',
            number: {
              className: 'Process-number',
              unit: { className: 'Process-unit', children: '人' },
              toText: true,
              children: '116',
            },
            children: { className: 'Process-text', children: '简历修改人员' },
          },
          {
            md: 8,
            xs: 24,
            name: 'child1',
            className: 'Process-number-wrapper',
            number: {
              className: 'Process-number',
              unit: { className: 'Process-unit', children: '人' },
              toText: true,
              children: '9123',
            },
            children: { className: 'Process-text', children: '模拟面试老师' },
          },
          {
            md: 8,
            xs: 24,
            name: 'child2',
            className: 'Process-number-wrapper',
            number: {
              className: 'Process-number',
              unit: { className: 'Process-unit', children: '万' },
              toText: true,
              children: '1.1',
            },
            children: { className: 'Process-text', children: '内推成功人数' },
          },
        ],
      },
      {
        title: '3.模拟面试',
        desc: '在职HR专业模拟面试',
        url: 'https://6d78-mxm1923893223-ulteh-1302287111.tcb.qcloud.la/resume/%E9%93%B6%E8%A1%8C%E5%8D%A1%20(1).png?sign=9fa28ce250403f714c59f0f3087f8b78&t=1635180053',
        children: [
          {
            md: 8,
            xs: 24,
            name: 'child0',
            className: 'Process-number-wrapper',
            number: {
              className: 'Process-number',
              unit: { className: 'Process-unit', children: '人' },
              toText: true,
              children: '116',
            },
            children: { className: 'Process-text', children: '简历修改人员' },
          },
          {
            md: 8,
            xs: 24,
            name: 'child1',
            className: 'Process-number-wrapper',
            number: {
              className: 'Process-number',
              unit: { className: 'Process-unit', children: '人' },
              toText: true,
              children: '9123',
            },
            children: { className: 'Process-text', children: '模拟面试老师' },
          },
          {
            md: 8,
            xs: 24,
            name: 'child2',
            className: 'Process-number-wrapper',
            number: {
              className: 'Process-number',
              unit: { className: 'Process-unit', children: '万' },
              toText: true,
              children: '1.1',
            },
            children: { className: 'Process-text', children: '内推成功人数' },
          },
        ],
      },
      {
        title: '4.内推直达',
        desc: '简历内推，高通过率',
        url: 'https://6d78-mxm1923893223-ulteh-1302287111.tcb.qcloud.la/resume/%E5%85%AC%E5%8F%B8.png?sign=3a34ab1434636ec020fe9af78673c50e&t=1635180074',
        children: [
          {
            md: 8,
            xs: 24,
            name: 'child0',
            className: 'Process-number-wrapper',
            number: {
              className: 'Process-number',
              unit: { className: 'Process-unit', children: '人' },
              toText: true,
              children: '116',
            },
            children: { className: 'Process-text', children: '简历修改人员' },
          },
          {
            md: 8,
            xs: 24,
            name: 'child1',
            className: 'Process-number-wrapper',
            number: {
              className: 'Process-number',
              unit: { className: 'Process-unit', children: '人' },
              toText: true,
              children: '9123',
            },
            children: { className: 'Process-text', children: '模拟面试老师' },
          },
          {
            md: 8,
            xs: 24,
            name: 'child2',
            className: 'Process-number-wrapper',
            number: {
              className: 'Process-number',
              unit: { className: 'Process-unit', children: '万' },
              toText: true,
              children: '1.1',
            },
            children: { className: 'Process-text', children: '内推成功人数' },
          },
        ],
      },
    ];

    const Carousel = {
      className: 'Process-content',
      dots: false,
    };
    const { ...carouselProps } = Carousel;
    const titleToRender = [];

    const childrenToRender = childWrapper.map((item, index) => {
      titleToRender.push(
        <>
          <div
            key={index.toString()}
            onClick={(e) => {
              onTitleClick(e, index);
            }}
            className={index === current ? `Process-title-text active` : 'Process-title-text'}
          >
            <Avatar
              style={{ paddingTop: 3 }}
              src={<Image src={item.url} style={{ width: 20, marginRight: 5, marginTop: 1 }} />}
            >
              U
            </Avatar>
            {item.title}
            <div className={index === current ? `Process-title-desc active` : 'Process-title-desc'}>
              {item.desc}
            </div>
          </div>
          {index < 3 && (
            <image
              src="https://6d78-mxm1923893223-ulteh-1302287111.tcb.qcloud.la/resume/%E7%AE%AD%E5%A4%B4.png?sign=f408ff00788b04ecbe631ef456521cd3&t=1635179861"
              className="image"
            />
          )}
        </>,
      );
      const childrenItem = item.children.map(($item, i) => {
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
          <QueueAnim type="bottom" component={Row} className="Process-item">
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
        className="Process-content-wrapper"
        ref={carouselRef}
      >
        <div className="Process-title-wrapper" key="title">
          <div className="Process-title">
            {titleToRender}
            <div
              className="Process-title-bar-wrapper"
              style={{
                width: `${width}%`,
                left: `${width * current}%`,
              }}
            >
              <em className="Process-title-bar" />
            </div>
          </div>
        </div>

        <AntCarousel
          className="Process-content"
          dots={false}
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
    <div className="home-page-wrapper Process-wrapper">
      <div>
        <OverPack className="home-page Process" playScale={0.3}>
          {getChildrenToRender()}
          <div className="Process-show"></div>
        </OverPack>
      </div>
    </div>
  );
};
export default Process;
