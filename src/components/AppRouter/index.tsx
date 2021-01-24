import React from "react";
import { Route, Switch } from "react-router-dom";

import appRoutes from "routes/appRoutes";
import AppWrapper from "components/AppWrapper";
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
            <AppWrapper>
              <Component />
            </AppWrapper>
          </Route>
        );
      })
    }
    <Route>
      <AppWrapper>
        <NotFound />
      </AppWrapper>
    </Route>
  </Switch>
);

export default AppRouter;
