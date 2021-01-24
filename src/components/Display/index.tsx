import { Stack, StackProps } from "@chakra-ui/react";
import React from "react";

const Display: React.FC<StackProps> = ({
  children,
  ...props
}) => (
  <Stack
    display="flex"
    flexDir="column"
    spacing={{ base: 6, md: 8 }}
    w={{ base: "90%", sm: "70%" }}
    p={{ base: 6, md: 10 }}
    alignItems="center"
    bgColor="rgba(150, 150, 150, 0.1)"
    borderRadius={6}
    boxShadow="10px 10px 20px -15px rgba(0,0,0,0.6)"
    style={{
      backdropFilter: "blur(5px)",
    }}
    {...props}
  >
    {children}
  </Stack>
);

export default Display;
