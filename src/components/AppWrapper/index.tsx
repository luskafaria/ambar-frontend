import React from "react";
import { Flex } from "@chakra-ui/react";

import { useRouteProps } from "contexts/route";
import Header from "components/Header";
import Footer from "components/Footer";

/**
 * App wrapper. Can be used to render Header, Footer, etc.
 * @param param0 options
 */
const AppWrapper: React.FC = ({
  children,
}) => {
  const {
    showHeader,
    showFooter,
  } = useRouteProps();

  return (
    <Flex
      display="block"
      minHeight="100vh"
      backgroundColor="background"
      className="app-wrapper"
    >

      {
        showHeader && (
          <Header />
        )
      }

      {children}

      {
        showFooter && (
          <Footer />
        )
      }
    </Flex>
  );
};

export default AppWrapper;
