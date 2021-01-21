import * as React from "react";

import { ComponentProps, RouteProps } from "./types";

const RouteContext = React.createContext({} as RouteProps);

export const RouteProvider = RouteContext.Provider;

/**
 * Exposes component props for the current route.
 */
export const useRouteComponentProps = (): ComponentProps => {
  const context = React.useContext(RouteContext);

  if (!context) {
    throw new Error("useRouteComponentProps should be within RouteProvider");
  }

  return context?.componentProps || {};
};

/**
 * Exposes route props for the current route.
 */
export const useRouteProps = (): RouteProps => {
  const context = React.useContext(RouteContext);

  if (!context) {
    throw new Error("useRouteRouteProps should be within RouteProvider");
  }

  return context || {};
};
