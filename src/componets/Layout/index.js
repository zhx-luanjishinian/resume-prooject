import { useBoolean } from 'ahooks';
// import logoImg from 'assets/image/logo.png';
// import useGetUserInfo from 'hooks/useGetUserInfo';
import { Avatar, Alert, Col, Layout, Menu, Row, Space, Typography, Badge, Image } from 'antd';
import { pathToRegexp } from 'path-to-regexp';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { allRouterPaths, menuOpenKeys, navs } from '../../router';
import Guard from '../../router/Guard';
import { isAuth } from '../../router/renderRoutes';
import CVDrawer from '../Drawer';
import './index.less';

const { Header, Content, Sider, Footer } = Layout;
const { Text } = Typography;

const AllianceLayout = () => {
  const [navSelectKeys, setNavSelectKeys] = useState([]);
  const [showSider, { setTrue, setFalse }] = useBoolean(true);
  const [currentPath, setCurrentPath] = useState('');
  const [collapsed, setCollapsed] = useState(false);
  const [CVDrawerVisible, setCVDrawerVisibile] = useState(false);
  const [CVDrawerData, setCVDrawerData] = useState({ title: '' });
  //   const { userInfo } = useGetUserInfo();
  const auth = useSelector((state) => state.global.auth);
  const history = useHistory();
  const location = useLocation();
  /**
   * Header共有三种样式:
   * 0-登录页login: 无header
   * 1-未登录首页PC home: 左边logo，右边登录注册按钮
   * 2-PC已登录除登录外所有页面: 左边logo，中间menu，右边用户名
   * 3-移动端首页: 左边logo，不区分登录态
   */
  const menuLeftList = [
    {
      icon: 'https://6d78-mxm1923893223-ulteh-1302287111.tcb.qcloud.la/resume/%E9%AA%8C%E6%94%B6%E6%A8%A1%E7%89%88%E7%AE%A1%E7%90%86.png?sign=a45e74a83d5d4f3376fc93e8f48bd85a&t=1636286607',
      title: '模版管理',
      count: 1,
    },
    {
      icon: 'https://6d78-mxm1923893223-ulteh-1302287111.tcb.qcloud.la/resume/ic_%E6%9B%B4%E6%8D%A2.png?sign=1ff7ff9a1533ab8ab357e6da434f1668&t=1636286682',
      title: '更换模版',
      count: 4,
    },
    {
      icon: 'https://6d78-mxm1923893223-ulteh-1302287111.tcb.qcloud.la/resume/%E4%B8%BB%E9%A2%98.png?sign=83ec483965721b3fe32a75f30ecb4033&t=1636286772',
      title: '主题设置',
      count: 3,
    },
    {
      icon: 'https://6d78-mxm1923893223-ulteh-1302287111.tcb.qcloud.la/resume/%E5%AF%BC%E5%85%A5.png?sign=2905040bea866eca857bf8977547cdf1&t=1636286659',
      title: '倒入简历',
      count: 0,
    },
  ];
  const menuRightList = [
    {
      icon: 'https://6d78-mxm1923893223-ulteh-1302287111.tcb.qcloud.la/resume/%E5%B0%8F%E8%B4%B4%E5%A3%AB.png?sign=2845b5f2129347b3979672b8577aa7cf&t=1636386777',
      title: '贴士',
      count: 1,
    },
    {
      icon: 'https://6d78-mxm1923893223-ulteh-1302287111.tcb.qcloud.la/resume/%E8%AF%8A%E6%96%AD.png?sign=e3ace02a90a5c83b1e605dcb2074f6b0&t=1636386747',
      title: '诊断',
      count: 4,
    },
    {
      icon: 'https://6d78-mxm1923893223-ulteh-1302287111.tcb.qcloud.la/resume/%E6%A1%88%E4%BE%8B%20(1).png?sign=4f7bb20b3f7e03675cf1d8d1e34748ef&t=1636386805',
      title: '案例',
      count: 3,
    },
  ];

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const handleLogout = async () => {
    try {
      return;
    } catch (e) {
      console.error('logout error', e);
    }
  };
  const userMenus = (
    <Menu
      onClick={(e) => {
        if (e.key === 'layout') {
          handleLogout();
        }
      }}
    >
      <Menu.Item key="layout">退出登录</Menu.Item>
    </Menu>
  );
  useEffect(() => {
    console.log(allRouterPaths);
    const path = allRouterPaths.find(
      (routePath) => {
        console.log(pathToRegexp(routePath), routePath, location.pathname);
        return pathToRegexp(routePath).test(location.pathname);
      },

      //     pathToRegexp(routePath).test(location.pathname),
    );

    setCurrentPath(path ?? '');
  }, [currentPath, location.pathname]);
  useEffect(() => {
    const navKeys = navs
      .filter((nav) => location.pathname.startsWith(nav.path))
      .map((nav) => nav.path);
    if (navKeys && navKeys.length > 0) {
      setNavSelectKeys(navKeys);
    } else {
      setNavSelectKeys([]);
    }
  }, [location.pathname, setFalse, setTrue]);
  useEffect(() => {
    const a = allRouterPaths.some((p) => {
      return location.pathname !== p && location.pathname.includes(p);
    });

    a ? setTrue() : setFalse();
  }, [location.pathname, setFalse, setTrue]);
  const renderMenu = useCallback(
    (routes) => {
      return routes.map((route) => {
        if (!route.meta || !isAuth(auth, route.identify)) {
          return null;
        }
        if (route.routes) {
          return (
            <Menu.SubMenu icon={route.meta?.icon} title={route.meta?.title} key={route.path}>
              {renderMenu(route.routes)}
            </Menu.SubMenu>
          );
        }
        return (
          <Menu.Item icon={route.meta?.icon} key={route.path}>
            {route.meta?.title}
          </Menu.Item>
        );
      });
    },
    [auth],
  );
  const renderSideMenu = useCallback(() => {
    const rootRoute = navs.find((route) => location.pathname.startsWith(route.path));
    if (!rootRoute) {
      return null;
    }
    if (!rootRoute.routes) {
      return null;
    }
    return renderMenu(rootRoute.routes);
  }, [location.pathname, renderMenu]);
  return (
    <div className="layout-wrapper">
      <Layout style={{ height: 'auto' }}>
        <Header className="layout-header" style={{ lineHeight: '62px' }}>
          <Row>
            <Col flex="208px" className="logo-wrapper">
              <img
                onClick={() => {
                  history.push('/');
                }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Logo%21_Logo.svg/1200px-Logo%21_Logo.svg.png"
                width="114"
                alt=""
              />
            </Col>
            <Col flex="auto">
              <Menu
                mode="horizontal"
                selectedKeys={navSelectKeys}
                onClick={(e) => {
                  history.push(e.key);
                }}
              >
                {navs.map((route) => {
                  return (
                    <Menu.Item key={route.path} icon={route.meta?.icon}>
                      {route.meta?.title}
                    </Menu.Item>
                  );
                })}
              </Menu>
            </Col>
            <Col flex="350px" style={{ textAlign: 'right' }}>
              <Space align="start" style={{ height: 64 }}>
                <Text className="ks-header-name ellipsis" style={{ maxWidth: 123 }}>
                  {/* {userInfo?.userEmail.split('@')[0]} */}
                </Text>
              </Space>
            </Col>
          </Row>
        </Header>
        <Layout>
          {true ? (
            <Sider
              className="layout-sider-left"
              trigger={null}
              collapsible
              collapsed={collapsed}
              width={120}
              theme="light"
            >
              <Menu
                mode="inline"
                onClick={(e) => {
                  //    history.push(e.key);
                }}
                defaultOpenKeys={menuOpenKeys}
                selectedKeys={[currentPath]}
              >
                {menuLeftList.map((item) => {
                  return (
                    <Menu.Item className="layout-sider-left-menuItem" key={item.title}>
                      <div className="menuItem-box">
                        <div style={{ width: '100%', height: 35 }}>
                          <Badge count={item.count}>
                            <Avatar shape="square" src={item.icon} />
                          </Badge>
                        </div>
                        <div style={{ width: '100%', height: 35, fontSize: 13, fontWeight: 500 }}>
                          {item.title}
                        </div>
                      </div>
                    </Menu.Item>
                  );
                })}
              </Menu>
            </Sider>
          ) : null}
          <Content style={{ position: 'relative', padding: 24 }} className="layout-content">
            <Guard />
          </Content>

          <Sider theme="light" className="layout-sider-right" width={120} id="www">
            <Menu
              mode="inline"
              defaultOpenKeys={menuOpenKeys}
              selectedKeys={[currentPath]}
              //               style={{ position: 'relative' }}
            >
              <CVDrawer
                visible={CVDrawerVisible}
                data={CVDrawerData}
                menuRightList={menuRightList}
                onClose={() => {
                  setCVDrawerVisibile(false);
                }}
              />
              {menuRightList.map((item) => {
                return (
                  <Menu.Item
                    key={item.title}
                    className="layout-sider-right-menuItem"
                    onClick={(e) => {
                      console.log(1);
                      setCVDrawerVisibile(true);
                      setCVDrawerData({ title: item.title });
                    }}
                  >
                    <div className="menuItem-box">
                      <div style={{ width: '100%', height: 35 }}>
                        <Badge count={item.count}>
                          <Avatar shape="square" src={item.icon} />
                        </Badge>
                      </div>
                      <div className="menuItem-text">{item.title}</div>
                    </div>
                  </Menu.Item>
                );
              })}
            </Menu>
          </Sider>
        </Layout>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
};

export default AllianceLayout;
