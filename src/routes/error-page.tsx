import {isRouteErrorResponse, useRouteError} from "react-router";
import {Result, Button, Layout, Row, Col} from "antd";
import {useTheme} from "@styles/theme-provider.tsx";
import {Link} from "react-router";

const {Content} = Layout;

function ErrorPage() {
  const error = useRouteError();
  const {isDark} = useTheme();

  const getErrorConfig = () => {
    if (isRouteErrorResponse(error)) {
      return {
        status: error.status === 404 ? 404 : 500,
        title: error.status,
        subTitle: error.status === 404 ?
            "页面离家出走了..." :
            error.data?.message || error.statusText
      };
    }
    return {
      status: 500,
      title: "系统异常",
      subTitle: error instanceof Error ?
          error.message :
          "未知错误，请联系管理员"
    };
  };

  const {title, subTitle} = getErrorConfig();

  return (
      <Layout style={{height: '100vh', width: '100vw'}}>
        <Content>
          <Row justify="center" align="middle" style={{height: '100vh'}}>
            <Col>
              <Result
                  title={title}
                  subTitle={subTitle}
                  extra={
                    <Link to="/dashboard/home">
                      <Button
                          type="primary"
                          size="large"
                          style={{
                            background: isDark ? '#177ddc' : '#1677ff',
                            borderColor: isDark ? '#177ddc' : '#1677ff'
                          }}
                      >
                        回到面板首页
                      </Button>
                    </Link>
                  }
                  style={{
                    color: isDark ? 'rgba(255,255,255,0.85)' : 'inherit'
                  }}
              />
            </Col>
          </Row>
        </Content>
      </Layout>
  );
}

export default ErrorPage;