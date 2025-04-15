import {Outlet, useLoaderData, useLocation, useNavigate} from "react-router";
import {useTheme} from "@styles/theme-provider.tsx";
import {Button, Col, Input, Row, Typography} from "antd";
import {useState} from "react";
import {RouteBasicModel} from "@routes/route-types.tsx";

export function RouteNormalView() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');

  return (
      <div className="h-full w-full">
        {/* 内层 Flex 容器 */}
        <div className="flex h-full">

          {/*路由组*/}
          <div className="flex-1 p-6 ">
            <Typography.Title
                level={2}
                className="dark:text-gray-200 mb-6"
            >
              基础路由
            </Typography.Title>

            {/*基本无参数路由定义*/}
            <div className="flex flex-col space-y-3">
              <Button
                  type="primary"
                  className="w-full text-left"
                  onClick={() => navigate('/dashboard/route-normal/basic-route')}
              >
                无传参路由
              </Button>

              {/*带简单参数传递*/}
              <Button
                  type="primary"
                  className="w-full text-left"
                  onClick={() => navigate('/dashboard/route-normal/param-route/123')}
              >
                简单带参传递：123
              </Button>

              {/*传参后返回对象*/}
              <Row gutter={12} className="mb-4">
                <Col span={12}>
                  <Button
                      type="primary"
                      className="w-full"
                      onClick={() => navigate('/dashboard/route-normal/object-route/' + inputValue)}
                  >
                    带对象的带参传递
                  </Button>
                </Col>

                <Col span={12}>
                  <Input
                      placeholder="输入参数值"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      allowClear
                      className="w-full"
                  />
                </Col>
              </Row>
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

export function RouteNormalToParamRoute() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = useLoaderData();

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
              带参数路由
            </div>

            <div className='pb-4'>
              URL：{location.pathname + location.search + location.hash}
            </div>

            <div className='pb-4'>
              param: {data.param}
            </div>

            {/* 按钮区域 */}
            <Button
                type="primary"
                size="large"
                style={{
                  width: 200,
                  display: 'block',
                  margin: '0 auto',
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

export function RouteNormalToObjectRoute() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = useLoaderData() as RouteBasicModel;

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
              带参数路由
            </div>

            <div className='pb-4'>
              URL：{location.pathname + location.search + location.hash}
            </div>

            <div className='pb-4'>
              param: {JSON.stringify(data)}
            </div>

            {/* 按钮区域 */}
            <Button
                type="primary"
                size="large"
                style={{
                  width: 200,
                  display: 'block',
                  margin: '0 auto',
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