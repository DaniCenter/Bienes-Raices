import { Footer } from "../components/Footer";
import { FormularioPropiedad } from "../components/FormularioPropiedad";
import { Header } from "../components/Header";

function FormularioPropiedadCont() {
  const nav = [
    { url: "/src/html/nosotros.html", titulo: "Nosotros" },
    { url: "/src/html/anuncio.html", titulo: "Anuncio" },
    { url: "/src/html/blog.html", titulo: "Blog" },
    { url: "/src/html/contacto.html", titulo: "Contacto" },
  ];

  return (
    <>
      <Header enlaces={nav} />
      <FormularioPropiedad />;
      <Footer enlaces={nav} />
    </>
  );
}

export default FormularioPropiedadCont;
