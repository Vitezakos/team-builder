import React from "react";

type champion = {
  lane: string;
  name: string;
};

interface SomeProps {
  inputName: string;
  setInputName: (name: string) => void;
  champion: champion;
  setChampion: (champion: champion) => void;
  location: string;
  setLocation: (locationName: string) => void;
}

export const playerContext = React.createContext({} as SomeProps);
