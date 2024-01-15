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
  // Type 'Dispatch<SetStateAction<string>>' is not assignable to type '() => Dispatch<SetStateAction<string>>'.
}

export const playerContext = React.createContext({} as SomeProps);
