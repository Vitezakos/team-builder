import { useRef, useState } from "react";
import "./Header.css";
import { useOnClickOutside } from "usehooks-ts";
import { Outlet, useNavigate } from "react-router-dom";
import { useProfileState } from "./useProfileState";

function Header() {
  const { profileName, setprofileName } = useProfileState();
  function openSearch() {
    setOpen((previousState) => !previousState);
  }
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setOpen((previousState) => !previousState));
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const errorRef = useRef(null);
  const handleKey = (event: any) => {
    if ((event.target as HTMLInputElement)?.value && event.key === "Enter") {
      navigate("/player");
      openSearch();
      setprofileName(event.target.value);
      console.log(profileName);
    } else if (
      !(event.target as HTMLInputElement)?.value &&
      event.key === "Enter"
    ) {
      (errorRef.current! as HTMLDivElement).classList.toggle("hidden");
    }
  };
  return (
    <div className="headerContainer">
      <button onClick={openSearch}>Search for player</button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Team builder
      </button>
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
