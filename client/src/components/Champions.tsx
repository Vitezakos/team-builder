import Top from "../icons/Position_Plat-Top.png";
import Jungle from "../icons/Position_Plat-Jungle.png";
import Mid from "../icons/Position_Plat-Mid.png";
import Bot from "../icons/Position_Plat-Bot.png";
import Support from "../icons/Position_Plat-Support.png";
import { useRef, useState, useContext } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { playerContext } from "./utilities/useContext";
import "./Champions.css";

function Champions({ champ }: any) {
  const selectionRef = useRef(null);
  const [open, setOpen] = useState(false);

  useOnClickOutside(selectionRef, () =>
    setOpen((previousState) => !previousState)
  );
  const handleClick = () => {
    setOpen(true);
  };
  const { setChampion } = useContext(playerContext);
  const handleClickOnChampion = (lane: string) => {
    setChampion({ lane, name: champ.name });
    setOpen(false);
  };
  return (
    <div className="btn-container">
      {open ? (
        <div ref={selectionRef} className="selection">
          <button
            onClick={() => {
              handleClickOnChampion("top");
            }}
          >
            <img src={Top} />
          </button>
          <button
            onClick={() => {
              handleClickOnChampion("jungle");
            }}
          >
            <img src={Jungle} />
          </button>
          <button
            onClick={() => {
              handleClickOnChampion("mid");
            }}
          >
            <img src={Mid} />
          </button>
          <button
            onClick={() => {
              handleClickOnChampion("bot");
            }}
          >
            <img src={Bot} />
          </button>
          <button
            onClick={() => {
              handleClickOnChampion("supp");
            }}
          >
            <img src={Support} />
          </button>
        </div>
      ) : null}
      <button className={champ.name} onClick={handleClick}>
        <img src={`../src/icons/${champ.name}.png`} />
      </button>
    </div>
  );
}

export { Champions };
