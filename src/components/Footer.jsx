function Footer({ enlaces }) {
  return (
    <footer className="footer seccion">
      <div className="contenedor contenedor-footer">
        <nav className="navegacion">
          {enlaces.map(({ url, titulo }) => {
            return <a href={url}>{titulo}</a>;
          })}
        </nav>
      </div>

      <p className="copyright">Todos los derechos reservados</p>
    </footer>
  );
}

export { Footer };
