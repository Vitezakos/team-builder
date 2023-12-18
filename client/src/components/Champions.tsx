import Top from "../icons/Position_Plat-Top.png";
import Jungle from "../icons/Position_Plat-Jungle.png";
import Mid from "../icons/Position_Plat-Mid.png";
import Bot from "../icons/Position_Plat-Bot.png";
import Support from "../icons/Position_Plat-Support.png";
import { useRef, useState, useContext } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { playerContext } from "./utilities/useContext";

function Champions({ champ }: any) {
  const selectionRef = useRef(null);
  const [open, setOpen] = useState(false);
  useOnClickOutside(selectionRef, () =>
    setOpen((previousState) => !previousState)
  );
  const handleClick = () => {
    setOpen(true);
  };
  const { setTopName } = useContext(playerContext);
  const handleTopLane = () => {
    setTopName(champ.name);
    setOpen(false);
  };
  const { setJgName } = useContext(playerContext);
  const handleJgLane = () => {
    setJgName(champ.name);
    setOpen(false);
  };
  const { setMidName } = useContext(playerContext);
  const handleMidLane = () => {
    setMidName(champ.name);
    setOpen(false);
  };
  const { setBotName } = useContext(playerContext);
  const handleBotLane = () => {
    setBotName(champ.name);
    setOpen(false);
  };
  const { setSuppName } = useContext(playerContext);
  const handleSuppLane = () => {
    setSuppName(champ.name);
    setOpen(false);
  };
  return (
    <div className="btn-container">
      {open ? (
        <div ref={selectionRef} className="selection">
          <button onClick={handleTopLane}>
            <img src={Top} />
          </button>
          <button onClick={handleJgLane}>
            <img src={Jungle} />
          </button>
          <button onClick={handleMidLane}>
            <img src={Mid} />
          </button>
          <button onClick={handleBotLane}>
            <img src={Bot} />
          </button>
          <button onClick={handleSuppLane}>
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
