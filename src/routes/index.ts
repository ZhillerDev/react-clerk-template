import {createBrowserRouter} from "react-router";
import RootLayout from "@layouts/root";
import AuthLayout from "@layouts/auth.tsx";

import ErrorPage from "@routes/error-page.tsx";
import * as React from "react";

import {layoutRoutes} from "@routes/layout-routes.tsx";

// 使用React Router的createBrowserRouter函数创建一个路由配置
export const router = createBrowserRouter([
  {
    // 根路径路由配置
    path: "/",
    // 使用根布局组件（RootLayout需要提前导入）
    Component: RootLayout,
    // 错误处理组件（使用React.createElement动态创建ErrorPage组件）
    errorElement: React.createElement(ErrorPage),
    // 嵌套子路由配置
    children: [
      {
        // 认证相关路由路径
        path: '/auth',
        // 使用认证布局组件（AuthLayout需要提前导入）
        Component: AuthLayout,
      },
      {
        // 仪表盘相关路由路径
        path: '/dashboard',
        // 仪表盘下的嵌套子路由
        children: [
          // 展开导入的布局路由配置（layoutRoutes应为预先定义的路由配置数组）
          ...layoutRoutes,
        ],
      }
    ],
  },
]);