import React from "react";

import { RouteProvider } from ".";
import { RouteContainerProps } from "./types";

const RouteContainer: React.FC<RouteContainerProps> = ({
  routeProps,
  children,
}) => (
  <RouteProvider value={routeProps}>
    {children}
  </RouteProvider>
);

export default RouteContainer;
