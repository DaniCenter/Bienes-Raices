function Boton({ link, texto, botonColor }) {
  return (
    <a href={link} className={`boton ${botonColor ? `boton-${botonColor}` : ""}`}>
      {texto}
    </a>
  );
}

export { Boton };
