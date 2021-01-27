import { theme as chakraUiTheme } from "@chakra-ui/react";

import { ThemeFonts } from "./types";

const fonts: ThemeFonts = {
  ...chakraUiTheme.fonts,
  body: "'Roboto', sans-serif",
};

export default fonts;
