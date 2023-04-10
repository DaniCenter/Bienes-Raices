import React, { useEffect } from "react";
import img from "../resource/barras.svg";
import logo from "../resource/logo.svg";
import "../styles/Header.css";

function Header({ enlaces, clase, titulo }) {
  useEffect(() => {
    document.querySelector(".mobile-menu").addEventListener("click", () => {
      document.querySelector(".navegacion").classList.toggle("mostrar");
    });
  }, []);

  return (
    <header className={`header ${clase ? clase : ""}`}>
      <div className="contenedor contenido-header">
        <div className="barra">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
          <div className="mobile-menu">
            <img src={img} alt="barras svg" />
          </div>

          <nav className="navegacion">
            {enlaces.map(({ url, titulo }) => {
              return (
                <a href={url} key={titulo}>
                  {titulo}
                </a>
              );
            })}
          </nav>
        </div>
        {titulo ? <h1>{titulo}</h1> : ""}
      </div>
    </header>
  );
}

export { Header };
