import React from "react";

interface SomeProps {
  /* your interface */
  inputName: any;
  setInputName: any;
}

export const playerContext = React.createContext({} as SomeProps);
