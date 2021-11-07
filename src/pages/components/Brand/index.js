import React, { useEffect, useState } from 'react';
import DataAnimation from '../../common/DataAnimation';
import AnimationBtn from '../AnimationBtn';
import BannerImage from './BannerImage';
import { useHistory } from 'react-router-dom';
import './index.less';

const Brand = () => {
  const GLOBAL_CFG = {
    loop: true,
  };
  const history = useHistory();
  useEffect(() => {
    document.querySelectorAll('.brand .animation-item').forEach((el, index, arr) => {
      el.style.transitionDelay = `${index * 0.05}s`;
      el.style.opacity = index === arr.length - 1 ? '0.8' : '1';
      el.style.transform = 'translateY(0px)';
    });
  }, []);
  return (
    <section className="brand">
      <div className="calculate-left info">
        <h1 className="name">
          {name.split('').map((text, index) => (
            <span className="animation-item" key={`${text}-${index}`}>
              {text}
            </span>
          ))}
        </h1>
        <h1 className="slogon">
          {slogon.split('').map((text, index) => (
            <span className="animation-item" key={`${text}-${index}`}>
              {text}
            </span>
          ))}
        </h1>
        <div className="btns">
          <AnimationBtn
            className="realization animation-item"
            //             onClick={() => {
            //               if (userInfo) {
            //                 history.push('/management/app');
            //               } else {
            //                 const homeDom = document.querySelector('.home');
            //                 const scrollPlaceholder = document.querySelector(
            //                   '.union-category-scroll-placeholder',
            //                 );
            //                 if (homeDom && scrollPlaceholder) {
            //                   scrollPlaceholder.style.height = '0px';
            //                   scrollTopSmoothTo(homeDom, homeDom.scrollHeight - window.innerHeight);
            //                 }
            //               }
            //             }}
            onClick={() => {
              history.push('/make');
            }}
            text="开始制作"
          />
          <a href="https://e.kuaishou.com/#/e/home" target="_blank" rel="noreferrer">
            <AnimationBtn className="to-ad animation-item" text="了解更多" />
          </a>
        </div>
        <div className="description animation-item">
          《中国住户调查年鉴》是全面反映中国城乡居民收支、生产和生活状况的资料性年鉴。该年鉴收录了历年全国及分城乡居民收支与生活状况主要数据，以及分省、分地区、按收入等份分组和按4个经济区域分组的住户调查基本情况及收支数据，还包括农村住户固定资产投资情况，以及住户调查其他数据。
        </div>
      </div>
      <div className="calculate-right info">
        <BannerImage />
      </div>
    </section>
  );
};
const name = '优加简历';
const slogon = '定制免费简历模版';
export default Brand;
