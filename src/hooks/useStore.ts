import { StoreContext } from "@app/providers/StoreProvider";
import React from "react";



export function useStore() {
  return React.useContext(StoreContext);
}