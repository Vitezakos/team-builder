import { useRef, useState } from "react";
import "./Header.css";
import { useOnClickOutside } from "usehooks-ts";

function Header() {
  function openSearch() {
    setOpen((previousState) => !previousState);
  }
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setOpen((previousState) => !previousState));
  return (
    <div className="headerContainer">
      <button onClick={openSearch}>Search for player</button>
      <button>Team builder</button>
      {open ? (
        <div className="searchContainer">
          <div ref={ref} className="background">
            <button className="serverBtn">Euw</button>
            <input
              className="searchBar"
              type="text"
              placeholder="Summoner name..."
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export { Header };
