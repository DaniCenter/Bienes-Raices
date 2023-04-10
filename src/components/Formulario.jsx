import "../styles/Boton.css";
import "../styles/Formulario.css";

function Formulario({ titulo, img }) {
  return (
    <main className="contenedor seccion">
      <h1 className="titulo">{titulo}</h1>
      <img src={img} alt={titulo} />
      <h2 className="titulo">Llene el formulario de contacto</h2>
      <form action="" className="formulario">
        <fieldset>
          <legend>Informacion personal</legend>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" placeholder="Tu nombre" id="nombre" />
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Tu email" id="email" />
          <label htmlFor="telefono">Telefono</label>
          <input type="tel" placeholder="Tu telefono" id="telefono" />
          <label htmlFor="mensaje">Mensaje</label>
          <textarea name="mensaje" id="mensaje"></textarea>
        </fieldset>

        <fieldset>
          <legend>Informacion sobre la propiedad</legend>
          <label htmlFor="opciones">Vende o Compra</label>
          <select name="" id="opciones">
            <option value="" disabled selected>
              --Seleccione--
            </option>
            <option value="compra">Compra</option>
            <option value="vende">Vende</option>
          </select>
          <label htmlFor="presupuesto">Precio o Presupuesto</label>
          <input type="number" placeholder="Tu precio o presupuesto" id="presupuesto" />
        </fieldset>
        <fieldset>
          <legend>Informacion sobre la propiedad</legend>
          <p>Como desea ser contactado</p>
          <div className="forma-contacto">
            <label htmlFor="contactar-telefono">Telefono</label>
            <input name="contacto" type="radio" value="telefono" id="contactar-telefono" />
            <label htmlFor="contactar-email">Email</label>
            <input name="contacto" type="radio" value="email" id="contactar-email" />
          </div>
          <p>Si eligio telefono, elija la fecha y hora</p>
          <label htmlFor="fecha">Fecha</label>
          <input type="date" id="fecha" />
          <label htmlFor="hora">Email</label>
          <input type="time" id="hora" min="09:00" max="18:00" />
        </fieldset>

        <input type="submit" className="boton-verde boton" />
      </form>
    </main>
  );
}

export { Formulario };
