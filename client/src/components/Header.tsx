import "./Header.css";

function Header() {
  function openSearch() {
    document.querySelector(".searchContainer")?.classList.toggle("hidden");
  }
  return (
    <div className="headerContainer">
      <button onClick={openSearch}>Search for player</button>
      <button>Team builder</button>
      <div className="searchContainer hidden">
        <div className="background">
          <button className="serverBtn">Euw</button>
          <input
            className="searchBar"
            type="text"
            placeholder="Summoner name..."
          />
        </div>
      </div>
    </div>
  );
}

export { Header };
