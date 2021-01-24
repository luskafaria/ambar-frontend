import { Text, VStack } from "@chakra-ui/react";
import React from "react";

import { TemperatureProps } from "./types";

const Temperature: React.FC<TemperatureProps> = ({
  title,
  city,
  temperature,
}) => {
  const parsedTemperature = temperature && Math.round(temperature);

  return (
    <VStack spacing={2}>

      {
        city ? (
          <Text
            color="white"
            fontSize={16}
            textTransform="capitalize"
          >
            {`${title}: `}
            <Text
              as="span"
              fontWeight="500"
              fontSize="18px"
            >
              {city}
            </Text>
          </Text>
        ) : (
          <Text
            color="white"
            fontSize={16}
            textTransform="capitalize"
          >
            {`${title}:`}
          </Text>
        )
      }

      <Text
        color="white"
        fontWeight="500"
        fontSize={32}
      >
        {`${parsedTemperature}°C`}
      </Text>
    </VStack>
  );
};

export default Temperature;
