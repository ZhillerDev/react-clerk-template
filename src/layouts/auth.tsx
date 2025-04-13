import {SignIn, SignUp} from "@clerk/clerk-react";
import {useState} from "react";


export default function AuthLayout() {
  const [activeTab, setActiveTab] = useState('login');

  return (
      <div className="w-screen h-screen flex overflow-hidden"> {/* 全局隐藏滚动 */}
        {/* 左侧固定区域 */}
        <div
            className="w-1/2 h-full bg-blue-600 flex-shrink-0 flex items-center justify-center p-8"
            style={{ width: '50vw' }} // 严格视口一半
        >
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold text-white mb-4">欢迎</h1>
            <p className="text-2xl text-blue-100 opacity-90">开始新的一天</p>
          </div>
        </div>

        {/* 右侧禁止滚动区域 */}
        <div
            className="h-full bg-white p-12 flex-shrink-0 box-border"
            style={{
              width: '50vw', // 严格视口一半
              height: '100vh', // 全屏高度
              overflow: 'hidden' // 完全禁用滚动
            }}
        >
          <div className="max-w-md mx-auto h-full flex flex-col">
            {/* 选项卡容器 */}
            <div className="mb-8 relative max-w-full">
              <div className="flex gap-8 overflow-visible">
                <div
                    onClick={() => setActiveTab('login')}
                    className={`relative pb-2 text-xl cursor-pointer transition-colors duration-200 ${
                        activeTab === 'login'
                            ? 'text-blue-600 font-bold'
                            : 'text-gray-600 hover:text-blue-500'
                    }`}
                    style={{ lineHeight: '1.5rem' }}
                >
                  登录
                  {activeTab === 'login' && (
                      <div
                          className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transition-all duration-300"
                          style={{ transformOrigin: 'left center' }}
                      />
                  )}
                </div>

                <div
                    onClick={() => setActiveTab('register')}
                    className={`relative pb-2 text-xl cursor-pointer transition-colors duration-200 ${
                        activeTab === 'register'
                            ? 'text-blue-600 font-bold'
                            : 'text-gray-600 hover:text-blue-500'
                    }`}
                    style={{ lineHeight: '1.5rem' }}
                >
                  注册
                  {activeTab === 'register' && (
                      <div
                          className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transition-all duration-300"
                          style={{ transformOrigin: 'left center' }}
                      />
                  )}
                </div>
              </div>
            </div>

            {/* 表单容器 */}
            <div className="flex-1 overflow-hidden"> {/* 二次滚动保护  */}
              {activeTab === 'login' ? <SignInComp/> : <SignUpComp/>}
            </div>
          </div>
        </div>
      </div>
  );
}

function SignInComp() {
  return (
      <div className="h-screen w-screen p-4">
        <SignIn
            appearance={{
              elements: {
                card: "shadow-none",
                rootBox: "shadow-none"
              }
            }}
        />
      </div>
  );
}

function SignUpComp() {
  return (
      <div className="h-screen w-screen p-4">
        <SignUp
            appearance={{
              elements: {
                card: "backdrop-blur-none bg-transparent",
                rootBox: "bg-transparent"
              }
            }}
        />
      </div>
  );
}
