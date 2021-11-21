import React from 'react';
import { Tag } from 'antd';
import './index.less';
export const CaseList = [
  {
    time: '2021.01-2021.09',
    title: '优加银行（中国）有限公司',
    tag: '客户经理',
    content: [
      '●  了解客户融资结算需求，向日系企业客户提供本外币存贷款、票据、外汇、国际结算 、理财产品、跨境资金池、贸易融资等产品和服务。 ',
      '●  分析最新经济金融及信贷政策导向、研究外汇市场动向，满足客户综合业务咨询需求 ',
      '●  定期学习银行新产品、分析客户需求，对相关客户进行营销；',
      '●  协调与各部门之间的工作，沟通能力较强，为客户解决各种问题，得到客户好评；',
      '●  定期参加各类培训，熟悉相关的金融政策及规定，保证合规 。',
    ],
  },
  {
    time: '2021.01-2021.09',
    title: '顺丰速递有限公司',
    tag: '仓管员，客服员',
    content: [
      '●  仓库电商产品的管理，电子商务项目管理； ',
      '●  网站需求分析，产品打包，产品跟踪工作；',
      '●  与客服配合，展开产品的销售、售后工作；',
      '●  订单的打印，货物的分拣； ',
      '●  可以熟练使用顺丰的机械系统。',
    ],
  },
  {
    time: '2021.01-2021.09',
    title: '智驾车联网业务管理系统',
    tag: '石市通客户端开发',
    content: [
      '●  利用H5本地存储，css3阴影，选择器等技术设计制作web页面',

      '●  可兼容主流浏览器（Chrome,firefox,safari,IE8+）',

      '网址： http://wqf1992.duapp.com/BMS/login.html',
    ],
  },
  {
    time: '2021.01-2021.09',
    title: '个人网站--五百丁',
    tag: '独立完成',
    content: [
      '●项目描述：本项目主要引用了“百度脑图”项目，打造了脑图与博客相结合的响应式的动态个人网站。该系统前端部分页面采用了AngularJS，后端使用Node.js，利用了Sublime及JSlint插件、git、gulp、Handlebars、Sass等工具，并部署于腾讯云服务器。',
      '引入脑图，实现博客文章与脑图的关联功能及网站后台管理功能，并支持HTTPS安全传输；',
      '采用Flexbox及媒体查询，实现网站的响应式设计，并使用CSS3更友好的实现交互功能； ',
      '利用npm、Git、Gulp等实现自动化构建开发流程，并利用模板引擎、Sass及Sublime插件等提高开发效率。',
    ],
  },
];
const Case = () => {
  return (
    <div className="panel-case">
      {CaseList.map((item) => {
        return (
          <div className="Panel-text" key={item.title}>
            <b>{item.title}</b>
            <br />
            <Tag color="#87d068" className="tag">
              {item.tag}
            </Tag>
            <div className="case_masking">
              <span>应用案例</span>
            </div>
            {item.content.map((item, index) => {
              return (
                <p key={item}>
                  {index + 1}.{item}
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
export default Case;
