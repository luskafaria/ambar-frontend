export type ComponentProps = Record<string, unknown>

export interface RouteProps extends Record<string, unknown> {
  /**
   * Defines if the route is exact in react-router.
   */
  exact: boolean;

  /**
   * Defines if the route is strict in react-router.
   */
  strict: boolean;

  /**
   * The route path.
   */
  path: string;

  /**
   * Component to be rendered.
   */
  component: React.FC;

  /**
   * Props that will be injected into the rendered component.
   * Can be used with the useRouteComponentProps hook.
   */
  componentProps: ComponentProps;
}

export interface RouteContainerProps {
  routeProps: RouteProps;
}
