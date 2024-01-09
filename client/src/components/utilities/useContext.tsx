import React from "react";

interface SomeProps {
  inputName: string;
  setInputName(arg: string): any;
  topName: string;
  setTopName(arg: string): any;
  jgName: string;
  setJgName(arg: string): any;
  midName: string;
  setMidName(arg: string): any;
  botName: string;
  setBotName(arg: string): any;
  suppName: string;
  setSuppName(arg: string): any;
}

export const playerContext = React.createContext({} as SomeProps);
