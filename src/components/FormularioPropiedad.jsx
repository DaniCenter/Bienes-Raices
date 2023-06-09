import { useEffect, useState } from "react";
import "../styles/Boton.css";
import "../styles/Formulario.css";

function FormularioPropiedad() {
  const [error, setError] = useState([]);
  const [vendedores, setVendedores] = useState([]);

  useEffect(() => {
    fetch("/api/vendedores/listar.php")
      .then((response) => response.json())
      .then((responseData) => {
        setVendedores([...responseData.message]);
      })
      .catch((error) => console.log(error));
  }, []);

  function handelSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch("/api/propiedades/crear.php", { method: "POST", body: data })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.error) {
          setError([...responseData.message]);
        } else {
          setError([]);
          alert("Propiedad creada con exito");
          event.target.reset();
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <main className="contenedor seccion">
        <div className="error">
          {error.map((error) => {
            return (
              <p key={error} className="alerta">
                {error}
              </p>
            );
          })}
        </div>
        <h1>Crear</h1>
        <form className="formulario" onSubmit={handelSubmit} encType="multipart/form-data">
          <fieldset>
            <legend>Informacion General</legend>
            <label htmlFor="tituloPropieda">Titulo</label>
            <input name="tituloPropiedad" type="text" id="tituloPropiedad" placeholder="Titulo Propiedad" />
            <label htmlFor="precio">Precio</label>
            <input name="precioPropiedad" type="number" id="precio" placeholder="Precio" />
            <label htmlFor="imagen">Imagen</label>
            <input name="imgPropiedad" type="file" id="imagen" accept="image/jpeg, image/png" />
            <label htmlFor="descripcion">Descripccion</label>
            <textarea name="descripcion" id="descripcion"></textarea>
          </fieldset>
          <fieldset>
            <legend>Informacion Propiedad</legend>
            <label htmlFor="habitaciones">Habitaciones</label>
            <input name="nHabitaciones" type="number" id="habitaciones" placeholder="Ej: 3" min={1} max={9} />
            <label htmlFor="wc">Baños</label>
            <input name="nBaños" type="number" id="wc" placeholder="Ej: 3" min={1} max={9} />
            <label htmlFor="estacionamiento">Estacionamiento</label>
            <input name="nEstacionamientos" type="number" id="estacionamiento" placeholder="Ej: 3" min={1} max={9} />
          </fieldset>
          <fieldset>
            <legend>Vendedor</legend>
            <select name="idVendedor" id="">
              <option value="" defaultValue>
                --Seleccione--
              </option>
              {vendedores.map(({ id, nombre, apellido }) => {
                return (
                  <option key={id} value={id}>
                    {`${nombre} ${apellido}`}
                  </option>
                );
              })}
            </select>
          </fieldset>
          <input type="submit" className="boton-verde boton" value="Crear propiedad" />
        </form>
      </main>
    </>
  );
}

export { FormularioPropiedad };
