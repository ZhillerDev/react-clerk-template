import {RouteObject} from "react-router";
import {RouteNormalToBasicRoute, RouteNormalToObjectRoute, RouteNormalToParamRoute} from "@views/route-normal.tsx";
import {RouteBasicModel} from "@routes/route-types.tsx";

export const normalRoutes: RouteObject[] = [
  {
    path: 'basic-route',
    Component: RouteNormalToBasicRoute
  },
  {
    path: 'param-route/:str',
    loader: ({params}) => {
      return {
        param: params.str
      }
    },
    Component: RouteNormalToParamRoute
  },
  {
    path: 'object-route/:id',
    loader: ({params}): RouteBasicModel => {
      const {id} = params
      return {
        id: Number(id),
        name: 'object-route'
      }
    },
    Component: RouteNormalToObjectRoute
  }
]