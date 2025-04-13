import {Outlet, useLocation, useNavigate} from "react-router";
import {useTheme} from "@styles/theme-provider.tsx";
import {Button, Col, Row, Typography} from "antd";

export function RouteNormalView() {
  const navigate = useNavigate();

  return (
      <div className="h-full w-full">
        {/* 内层 Flex 容器 */}
        <div className="flex h-full">
          {/* 左侧区域 - 使用 Ant Design 组件 */}
          <div className="flex-1 p-6 border-r border-gray-200 dark:border-gray-800">
            <Typography.Title
                level={2}
                className="dark:text-gray-200 mb-6"
            >
              基础路由
            </Typography.Title>

            {/* 按钮组 - 使用 Tailwind 间距系统 */}
            <div className="flex flex-col space-y-3">
              <Button
                  type="primary"
                  className="w-full text-left"
                  onClick={() => navigate('/dashboard/route-normal/basic-route')}
              >
                无传参路由
              </Button>

              <Button
                  type="default"
                  className="w-full text-left"
                  onClick={() => navigate('/dashboard/settings')}
              >
                功能模块二
              </Button>

              <Button
                  type="dashed"
                  className="w-full text-left"
                  onClick={() => navigate('/dashboard/analytics')}
              >
                功能模块三
              </Button>
            </div>
          </div>

          {/* 右侧区域 - 使用 Tailwind 滚动控制 */}
          <div className="flex-1 overflow-auto p-6 ">
            <Outlet/>
          </div>
        </div>
      </div>
  )
      ;
}


export function RouteNormalToBasicRoute() {
  const navigate = useNavigate();
  const location = useLocation();
  const {isDark} = useTheme();

  const containerStyle = {
    height: '100%',
    width: '100%',
    transition: 'background 0.3s ease'
  };

  return (
      <div style={containerStyle}>
        <Row
            justify="center"
            align="middle"
            style={{height: '100%'}}
        >
          <Col>
            <div className='pb-4 font-bold text-xl'>
              无传参路由
            </div>

            <div className='pb-4'>
              URL：{location.pathname + location.search + location.hash}
            </div>

            {/* 按钮区域 */}
            <Button
                type="primary"
                size="large"
                style={{
                  width: 200,
                  display: 'block',
                  margin: '0 auto',
                  background: isDark ? '#177ddc' : '#1677ff',
                  borderColor: isDark ? '#177ddc' : '#1677ff'
                }}
                onClick={() => navigate('/dashboard/route-normal')}
            >
              返回
            </Button>
          </Col>
        </Row>
      </div>
  );
}