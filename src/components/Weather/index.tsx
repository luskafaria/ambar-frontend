import React from "react";
import {
  HStack, Image, Stack, Text,
} from "@chakra-ui/react";

import Temperature from "components/Temperature";
import getIconUrl from "utils/getIconUrl";

import { WeatherProps } from "./types";

const Weather: React.FC<WeatherProps> = ({
  cityWeatherData,
  isOpened = false,
}) => {
  const iconUrl = getIconUrl(cityWeatherData?.current?.weather[0]?.icon);

  return (
    isOpened ? (
      <Stack
        width="100%"
        p={{ base: 6, md: 10 }}
        borderRadius={6}
        bgColor="rgba(255, 255, 255, 0.1)"
        boxShadow="5px 5px 10px -8px rgba(0,0,0,0.6)"
        style={{
          backdropFilter: "blur(20px)",
        }}
        spacing={8}
      >
        <HStack spacing={3}>
          <Text
            color="white"
            fontSize={{ sm: "32px" }}
            fontWeight="500"
            fontFamily="body"
          >
            Cidade:
          </Text>

          <Text
            color="white"
            fontSize={{ sm: "40px" }}
            fontWeight="500"
            fontFamily="body"
          >
            {cityWeatherData?.name}
          </Text>
        </HStack>

        <HStack
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src={iconUrl}
            width="50px"
            height="50px"
          />

          <Text
            textTransform="capitalize"
            fontSize="32px"
            fontWeight="500"
            color="white"
            fontFamily="body"
          >

            {cityWeatherData?.current?.weather[0]?.description}
          </Text>
        </HStack>

        <Stack
          spacing={8}
          alignItems="center"
          justifyContent="center"
          direction={{ base: "column", md: "row" }}
        >

          <Temperature
            title="temperatura atual"
            temperature={cityWeatherData?.current?.temp}
          />

          <Temperature
            title="temperatura máxima"
            temperature={cityWeatherData?.daily[0]?.temp?.max}
          />

          <Temperature
            title="temperatura mínima"
            temperature={cityWeatherData?.daily[0]?.temp?.min}
          />
        </Stack>
      </Stack>
    ) : (
      <div />
    )
  );
};

export default Weather;
