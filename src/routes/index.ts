// import {
//   type RouteConfig,
//   index,
//   route,
//   layout,
//   prefix,
// } from "@react-router/dev/routes";
//
// export default [
//   // index("@layouts/root.tsx"),
//
//   route("/", "@layouts/root.tsx"),
//
//   // ...prefix("auth", [
//   //   index("@layouts/auth.tsx"),
//   // ]),
//
//   ...prefix("dashboard", [
//     // nested layout
//     layout("@layouts/dashboard.tsx", [
//       index("@routes/dashboard.tsx"),
//       route("home", "@views/home.tsx"),
//       route("other", "@views/other.tsx"),
//     ])
//   ]),
// ] satisfies RouteConfig;

// Loaders and Actions are NOT supported by Clerk at the moment with React Router
import {createBrowserRouter} from "react-router";
import RootLayout from "@layouts/root";
import AuthLayout from "@layouts/auth.tsx";

import ErrorPage from "@routes/error-page.tsx";
import * as React from "react";

import {layoutRoutes} from "@routes/layout-routes.tsx";

// 传统数据模式定义router
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: React.createElement(ErrorPage),
    children: [
      {
        path: '/auth',
        Component: AuthLayout,
      },
      {
        path: '/dashboard',
        children: [
          ...layoutRoutes,
        ],
      }
    ],
  },
]);

// V7新增的framework形式
// import {index, layout, prefix, route, RouteConfig} from "@react-router/dev/routes";
// export default [
//   index("@layouts/root.tsx"),
//
//   ...prefix("auth", [
//     index("@layouts/auth.tsx"),
//   ]),
//
//   ...prefix("dashboard", [
//     // nested layout
//     layout("@layouts/dashboard.tsx", [
//       index("@routes/dashboard.tsx"),
//       route("home", "@views/home.tsx"),
//     ])
//   ])
// ] satisfies RouteConfig;
