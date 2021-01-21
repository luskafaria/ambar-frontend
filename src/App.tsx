import React from "react";
import { Router } from "react-router-dom";
import { ThemeProvider as ChakraProvider, CSSReset } from "@chakra-ui/react";

import AppRouter from "components/AppRouter";
import history from "settings/history";
import ChakraTheme from "settings/theme/ChakraTheme";

import "./index.css";

export default function App(): JSX.Element {
  return (
    <ChakraProvider theme={ChakraTheme}>
      <CSSReset />
      <Router history={history}>
        <AppRouter />
      </Router>
    </ChakraProvider>
  );
}
