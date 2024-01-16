import { useContext, useRef, useState } from "react";
import "./Header.css";
import { useOnClickOutside } from "usehooks-ts";
import { Outlet, useNavigate } from "react-router-dom";
import { playerContext } from "./utilities/useContext";

function Header() {
  const { setInputName } = useContext(playerContext);

  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const errorRef = useRef(null);

  useOnClickOutside(ref, () => setOpen((previousState) => !previousState));

  function openSearch() {
    setOpen((previousState) => !previousState);
  }

  const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if ((event.target as HTMLInputElement)?.value && event.key === "Enter") {
      navigate("/player");
      openSearch();
      setInputName((event.target as HTMLInputElement).value);
    } else if (
      !(event.target as HTMLInputElement)?.value &&
      event.key === "Enter"
    ) {
      (errorRef.current! as HTMLDivElement).classList.toggle("hidden");
    }
  };

  return (
    <div className="header-container">
      <button onClick={openSearch}>Search for player</button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Team builder
      </button>
      {open ? (
        <div className="search-container">
          <div ref={ref} className="background">
            <button className="server-btn">Euw</button>
            <input
              ref={inputRef}
              onKeyUp={handleKey}
              className="search-bar"
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
