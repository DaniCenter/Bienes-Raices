import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import icono1 from "../resource/icono1.svg";
import icono2 from "../resource/icono2.svg";
import icono3 from "../resource/icono3.svg";
import "../styles/App.css";
function App() {
  const nav = [
    { url: "nosotros.html", titulo: "Nosotros" },
    { url: "anuncio.html", titulo: "Anuncio" },
    { url: "blog.html", titulo: "Blog" },
    { url: "contacto.html", titulo: "Contacto" },
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
      <Header enlaces={nav} clase={"inicio"} titulo={"Venta de casas y departamentos exclusivos de lujo"} />
      <Main titulo={"Mas sobre nosotros"} cartas={cartas} />
      <Footer enlaces={nav} />
    </>
  );
}

export default App;
