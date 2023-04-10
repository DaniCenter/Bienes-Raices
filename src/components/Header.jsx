import React, { useEffect } from "react";
import img from "../resource/barras.svg";
import img2 from "../resource/dark-mode.svg";
import logo from "../resource/logo.svg";
import "../styles/Header.css";

function Header({ enlaces, clase, titulo }) {
  useEffect(() => {
    const prefiereDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefiereDarkMode) {
      document.body.classList.add("dark-mode");
    }
    document.querySelector(".mobile-menu").addEventListener("click", () => {
      document.querySelector(".navegacion").classList.toggle("mostrar");
    });
    document.querySelector(".dark-mode-boton").addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
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

          <div className="derecha">
            <img src={img2} alt="dark-mode" className="dark-mode-boton" />
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
        </div>
        {titulo ? <h1>{titulo}</h1> : ""}
      </div>
    </header>
  );
}

export { Header };
