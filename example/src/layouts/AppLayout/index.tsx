import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Location } from 'history';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import menuData, { MenuItemProps } from 'configs/menu';
import CodeView from 'components/CodeView';
import PageHeader from 'components/PageHeader';
import './index.scss';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export interface AppLayoutProps {
  location: Location;
  children?: React.ReactElement;
}

class AppLayout extends React.Component<AppLayoutProps> {
  render(): ReactElement {
    const { children } = this.props;
    const { pathname } = this.props.location;
    const target = menuData.find((item: MenuItemProps) => item.name === pathname) || { name: '' };
    const page = pathname.replace(/\//, '');
    console.log(target);
    return (
      <Layout className="app-layout">
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={[target.name]}
            defaultOpenKeys={[target.name]}
            openKeys={[target.name]}
            selectedKeys={[target.name]}
            style={{ height: '100%', borderRight: 0 }}
          >
            {
              menuData.map((item: MenuItemProps) => (
                <Menu.Item key={item.name}><Link to={item.name}>{item.label}</Link></Menu.Item>
              ))
            }
          </Menu>
        </Sider>
        <Layout style={{ padding: '24px' }}>
          <PageHeader
            page={page}
          />
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
            }}
          >
            {children}
            <CodeView key={pathname} page={page} />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default AppLayout;
