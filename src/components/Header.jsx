import React from "react";
import logo from "../resource/logo.svg";
import "../styles/Header.css";

function Header({ enlaces, clase, titulo }) {
  return (
    <header className={`header ${clase ? clase : ""}`}>
      <div className="contenedor contenido-header">
        <div className="barra">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>

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
