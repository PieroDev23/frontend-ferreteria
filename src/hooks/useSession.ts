import { SessionContext } from "@app/providers/SessionProvider";
import React from "react";



export function useSession() {
  return React.useContext(SessionContext);
}