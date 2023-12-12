import { playerContext } from "./utilities/useContext";
import { useContext } from "react";

function TeamComp() {
  const { topName } = useContext(playerContext);
  const { jgName } = useContext(playerContext);
  const { midName } = useContext(playerContext);
  const { botName } = useContext(playerContext);
  const { suppName } = useContext(playerContext);

  return (
    <div className="teamcompWrapper">
      <div className="top">
        <div>Your teamcomp:</div>
        <div>
          <ul className="teamIcons">
            <li>
              <img src={`../src/icons/${topName}.png`} />
            </li>
            <li>
              <img src={`../src/icons/${jgName}.png`} />
            </li>
            <li>
              <img src={`../src/icons/${midName}.png`} />
            </li>
            <li>
              <img src={`../src/icons/${botName}.png`} />
            </li>
            <li>
              <img src={`../src/icons/${suppName}.png`} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export { TeamComp };
