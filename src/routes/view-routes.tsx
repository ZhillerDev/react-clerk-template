import {RouteObject} from "react-router";
import {RouteNormalToBasicRoute} from "@views/route-normal.tsx";

export const normalRoutes: RouteObject[] = [
  {
    path: 'basic-route',
    Component: RouteNormalToBasicRoute
  }
]