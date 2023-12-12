import React from "react";

interface SomeProps {
  /* your interface */
  inputName: any;
  setInputName: any;
  topName: any;
  setTopName: any;
  jgName: any;
  setJgName: any;
  midName: any;
  setMidName: any;
  botName: any;
  setBotName: any;
  suppName: any;
  setSuppName: any;
}

export const playerContext = React.createContext({} as SomeProps);
