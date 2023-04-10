import "../styles/CardAnuncio.css";

function CardAnuncio({ titulo, img, precio, iconos, texto }) {
  return (
    <>
      <main className="contenedor seccion contenido-centrado">
        <h1>{titulo}</h1>
        <img src={img} alt={titulo} />
        <div className="resumen-propiedad">
          <p className="precio">{`$${precio}`}</p>
          <ul className="iconos-caracteristicas">
            {iconos.map(({ imagen, cantidad }) => {
              return (
                <li key={cantidad}>
                  <img src={imagen} />
                  <p>{cantidad}</p>
                </li>
              );
            })}
          </ul>
          <p>{texto}</p>
        </div>
      </main>
    </>
  );
}
export { CardAnuncio };
