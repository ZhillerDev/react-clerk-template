import HomeView from "@views/home.tsx";
import {RouteNormalView} from "@views/route-normal.tsx";
import RouteNestedView from "@views/route-nested.tsx";
import RouteErrView from "@views/route-err.tsx";
import RouteSeniorView from "@views/route-senior.tsx";
import {RouteObject} from "react-router";
import {normalRoutes} from "@routes/view-routes.tsx";

export const layoutRoutes: RouteObject[] = [
  {path: 'home', Component: HomeView, index: true},
  {path: 'route-normal', Component: RouteNormalView, children: [...normalRoutes]},
  {path: 'route-nested', Component: RouteNestedView},
  {path: 'route-err', Component: RouteErrView},
  {path: 'route-senior', Component: RouteSeniorView},
]