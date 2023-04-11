import "../styles/Boton.css";
import "../styles/Formulario.css";

function FormularioPropiedad() {
  return (
    <>
      <main className="contenedor seccion">
        <h1>Crear</h1>
        <form action="" className="formulario">
          <fieldset>
            <legend>Informacion General</legend>
            <label htmlFor="tituloPropieda">Titulo</label>
            <input type="text" id="tituloPropiedad" placeholder="Titulo Propiedad" />
            <label htmlFor="precio">Precio</label>
            <input type="number" id="precio" placeholder="Precio" />
            <label htmlFor="imagen">Imagen</label>
            <input type="file" id="imagen" accept="image/jpeg, image/png" />
            <label htmlFor="descripcion">Descripccion</label>
            <textarea name="descripcion" id="descripcion"></textarea>
          </fieldset>
          <fieldset>
            <legend>Informacion Propiedad</legend>
            <label htmlFor="habitaciones">Habitaciones</label>
            <input type="number" id="habitaciones" placeholder="Ej: 3" min={1} max={9} />
            <label htmlFor="wc">Baños</label>
            <input type="number" id="wc" placeholder="Ej: 3" min={1} max={9} />
            <label htmlFor="estacionamiento">Estacionamiento</label>
            <input type="number" id="estacionamiento" placeholder="Ej: 3" min={1} max={9} />
          </fieldset>
          <fieldset>
            <legend>Vendedor</legend>
            <select name="" id="">
              <option value="1">Juan</option>
              <option value="2">Karen</option>
            </select>
          </fieldset>
          <input type="submit" className="boton-verde boton" value="Crear propiedad" />
        </form>
      </main>
    </>
  );
}

export { FormularioPropiedad };
