import React from 'react';
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
const { Panel } = Collapse;

const TipsList = [
  {
    title: '简历上需要放照片吗？',
    desc: '此为非必选项，但如果放上去的话请务必让它成为加分项，毕竟这个看脸的世界越来越没有道理可言了，如果翻遍电脑和手机都没有找到一张可以称得上有气质的照片，那还是别放了。',
  },
  {
    title: '照片有什么标准规范？',
    desc: '建议使用1-6个月的近期免冠照片，男性请至少干净整洁，不要显得油腻，女生可化淡妆，正常的生活/工作照也可，表情动作大方自然，背景清新简洁的正脸半身照为佳。',
  },

  {
    title: ' 简历必填的基本信息',
    desc: [
      { title: '姓名/所在城市/电话号码/联系邮箱', desc: '' },
      {
        title: '所在城市',
        desc: ' 如目前所处城市跟意向工作城市有出入的话，会影响HR的面试邀约决策，为了提升双方沟通效率，建议填写，如往来意向城市很方便或短期内会搬过去居住，注明即可。',
      },
      {
        title: '电话号码',
        desc: '建议写成易于拨打的形式，如：185-5555-5555如果是英文简历，则建议加上区号，如：+86-10-12308',
      },
      {
        title: '联系邮箱',
        desc: '      国内求职推荐使用@163/@sina/@qq等主流邮箱，国外或外企求职推荐使用@gmail等邮箱（qq邮箱很无辜，不要有偏见）；注意检查邮箱的显示名称，火星文、昵称、出生日期等会显得不够专业，建议使用的“名字”或“名字+当前求职年份”来命名。 （如：lina_Abby@gmail.com，lina2017@163.com）',
      },

      {
        title: '姓名',
        desc: '重要信息一定要写清楚，错误示范：张先生/李女士如果有常用英文名，可以在中文名后面写在括号里，如：李娜（Abby没有常用英文名的话，则不建议专门为了工作而取名，否则面试时对方喊你却没有反应，可能会留下负面印象。',
      },
    ],
  },
  {
    title: ' 求职意向要注意哪些规范？',
    desc: [
      {
        title:
          '如四大、国有银行等在招聘信息中不分具体职能部门的话，可以不写求职意向。如需要填写求职意向，则建议一份简历只针对一个意向岗位。',
        desc: '',
      },
      {
        title: '错误示范：过于宽泛',

        desc: ' 如：意向岗位：客服/行政/行政/后勤/HR',
      },
      {
        title: '注意：',
        desc: '注意：多个意向岗位出现在一份简历中，没有针对性，会给HR一个信息：这个求职者的职业规划十分混乱',
      },
      {
        title: '推荐写法：精准的职位名称/行业+职位名称',
        desc: '     如：网易游戏_泛娱乐运营策划 人事专员/人力资源相关岗位食品领域销售类岗位机械行业商务谈判岗',
      },

      {
        title: '注意：',
        desc: '求职意向是整张简历的核心，千万不要觉得面对不同企业和岗位，改个求职意向就可以海投了，求职意向和简历内容一定要相互呼应，才能最好的展现自己的岗位匹配度。',
      },
    ],
  },
  {
    title: ' 工作经验的推荐写法？',
    desc: [
      {
        title: '2017.04-至今韩领网络科技（上海）有限公司（Coupang China）Java软件开发工程师',
        desc: '公司简介：Coupang是一家韩国大型的电子商务公司，也是世界上增长最快的电子商务公司。Coupang拥有“韩国亚马逊”之称，其在韩国本土的地位类似中国国内的“京东”。',
      },
      {
        title: '● 根据开发进度和任务分配，完成相应模块软件的设计、开发、编程任务；',

        desc: ' ● 进行程序单元、功能的测试，查出软件存在的缺陷并保证其质量；● 按计划完成量化的工作要求，并能独立处理和解决所负责的任务。',
      },
      {
        title: '项目：xxxxxx servic',

        desc: '开发技术：Kafka/mysql/Spring/redis/multi-thread&concurrency',
      },
    ],
  },
];
const Tips = () => {
  return (
    <div>
      <Collapse
        bordered={false}
        defaultActiveKey={['1']}
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      >
        {TipsList.map((item) => {
          return (
            <Panel header={item.title} key={item.title}>
              <p>{item.desc}</p>
            </Panel>
          );
        })}
      </Collapse>
      ,
    </div>
  );
};
export default Tips;
