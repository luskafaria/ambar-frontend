import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider as ChakraProvider, CSSReset } from "@chakra-ui/react";
import { Provider } from "react-redux";

import ChakraTheme from "settings/theme/ChakraTheme";
import AppRouter from "components/AppRouter";

import store from "./store";

const App:React.FC = () => (
  <ChakraProvider theme={ChakraTheme}>
    <CSSReset />
    <Provider store={store}>
      <Router>
        <AppRouter />
      </Router>
    </Provider>
  </ChakraProvider>
);

export default App;
