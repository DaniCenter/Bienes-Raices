function Boton({ link, texto, botonColor, block }) {
  return (
    <a href={link} className={`boton ${botonColor ? `boton-${botonColor}` : ""} ${block ? block : ""}`}>
      {texto}
    </a>
  );
}

export { Boton };
