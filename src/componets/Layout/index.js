import { SystemMenufold, SystemMenuunfold } from '@ant-design/icons';
import { useBoolean } from 'ahooks';
// import logoImg from 'assets/image/logo.png';
// import useGetUserInfo from 'hooks/useGetUserInfo';
import { Avatar, Col, Layout, Menu, Row, Space, Typography } from 'antd';
import { pathToRegexp } from 'path-to-regexp';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { allRouterPaths, IRoute, menuOpenKeys, navs } from '../../router';
import Guard from '../../router/Guard';
import { isAuth } from '../../router/renderRoutes';
import './index.less';

const { Header, Content, Sider } = Layout;
const { Text } = Typography;

const AllianceLayout = () => {
  const [navSelectKeys, setNavSelectKeys] = useState([]);
  const [showSider, { setTrue, setFalse }] = useBoolean(false);
  const [currentPath, setCurrentPath] = useState('');
  const [collapsed, setCollapsed] = useState(false);
  const { userInfo } = useGetUserInfo();
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
    //       onClick={(e) => {
    //         if (e.key === 'layout') {
    //           handleLogout();
    //         }
    //       }}
    >
      <Menu.Item key="layout">退出登录</Menu.Item>
    </Menu>
  );
  //   useEffect(() => {
  //     const path = allRouterPaths.find((routePath) =>
  //       pathToRegexp(routePath).test(location.pathname),
  //     );
  //     setCurrentPath(path ?? '');
  //   }, [currentPath, location.pathname]);
  //   useEffect(() => {
  //     const navKeys = navs
  //       .filter((nav) => location.pathname.startsWith(nav.path))
  //       .map((nav) => nav.path);
  //     if (navKeys && navKeys.length > 0) {
  //       setNavSelectKeys(navKeys);
  //     } else {
  //       setNavSelectKeys([]);
  //     }
  //   }, [location.pathname, setFalse, setTrue]);
  //   useEffect(() => {
  //     const a = allRouterPaths.some((p) => {
  //       return location.pathname !== p && location.pathname.includes(p);
  //     });

  //     a ? setTrue() : setFalse();
  //   }, [location.pathname, setFalse, setTrue]);
  //   const renderMenu = useCallback(
  //     (routes) => {
  //       return routes.map((route) => {
  //         if (!route.meta || !isAuth(auth, route.identify)) {
  //           return null;
  //         }
  //         if (route.routes) {
  //           return (
  //             <Menu.SubMenu icon={route.meta?.icon} title={route.meta?.title} key={route.path}>
  //               {renderMenu(route.routes)}
  //             </Menu.SubMenu>
  //           );
  //         }
  //         return (
  //           <Menu.Item icon={route.meta?.icon} key={route.path}>
  //             {route.meta?.title}
  //           </Menu.Item>
  //         );
  //       });
  //     },
  //     [auth],
  //   );
  //   const renderSideMenu = useCallback(() => {
  //     const rootRoute = navs.find((route) => location.pathname.startsWith(route.path));
  //     if (!rootRoute) {
  //       return null;
  //     }
  //     if (!rootRoute.routes) {
  //       return null;
  //     }
  //     return renderMenu(rootRoute.routes);
  //   }, [location.pathname, renderMenu]);
  return (
    <div className="layout-wrapper">
      <Layout style={{ height: '100vh' }}>
        <Header className="layout-header" style={{ lineHeight: '62px' }}>
          <Row>
            <Col flex="208px" className="logo-wrapper">
              <img
                onClick={() => {
                  //    history.push('/');
                }}
                src={logoImg}
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
                  {userInfo?.userEmail.split('@')[0]}
                </Text>
              </Space>
            </Col>
          </Row>
        </Header>
        <Layout>
          {showSider ? (
            <Sider
              width={208}
              className="layout-sider"
              trigger={null}
              collapsible
              collapsed={collapsed}
            >
              <Menu
                mode="inline"
                onClick={(e) => {
                  history.push(e.key);
                }}
                defaultOpenKeys={menuOpenKeys}
                selectedKeys={[currentPath]}
              >
                {renderSideMenu()}
              </Menu>
              {/* <div className="side-collap">
                {React.createElement(collapsed ? SystemMenufold : SystemMenuunfold, {
                  className: 'trigger',
                  onClick: toggle,
                })}
              </div> */}
            </Sider>
          ) : null}
          <Content style={{ position: 'relative', padding: 24 }}>
            <Guard />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default AllianceLayout;
