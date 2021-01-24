import { City } from "store/types";

export interface ButtonsContainerProps {
  onClick: (city: City) => void;
}
