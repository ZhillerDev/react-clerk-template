import {Layout, Menu, Row, Col, Switch} from 'antd';
import {UserButton} from '@clerk/clerk-react';
import {Link, Outlet} from "react-router";
import {useTheme} from "@styles/theme-provider.tsx";  // 确保路径正确

const {Header, Sider, Content} = Layout;

// 侧边栏菜单项配置
const menuItems = [
  {key: 'home', label: <Link to="/dashboard/home">项目首页</Link>},
  {key: 'route-normal', label: <Link to="/dashboard/route-normal">基础路由</Link>},
  {key: 'route-nested', label: <Link to="/dashboard/route-nested">嵌套路由</Link>},
  {key: 'route-err', label: <Link to="/dashboard/route-err">边界路由</Link>},
  {key: 'route-senior', label: <Link to="/dashboard/route-senior">高级路由</Link>}
];

export default function DashboardLayout() {
  const {isDark, toggleTheme} = useTheme();
  return (
      <Layout style={{
        minHeight: '100vh',
        background: isDark ? '#141414' : '#f5f5f5',
        transition: 'background 0.3s ease'
      }}>
        {/* 顶部导航栏 */}
        <Header style={{
          padding: 0,
          height: 64,
          borderBottom: `1px solid ${isDark ? '#303030' : '#f0f0f0'}`,
          background: isDark ? '#1f1f1f' : '#ffffff'
        }}>
          <Row justify="space-between" align="middle" style={{height: '100%'}}>
            <Col style={{
              marginLeft: 24,
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: isDark ? 'rgba(255,255,255,0.85)' : 'inherit'
            }}>
              React Router Clerk
            </Col>

            <Col style={{
              marginRight: 24,
              display: 'flex',
              alignItems: 'center',
              gap: 16
            }}>
              <Switch
                  checked={isDark}
                  onChange={toggleTheme}
                  checkedChildren="🌙"
                  unCheckedChildren="☀️"
              />
              <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "h-9 w-9",
                      userButtonPopoverCard: {
                        background: isDark ? '#1d1d1d' : '#ffffff',
                        border: `1px solid ${isDark ? '#303030' : '#f0f0f0'}`
                      }
                    }
                  }}
              />
            </Col>
          </Row>
        </Header>

        <Layout>
          {/* 侧边栏 */}
          <Sider
              width={200}
              theme={isDark ? 'dark' : 'light'}
              breakpoint="lg"
              collapsedWidth="0"
              style={{
                background: isDark ? '#1f1f1f' : '#ffffff',
                borderRight: `1px solid ${isDark ? '#303030' : '#f0f0f0'}`,
                transition: 'border-color 0.3s ease'
              }}
          >
            <Menu
                mode="inline"
                defaultSelectedKeys={['home']}
                items={menuItems}
                theme={isDark ? 'dark' : 'light'}
                style={{
                  height: '100%',
                  borderRight: 0,
                  background: 'transparent'
                }}
            />
          </Sider>

          {/* 主内容区 */}
          <Content style={{
            minHeight: 'calc(100vh - 64px)',
            background: isDark ? '#1f1f1f' : '#ffffff',
            overflow: 'auto',
            transition: 'background 0.3s ease'
          }}>
            <Outlet/>
          </Content>
        </Layout>
      </Layout>
  );
}