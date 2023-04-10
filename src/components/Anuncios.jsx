import dormitorios from "../resource/icono_dormitorio.svg";
import estacionamiento from "../resource/icono_estacionamiento.svg";
import wc from "../resource/icono_wc.svg";
import "../styles/Anuncios.css";
import "../styles/Boton.css";
import { Boton } from "./Boton";

function Anuncios({ anuncios, children, mostrar }) {
  return (
    <section className="seccion contenedor">
      <h2>Casas y Depas en Venta</h2>

      <div className="contenedor-anuncios">
        {anuncios.map(({ imagen, titulo, texto, precio, ndormitorios, nestacionamiento, nbaños }) => {
          return (
            <div className="anuncio" key={titulo}>
              <img src={imagen} alt={titulo} />
              <div className="contenido-anuncio">
                <h3>{titulo}</h3>
                <p>{texto}</p>
                <p className="precio">{`$${precio}`}</p>

                <ul className="iconos-caracteristica">
                  <li>
                    <img src={wc} alt={`icono`} className="icono" />
                    <p>{nbaños}</p>
                  </li>
                  <li>
                    <img src={estacionamiento} alt={`icono`} className="icono" />
                    <p>{nestacionamiento}</p>
                  </li>
                  <li>
                    <img src={dormitorios} alt={`icono`} className="icono" />
                    <p>{ndormitorios}</p>
                  </li>
                </ul>
                {children}
              </div>
            </div>
          );
        })}
      </div>
      <div className={`alinear-derecha ${mostrar ? "" : "no-mostrar"}`}>
        <Boton link={"/"} texto={"Ver todos los anuncios"} botonColor={"verde"} />
      </div>
    </section>
  );
}

export { Anuncios };
