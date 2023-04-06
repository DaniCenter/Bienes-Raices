import "../styles/Principal.css";

function Main({ titulo, cartas }) {
  return (
    <main className="contenedor seccion">
      <h1>{titulo}</h1>
      <div className="icono-nosotros">
        {cartas.map(({ imagen, titulo, texto }) => {
          return (
            <div className="icon" key={titulo}>
              <img src={imagen} alt={titulo} />
              <h3>{titulo}</h3>
              <p>{texto}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export { Main };
