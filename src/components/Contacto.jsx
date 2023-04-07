import "../styles/Contacto.css";
import { Boton } from "./Boton";
function Contacto() {
  return (
    <section className="imagen-contacto">
      <h2>Encuentra la casa de tus sueños</h2>
      <p>Llena el formulario de contacto y un asesor se pondra en contacto contigo a la brevedad</p>
      <Boton link={"/"} texto={"Contactanos"} botonColor={"amarillo"} />
    </section>
  );
}

export { Contacto };
