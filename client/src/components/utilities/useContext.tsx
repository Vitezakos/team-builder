import React from "react";

type champion = {
  lane: string;
  name: string;
};

interface SomeProps {
  inputName: string;
  setInputName(arg: string): any;
  champion: champion;
  setChampion(arg: champion): any;
}

export const playerContext = React.createContext({} as SomeProps);
