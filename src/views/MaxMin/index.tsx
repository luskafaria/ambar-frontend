import { Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Display from "components/Display";
import { RootState } from "store";
import { getMaxMin } from "store/actions/weatherActions";
import Temperature from "components/Temperature";
import useNavigate from "hooks/useNavigate";
import { ROOT_PAGE_PATH } from "routes";

const MaxMin: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const weatherData = useSelector((state: RootState) => state.weather.data);
  const maxCity = useSelector((state: RootState) => state.weather.max);
  const minCity = useSelector((state: RootState) => state.weather.min);

  useEffect(() => {
    if (weatherData.length === 0) {
      navigate(ROOT_PAGE_PATH)();
    }

    dispatch(getMaxMin());
  }, [
    navigate,
    dispatch,
    weatherData,
  ]);

  return (
    <Display minH={400}>
      <Temperature
        title="temperatura máxima"
        city={maxCity?.name}
        temperature={maxCity?.daily[0]?.temp?.max}
      />

      <Temperature
        title="temperatura mínima"
        city={minCity?.name}
        temperature={minCity?.daily[0]?.temp?.min}
      />

      <Button onClick={navigate(ROOT_PAGE_PATH)}>
        Voltar
      </Button>
    </Display>
  );
};

export default MaxMin;
