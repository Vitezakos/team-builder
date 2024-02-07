import { playerContext } from "./utilities/useContext";
import { useContext, useEffect, useRef, useState } from "react";
import "./TeamComp.css";

function TeamComp() {
  const [topName, setTopName] = useState("K'sante");
  const [jgName, setJgTopName] = useState("Kindred");
  const [midName, setMidTopName] = useState("Ahri");
  const [botName, setBotTopName] = useState("Ezreal");
  const [suppName, setSuppTopName] = useState("Yuumi");
  const { champion } = useContext(playerContext);

  const topRef = useRef(null);
  const jgRef = useRef(null);
  const midRef = useRef(null);
  const botRef = useRef(null);
  const suppRef = useRef(null);

  useEffect(() => {
    let timeOutId: ReturnType<typeof setTimeout> = setTimeout(() => {});
    const timeOut = (lane: HTMLDivElement) => {
      lane.classList.add("cover");
      timeOutId = setTimeout(() => {
        lane.classList.remove("cover");
      });
    };

    switch (champion.lane) {
      case "top":
        setTopName(champion.name);
        const top = topRef.current! as HTMLDivElement;
        top.classList.add("cover");
        timeOut(top);
        break;
      case "jungle":
        setJgTopName(champion.name);
        const jg = jgRef.current! as HTMLDivElement;
        jg.classList.add("cover");
        timeOut(jg);
        break;
      case "mid":
        setMidTopName(champion.name);
        const mid = midRef.current! as HTMLDivElement;
        mid.classList.add("cover");
        timeOut(mid);
        break;
      case "bot":
        setBotTopName(champion.name);
        const bot = botRef.current! as HTMLDivElement;
        bot.classList.add("cover");
        timeOut(bot);
        break;
      default:
        setSuppTopName(champion.name);
        const supp = suppRef.current! as HTMLDivElement;
        supp.classList.add("cover");
        timeOut(supp);
        break;
    }

    return () => {
      clearTimeout(timeOutId);
    };
  }, [champion]);

  return (
    <div className="teamcomp-wrapper">
      <div className="top">
        <div>
          <ul className="team-icons">
            <li>
              <img
                ref={topRef}
                className="team-top"
                src={`../src/icons/${topName}.png`}
              />
            </li>
            <li>
              <img
                ref={jgRef}
                className="team-jg"
                src={`../src/icons/${jgName}.png`}
              />
            </li>
            <li>
              <img
                ref={midRef}
                className="team-mid"
                src={`../src/icons/${midName}.png`}
              />
            </li>
            <li>
              <img
                ref={botRef}
                className="team-bot"
                src={`../src/icons/${botName}.png`}
              />
            </li>
            <li>
              <img
                ref={suppRef}
                className="team-supp"
                src={`../src/icons/${suppName}.png`}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export { TeamComp };
