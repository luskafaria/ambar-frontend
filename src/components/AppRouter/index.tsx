import React from "react";
import { Route, Switch } from "react-router-dom";

import RouteContainer from "contexts/route/RouteContainer";
import AppWrapper from "components/AppWrapper";
import appRoutes from "routes/appRoutes";
import NotFound from "views/NotFound";

const AppRouter: React.FC = () => (
  <Switch>
    {
      appRoutes.map((routeProps) => {
        const Component = routeProps.component;

        return (
          <Route
            strict={routeProps?.strict}
            exact={routeProps?.exact}
            path={routeProps?.path}
            key={routeProps?.path}
          >
            <RouteContainer routeProps={routeProps}>
              <AppWrapper>
                <Component />
              </AppWrapper>
            </RouteContainer>
          </Route>
        );
      })
    }
    <Route component={NotFound} />
  </Switch>
);

export default AppRouter;
