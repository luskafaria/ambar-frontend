import Home from "views/Home";
import { MAXMIN_PAGE_PATH, ROOT_PAGE_PATH } from "routes";
import MaxMin from "views/MaxMin";

import { RouteProps } from "./types";

const defaultRouteProps = {
  exact: true,
  strict: false,
  requireAuthentication: true,
  componentProps: {},
};

const appRoutes: RouteProps[] = [
  {
    ...defaultRouteProps,
    path: ROOT_PAGE_PATH,
    component: Home,
  },
  {
    ...defaultRouteProps,
    path: MAXMIN_PAGE_PATH,
    component: MaxMin,
  },
];

export default appRoutes;
