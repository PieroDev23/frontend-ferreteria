import { HomeContext } from "@app/providers/HomeProvider";
import React from "react";


export function useHome() {
  return React.useContext(HomeContext);
}