import React from "react";

interface SomeProps {
  /* your interface */
  test: any;
  setTest: any;
  leagueName: any;
  setLeagueName: any;
}

export const testContext = React.createContext({} as SomeProps);
