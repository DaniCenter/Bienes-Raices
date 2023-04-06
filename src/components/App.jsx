import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import "../styles/App.css";
function App() {
  const nav = [
    { url: "nosotros.html", titulo: "Nosotros" },
    { url: "anuncio.html", titulo: "Anuncio" },
    { url: "blog.html", titulo: "Blog" },
    { url: "contacto.html", titulo: "Contacto" },
  ];

  return (
    <>
      <Header enlaces={nav} />
      <Main />
      <Footer enlaces={nav} />
    </>
  );
}

export default App;
