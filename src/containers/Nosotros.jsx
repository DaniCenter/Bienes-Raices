import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

function Nosotros() {
  const nav = [
    { url: "/src/html/nosotros.html", titulo: "Nosotros" },
    { url: "/src/html/anuncio.html", titulo: "Anuncio" },
    { url: "/src/html/blog.html", titulo: "Blog" },
    { url: "/src/html/contacto.html", titulo: "Contacto" },
  ];
  return (
    <>
      <Header enlaces={nav} />
      <Footer enlaces={nav} />
    </>
  );
}

export default Nosotros;
