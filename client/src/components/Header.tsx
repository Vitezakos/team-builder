import { useRef, useState } from "react";
import "./Header.css";
import { useOnClickOutside } from "usehooks-ts";
import { Outlet, useNavigate } from "react-router-dom";

function Header() {
  function openSearch() {
    setOpen((previousState) => !previousState);
  }
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setOpen((previousState) => !previousState));
  console.log("header was rendered");
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const errorRef = useRef(null);
  const handleKey = (event: any) => {
    if ((event.target as HTMLInputElement)?.value) {
      navigate("/player");
      openSearch();
    } else {
      console.log(
        (errorRef.current! as HTMLDivElement).classList.toggle("hidden")
      );
    }
  };
  return (
    <div className="headerContainer">
      <button onClick={openSearch}>Search for player</button>
      <button>Team builder</button>
      {open ? (
        <div className="searchContainer">
          <div ref={ref} className="background">
            <button className="serverBtn">Euw</button>
            <input
              ref={inputRef}
              onKeyUp={handleKey}
              className="searchBar"
              type="text"
              placeholder="Summoner name..."
            />
            <div ref={errorRef} className="errorMessage hidden">
              Error, can't be empty
            </div>
          </div>
        </div>
      ) : null}
      <Outlet />
    </div>
  );
}

export { Header };
