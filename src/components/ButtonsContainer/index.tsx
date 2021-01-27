import React from "react";
import { Button, Stack, Text } from "@chakra-ui/react";

import { CITIES_LIST } from "constants/cities";

import { ButtonsContainerProps } from "./types";

const ButtonsContainer: React.FC<ButtonsContainerProps> = ({
  onClick,
}) => (
  <Stack
    direction={{ base: "column", md: "column", lg: "row" }}
    spacing={{ base: 6, md: 8 }}
  >
    {
      CITIES_LIST.map(city => (
        <Button
          key={city.id}
          onClick={() => onClick(city)}
          type="button"
        >
          <Text fontFamily="body">{city.name}</Text>
        </Button>
      ))
    }
  </Stack>
);

export default ButtonsContainer;
