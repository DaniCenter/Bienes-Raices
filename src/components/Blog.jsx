function Blog({ blogs }) {
  return (
    <div className="contenedor seccion">
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
      </section>
      <section className="testimoniales">
        <h3>Testimoniales</h3>
        <div className="testimonial">
          <blockquote>
            El personal se comporto de una exelente forma, muy buena antencion y la casa que me ofrecieron cumple con mis espectativas.
          </blockquote>
          <p>Daniel Vilca</p>
        </div>
      </section>
    </div>
  );
}

export { Blog };
