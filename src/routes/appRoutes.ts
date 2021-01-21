import Home from "views/Home";
import { RouteProps } from "contexts/route/types";
import { ROOT_PAGE_PATH } from "routes";

const defaultRouteProps = {
  exact: true,
  strict: false,
  requireAuthentication: true,
  showHeader: true,
  showFooter: true,
  componentProps: {},
};

const appRoutes: RouteProps[] = [
  {
    ...defaultRouteProps,
    showHeader: false,
    showFooter: false,
    path: ROOT_PAGE_PATH,
    component: Home,
  },
];

/**
 * Public paths that can be accessed without a session.
 */
export const publicPaths = appRoutes
  .filter((route) => !route?.requireAuthentication)
  .map((route) => route.path);

export default appRoutes;
