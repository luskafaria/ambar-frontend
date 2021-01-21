import { theme as chakraUiTheme } from "@chakra-ui/react";

import { ThemeFonts } from "./types";

const fonts: ThemeFonts = {
  ...chakraUiTheme.fonts,
  heading: "LibreFranklin Semibold, sans-serif",
  semibold: "LibreFranklin Semibold, sans-serif",
  body: "LibreFranklin Regular, sans-serif",
  mono: "LibreFranklin Regular, sans-serif",
  light: "LibreFranklin Light, sans-serif",
};

export default fonts;
