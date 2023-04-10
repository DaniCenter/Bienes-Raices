import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import icono1 from "../resource/icono1.svg";
import icono2 from "../resource/icono2.svg";
import icono3 from "../resource/icono3.svg";
import img from "../resource/nosotros.jpg";

function Nosotros() {
  const nav = [
    { url: "/src/html/nosotros.html", titulo: "Nosotros" },
    { url: "/src/html/anuncio.html", titulo: "Anuncio" },
    { url: "/src/html/blog.html", titulo: "Blog" },
    { url: "/src/html/contacto.html", titulo: "Contacto" },
  ];
  const cartas = [
    {
      imagen: icono1,
      titulo: "Seguridad",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus velit, tristique vitae nunc sed, tempor cursus dolor. Nullam sodales pretium neque, et faucibus ligula hendrerit non.",
    },
    {
      imagen: icono2,
      titulo: "Precio",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus velit, tristique vitae nunc sed, tempor cursus dolor. Nullam sodales pretium neque, et faucibus ligula hendrerit non.",
    },
    {
      imagen: icono3,
      titulo: "A Tiempo",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus velit, tristique vitae nunc sed, tempor cursus dolor. Nullam sodales pretium neque, et faucibus ligula hendrerit non.",
    },
  ];
  return (
    <>
      <Header enlaces={nav} />
      <Card
        clase="nosotros"
        titulo="Conoce mas sobre nosotros"
        imagen={img}
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a diam nisl. Pellentesque ultricies tempus turpis, sed cursus sem convallis vitae. Vestibulum neque tortor, posuere vel blandit sed, lobortis quis ante. Ut porttitor et mauris eu eleifend. In eu erat eu elit porttitor imperdiet. Phasellus lectus dui, viverra blandit accumsan nec, imperdiet ut enim. Suspendisse suscipit gravida dui a sollicitudin. Curabitur in erat placerat, tincidunt turpis eu, tristique justo.

Donec bibendum neque tortor, quis venenatis lectus malesuada vel. Ut ipsum massa, dapibus blandit nulla eget, rhoncus pretium dolor. Suspendisse sed odio eget odio porta volutpat eget non justo."
        referencia="25 Años de experiencia"
      />
      <Main titulo={"Mas sobre nosotros"} cartas={cartas} />
      <Footer enlaces={nav} />
    </>
  );
}

export default Nosotros;
