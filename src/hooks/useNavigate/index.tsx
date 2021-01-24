import { useCallback } from "react";
import { useHistory } from "react-router-dom";

import { UseNavigateResult } from "./types";

/**
 * Exposes the history.push curried function in order to use it to navigate between routes.
 * @example <button onClick={navigate(path)} />
 */
const useNavigate = (): UseNavigateResult => {
  const history = useHistory();

  const navigate = useCallback((path: string) => () => {
    history.push(path);
  }, [
    history,
  ]);

  return navigate;
};

export default useNavigate;
