"use client";

import React from "react";


export type SessionProviderValues = {
  id: string;
  firstname: string;
  lastname: string;
  phone: string | null;
  iat: number;
  iss: string;
  aud: string;
  exp: number;
}


export const SessionContext = React.createContext<SessionProviderValues>({} as SessionProviderValues);

type ClientSessionProviderProps = {
  children: React.ReactNode;
  user: SessionProviderValues;
};

// Must remain as client component, since react's context is only available at that level
// Documentation: https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#using-context-providers
export function SessionProvider({ children, user }: ClientSessionProviderProps) {

  return (
    <SessionContext.Provider value={{ ...user }}>
      {children}
    </SessionContext.Provider>
  );
}

