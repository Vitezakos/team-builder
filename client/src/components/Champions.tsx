function Champions({ champ }: any) {
  return (
    <button className={champ.lane}>
      <img src={`../src/icons/${champ.name}.png`} />
    </button>
  );
}

export { Champions };
