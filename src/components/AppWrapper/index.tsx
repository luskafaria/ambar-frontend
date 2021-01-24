import React, { useEffect, useMemo, useRef } from "react";
import { Flex } from "@chakra-ui/react";

import getBackgroundDayTime from "utils/getBackgroundByTime";

const AppWrapper: React.FC = ({
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const hour = new Date().getHours();

  const bgUrl = useMemo((): string => getBackgroundDayTime(hour), [
    hour,
  ]);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    containerRef.current.style.backgroundImage = bgUrl;
  }, [bgUrl]);

  return (
    <Flex
      ref={containerRef}
      className="app-wrapper"
      display="flex"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      bgColor="background"
      bgClip="border-box"
      bgPosition="center"
      bgAttachment="fixed"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      {children}
    </Flex>
  );
};

export default AppWrapper;
