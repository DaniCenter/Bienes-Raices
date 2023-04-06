import React from "react";
import logo from "../resource/logo.svg";

function Header({ enlaces }) {
  return (
    <header className="header">
      <div className="contenedor contenido-header">
        <div className="barra">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>

          <nav className="navegacion">
            {enlaces.map(({ url, titulo }) => {
              return <a href={url}>{titulo}</a>;
            })}
          </nav>
        </div>
        <h1>Venta de casas y departamentos exlucisvos</h1>
      </div>
    </header>
  );
}

export { Header };
