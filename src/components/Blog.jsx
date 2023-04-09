function Blog({ blogs }) {
  return (
    <section className="blog">
      <h3>Nuestro Blog</h3>
      {blogs.map(({ imagen, titulo, fecha, autor, texto }) => {
        return (
          <article className="entrada-blog">
            <div className="imagen">
              <img src={imagen} alt={titulo} />
            </div>
            <div className="texto-entrada">
              <a href="/entrada.html">
                <h4>{titulo}</h4>
                <p>
                  Escrito el <span>{fecha}</span> por: <span>{autor}</span>
                </p>
                <p>{texto}</p>
              </a>
            </div>
          </article>
        );
      })}
      {/* <article className="entrada-blog">
        <div className="imagen">
          <img src="../resource/blog1.jpg" alt="blog1" />
        </div>
        <div className="texto-entrada">
          <a href="entrada.html">
            <h4>Terraza en el techo de tu casa</h4>
            <p>
              Escrito el: <span>20/20/2022</span> por: <span>Admin</span>
            </p>
            <p>Conejos para construir una terraza en el techo de tu casa con los mejores materiales y ahorrando dinero</p>
          </a>
        </div>
      </article> */}
    </section>
  );
}

export { Blog };
