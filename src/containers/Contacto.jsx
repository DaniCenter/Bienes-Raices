import { Footer } from "../components/Footer";
import { Formulario } from "../components/Formulario";
import { Header } from "../components/Header";
import img from "../resource/destacada2.jpg";
function Contacto() {
  const nav = [
    { url: "/src/html/nosotros.html", titulo: "Nosotros" },
    { url: "/src/html/anuncio.html", titulo: "Anuncio" },
    { url: "/src/html/blog.html", titulo: "Blog" },
    { url: "/src/html/contacto.html", titulo: "Contacto" },
  ];

  return (
    <>
      <Header enlaces={nav} />
      <Formulario titulo="Contacto" img={img} />;
      <Footer enlaces={nav} />
    </>
  );
}

export default Contacto;
