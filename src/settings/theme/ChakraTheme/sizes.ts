import { theme as chakraUiTheme } from "@chakra-ui/react";

import { ThemeSizes } from "./types";

const sizes: ThemeSizes = {
  ...chakraUiTheme.sizes,
  xxs: "10em",
};

export default sizes;
