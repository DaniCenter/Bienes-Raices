import "../styles/CardAnuncio.css";

function CardAnuncio({ titulo, img, texto, precio, iconos, descripcion }) {
  return (
    <>
      <main className="contenedor seccion contenido-centrado">
        <h1>{titulo}</h1>
        {descripcion && (
          <p className="informacion-meta">
            Escrito por: <span>{descripcion.autor}</span> el <span>{descripcion.fecha}</span>
          </p>
        )}
        <img src={img} alt={titulo} />
        <div className="resumen-propiedad">
          {precio && <p className="precio">{`$${precio}`}</p>}
          {iconos && (
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
          )}
          <p>{texto}</p>
        </div>
      </main>
    </>
  );
}

export { CardAnuncio };
