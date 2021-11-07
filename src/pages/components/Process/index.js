import React, { useState } from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { Carousel as AntCarousel, Row, Col, Avatar, Image } from 'antd';
import 'antd/dist/antd.css';
import TweenOne from 'rc-tween-one';
import Children from 'rc-tween-one/lib/plugin/ChildrenPlugin';
import './index.less';
// import 'imagehover.css/css';
TweenOne.plugins.push(Children);
const Process = () => {
  const [current, setCurrent] = useState(0);
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
            md: 12,
            xs: 24,
            className: 'Process-left-wrapper',
            url: 'https://6d78-mxm1923893223-ulteh-1302287111.tcb.qcloud.la/resume/tab_1.png?sign=2b36702c84c433474b553e3908273115&t=1635590684',
            name: 'child0',
          },
          {
            md: 10,
            xs: 24,
            offset: 1,
            tag: '更实惠',
            title: ['由人力资源专家', '设计并推荐'],
            content: [
              '涵盖 15+ 大行业，300+ 岗位，5000+ 简历模板，1,600,000+ 字简历范文，满足全方位简历需求。',

              '所有模板均由专业 HR 挑选，确保格式、排版、措辞符合行业规范，简历通过率更有保障。',
            ],
            className: 'Process-right-wrapper',
          },
        ],
      },
      {
        title: '2.简历修改',
        desc: '一对一简历修改',
        url: 'https://6d78-mxm1923893223-ulteh-1302287111.tcb.qcloud.la/resume/%E7%82%B9%E8%AF%84.png?sign=afd4a39e78224f19e301d36004d2e1d6&t=1635180017',
        children: [
          {
            md: 12,
            xs: 24,
            url: 'https://6d78-mxm1923893223-ulteh-1302287111.tcb.qcloud.la/resume/tab_2.png?sign=22845b9d6fd88e86858600e2f9759c8a&t=1635593307',
            className: 'Process-left-wrapper',
          },
          {
            md: 10,
            xs: 24,
            offset: 1,
            tag: '更划算',
            title: ['AI 算法匹配简历和职位', '大幅提高求职效率'],
            content: [
              '根据多维度评估简历综合竞争力，并且提供精准优化建议，帮你清晰定位，扬长补短。',

              '智能纠错 20 大简历常见问题，从 HR 角度审查简历常见错误，预先发现问题，避免踩坑。',
            ],
            name: 'child1',
            className: 'Process-right-wrapper',
          },
        ],
      },
      {
        title: '3.模拟面试',
        desc: '在职HR专业模拟面试',
        url: 'https://6d78-mxm1923893223-ulteh-1302287111.tcb.qcloud.la/resume/%E9%93%B6%E8%A1%8C%E5%8D%A1%20(1).png?sign=9fa28ce250403f714c59f0f3087f8b78&t=1635180053',
        children: [
          {
            md: 12,
            xs: 24,
            className: 'Process-left-wrapper',
            url: 'https://6d78-mxm1923893223-ulteh-1302287111.tcb.qcloud.la/resume/tab_3.png?sign=9dc300066e5cf871e18d33bcd23192a1&t=1635609590',
          },
          {
            md: 10,
            xs: 24,
            tag: '更便捷',
            title: ['智能推送简历', '让更多机会找到你'],
            content: [
              ' 打开智能推送，即可被推荐给热招公司，让HR 发现适合的你。',

              'HR主动邀约成功率极高，实时聊天沟通，高效面试快速入职。',

              '屏蔽在职公司，个人隐私保密，没有不明信息骚扰的求职环境。',
            ],
            offset: 1,
            name: 'child1',
            className: 'Process-right-wrapper',
          },
        ],
      },
      {
        title: '4.内推直达',
        desc: '简历内推，高通过率',
        url: 'https://6d78-mxm1923893223-ulteh-1302287111.tcb.qcloud.la/resume/%E5%85%AC%E5%8F%B8.png?sign=3a34ab1434636ec020fe9af78673c50e&t=1635180074',
        children: [
          {
            md: 12,
            xs: 24,
            className: 'Process-left-wrapper',
            url: 'https://6d78-mxm1923893223-ulteh-1302287111.tcb.qcloud.la/resume/tab_4.png?sign=707873671b3be88bee7787d9be5b313a&t=1635609668',
          },
          {
            md: 10,
            xs: 24,
            title: [`零错误的专业简历`, `更能在竞争者中脱颖而出`],
            tag: '更高效',
            offset: 1,
            content: [
              '根据技能、专业、相关经验等多维度算法解析简历核心标签，自动匹配合适职位。',

              '节省筛选职位工作量，挖掘未发觉的新机会，提高简历通过率，快速拿到心动的Offer。',
            ],
            name: 'child0',
            className: 'Process-right-wrapper',
          },
        ],
      },
    ];
    const titleToRender = [];

    const childrenToRender = childWrapper.map((item, index) => {
      titleToRender.push(
        <>
          <div
            key={item.title}
            onClick={(e) => {
              onTitleClick(e, index);
            }}
            className={index === current ? `Process-title-text active` : 'Process-title-text'}
          >
            <Avatar
              style={{ paddingTop: 3 }}
              src={
                <Image
                  preview={false}
                  src={item.url}
                  style={{ width: 20, marginRight: 5, marginTop: 1 }}
                />
              }
            />
            {item.title}
            <div className={index === current ? `Process-title-desc active` : 'Process-title-desc'}>
              {item.desc}
            </div>
          </div>

          {index < 3 && (
            <Avatar
              key={item.title}
              style={{ paddingTop: 2, width: 51, marginRight: 20, left: 282 + index * 282 }}
              className="Process-title-image"
              src={
                <Image
                  preview={false}
                  src="https://6d78-mxm1923893223-ulteh-1302287111.tcb.qcloud.la/resume/%E7%AE%AD%E5%A4%B4.png?sign=f408ff00788b04ecbe631ef456521cd3&t=1635179861"
                  style={{ width: 51, marginRight: 5, marginTop: 1 }}
                />
              }
            />
          )}
        </>,
      );
      const childrenItem = item.children.map(($item, i) => {
        const { ...childProps } = $item;
        return (
          <Col {...childProps} key={item.url}>
            {$item.url ? (
              <Image src={$item.url} preview={false} />
            ) : (
              <TweenOne
                className="Process-right-wrapper-item"
                animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
              >
                <span className="Process-right-wrapper-item-tag">{$item.tag}</span>
                <span className="Process-right-wrapper-item-title">
                  {$item.title[0]}
                  <br />
                  {$item.title[1]}
                </span>
                <div className="Process-right-wrapper-item-content">
                  {$item.content.map((item) => {
                    return <p>{item}</p>;
                  })}
                </div>
                <div className="Process-right-wrapper-item-Button">立即制作专业简历</div>
              </TweenOne>
            )}
          </Col>
        );
      });
      return (
        <div key={item.title}>
          <QueueAnim
            type="bottom"
            component={Row}
            className="Process-item"
            //             style={{ justifyContent: 'center' }}
            //             componentProps={{ gutter: 120 }}
          >
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
                left: `${3 + width * current}%`,
              }}
            >
              <em className="Process-title-bar" />
            </div>
          </div>
        </div>

        <AntCarousel
          className="Process-content"
          key="carousel"
          infinite={false}
          beforeChange={onBeforeChange}
          autoplay
          easing="ease-in"
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
