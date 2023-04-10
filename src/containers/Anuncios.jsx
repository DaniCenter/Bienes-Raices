import { Anuncios } from "../components/Anuncios";
import { Boton } from "../components/Boton";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import img1 from "../resource/anuncio1.jpg";
import img2 from "../resource/anuncio2.jpg";
import img3 from "../resource/anuncio3.jpg";
import img4 from "../resource/anuncio4.jpg";
import img5 from "../resource/anuncio5.jpg";
import img6 from "../resource/anuncio6.jpg";

function AnunciosCont() {
  const nav = [
    { url: "/src/html/nosotros.html", titulo: "Nosotros" },
    { url: "/src/html/anuncio.html", titulo: "Anuncio" },
    { url: "/src/html/blog.html", titulo: "Blog" },
    { url: "/src/html/contacto.html", titulo: "Contacto" },
  ];
  const anuncios = [
    {
      imagen: img1,
      titulo: "Casa de lujo de lago",
      texto: "Casa en el lago con exelente vista, acabados de lujo a un exelente precio",
      precio: 30000000,
      ndormitorios: 5,
      nestacionamiento: 3,
      nbaños: 5,
    },
    {
      imagen: img2,
      titulo: "Casa terminados de lujo",
      texto: "Casa con diseño modernos, asi como tecnologia inteligente y amueblada",
      precio: 20000000,
      ndormitorios: 5,
      nestacionamiento: 2,
      nbaños: 3,
    },
    {
      imagen: img3,
      titulo: "Casa con alberca",
      texto: "Casa con alberca y acabado de lujo en la ciudad, exelente oportunidad",
      precio: 30000000,
      ndormitorios: 6,
      nestacionamiento: 2,
      nbaños: 4,
    },
    {
      imagen: img4,
      titulo: "Casa de lujo de lago",
      texto: "Casa en el lago con exelente vista, acabados de lujo a un exelente precio",
      precio: 30000000,
      ndormitorios: 5,
      nestacionamiento: 3,
      nbaños: 5,
    },
    {
      imagen: img5,
      titulo: "Casa terminados de lujo",
      texto: "Casa con diseño modernos, asi como tecnologia inteligente y amueblada",
      precio: 20000000,
      ndormitorios: 5,
      nestacionamiento: 2,
      nbaños: 3,
    },
    {
      imagen: img6,
      titulo: "Casa con alberca",
      texto: "Casa con alberca y acabado de lujo en la ciudad, exelente oportunidad",
      precio: 30000000,
      ndormitorios: 6,
      nestacionamiento: 2,
      nbaños: 4,
    },
  ];
  return (
    <>
      <Header enlaces={nav} />
      <Anuncios anuncios={anuncios}>
        <Boton link={"/src/html/anuncioUnit.html"} texto={"Ver anuncio"} botonColor={"amarillo ocultar"} block={"block"} />
      </Anuncios>
      <Footer enlaces={nav} />
    </>
  );
}

export default AnunciosCont;
