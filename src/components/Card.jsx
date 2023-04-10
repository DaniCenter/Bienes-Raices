import "../styles/Card.css";

function Card({ imagen, referencia, texto, titulo, clase }) {
  return (
    <div className="contenedor">
      <h1 className="titulo-card">{titulo}</h1>

      <div className={`contenido-${clase}`}>
        <div className="imagen">
          <img src={imagen} alt={referencia} />
        </div>
        <div className={`texto-${clase}`}>
          <blockquote>{referencia}</blockquote>
          <p>{texto}</p>
          <p>{texto}</p>
        </div>
      </div>
    </div>
  );
}
export { Card };
