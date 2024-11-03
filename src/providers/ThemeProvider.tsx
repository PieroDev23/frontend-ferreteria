"use client";

import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

function ThemeProvider({ children }: React.PropsWithChildren) {
  const theme = extendTheme({
    config: {
      initialColorMode: "light",
      cssVarPrefix: "ferreteria",
      useSystemColorMode: false,
    },
  });

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

export { ThemeProvider };



