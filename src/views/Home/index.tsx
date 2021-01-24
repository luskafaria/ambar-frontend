import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Flex, Spinner } from "@chakra-ui/react";

import { CITIES_LIST } from "constants/cities";
import { RootState } from "store";
import { getWeather, setLoading, setOpened } from "store/actions/weatherActions";
import Weather from "components/Weather";
import { City } from "store/types";
import ButtonsContainer from "components/ButtonsContainer";
import useNavigate from "hooks/useNavigate";
import { MAXMIN_PAGE_PATH } from "routes";
import Display from "components/Display";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedCity = useSelector((state: RootState) => state.weather.opened);
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const dataLoading = useSelector((state: RootState) => state.weather.loading);

  const selectedCityRef = useRef<City>({} as City);

  useEffect(() => {
    if (weatherData.length === 0) {
      return;
    }

    const city = weatherData.find(weather => (
      weather.lat === selectedCityRef.current?.lat
      && weather.lon === selectedCityRef.current?.lon
    ));

    if (!city) {
      return;
    }

    const namedCity = CITIES_LIST.find(item => (
      item.lat === city?.lat
      && item.lon === city?.lon
    ));

    city.name = namedCity?.name;

    dispatch(setOpened(city));
  }, [
    dispatch,
    weatherData,
  ]);

  const handleCityClick = useCallback(({ lat, lon }: City) => {
    dispatch(setLoading());
    dispatch(getWeather(lat, lon));

    selectedCityRef.current = { lat, lon };
  }, [
    dispatch,
  ]);

  const shouldRenderMaxMinButton = weatherData.length !== 0 && !dataLoading;

  return (
    <Display minH={600}>
      <ButtonsContainer onClick={handleCityClick} />

      {
        !dataLoading ? (
          <Weather
            isOpened={!!selectedCity}
            cityWeatherData={selectedCity}
          />

        ) : (
          <Flex
            flex="1"
            justifyContent="center"
            alignItems="center"
          >
            <Spinner
              size="lg"
              color="secondary.100"
              emptyColor="white"
            />
          </Flex>
        )
      }

      {
        shouldRenderMaxMinButton && (
          <Button
            type="button"
            isDisabled={weatherData.length === 0}
            onClick={navigate(MAXMIN_PAGE_PATH)}
          >
            Ver Máxima e Mínima
          </Button>
        )
      }
    </Display>
  );
};

export default Home;
