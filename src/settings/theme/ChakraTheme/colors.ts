import { theme as chakraUiTheme } from "@chakra-ui/react";

import { ThemeColors } from "./types";

const PRIMARY_COLOR = "#0C006F";
const PRIMARY_COLOR_LIGHT = "#8700F9";
const PRIMARY_COLOR_DISABLED = "#D6BFFF";

const SECONDARY_COLOR = "#283DFC";
const SECONDARY_COLOR_LIGHT = "#00CFD8";
const SECONDARY_COLOR_DISABLED = "#BFFDFF";

const colors: ThemeColors = {
  ...chakraUiTheme.colors,
  black: "#000000",
  white: "#FFFFFF",
  background: "#F8F8F8",
  progress: "#8700F9",
  primary: {
    50: PRIMARY_COLOR_DISABLED,
    100: PRIMARY_COLOR_LIGHT,
    200: PRIMARY_COLOR,
    300: PRIMARY_COLOR,
    400: PRIMARY_COLOR,
    500: PRIMARY_COLOR,
    600: PRIMARY_COLOR,
    700: PRIMARY_COLOR,
    800: PRIMARY_COLOR,
    900: PRIMARY_COLOR,
  },
  secondary: {
    50: SECONDARY_COLOR_DISABLED,
    100: SECONDARY_COLOR_LIGHT,
    200: SECONDARY_COLOR,
    300: SECONDARY_COLOR,
    400: SECONDARY_COLOR,
    500: SECONDARY_COLOR,
    600: SECONDARY_COLOR,
    700: SECONDARY_COLOR,
    800: SECONDARY_COLOR,
    900: SECONDARY_COLOR,
  },
  gray: {
    ...chakraUiTheme.colors.gray,
    100: "#EAEAEA",
    200: "#CCCCCC",
    300: "#8D8D8D",
    400: "#4C4C4C",
  },
  status: {
    success: "#44d7b6",
    error: "#f14336",
    warning: "#f7b500",
    info: "#248EB4",
  },
};

export default colors;
