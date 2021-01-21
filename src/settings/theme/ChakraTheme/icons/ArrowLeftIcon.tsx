import * as React from "react";
import { IconProps } from "@chakra-ui/icons";

import ArrowRightUpIcon from "./ArrowRightUpIcon";

const ArrowLeftIcon: React.FC<IconProps> = (props) => (
  <ArrowRightUpIcon
    {...props}
    transform="rotate(-135deg)"
  />
);

export default ArrowLeftIcon;
