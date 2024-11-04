import { SingleProductContext } from "@app/providers/SingleProductProvider";
import React from "react";



export function useSingleProduct() {
  return React.createContext(SingleProductContext);
}