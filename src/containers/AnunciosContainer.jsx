import { CardAnuncio } from "../components/CardAnuncio";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import img from "../resource/anuncio1.jpg";
import icono1 from "../resource/icono_dormitorio.svg";
import icono2 from "../resource/icono_estacionamiento.svg";
import icono3 from "../resource/icono_wc.svg";
function AnunciosContainer() {
  const iconos = [
    { imagen: icono1, cantidad: "4" },
    { imagen: icono2, cantidad: "2" },
    { imagen: icono3, cantidad: "5" },
  ];
  const nav = [
    { url: "/src/html/nosotros.html", titulo: "Nosotros" },
    { url: "/src/html/anuncio.html", titulo: "Anuncio" },
    { url: "/src/html/blog.html", titulo: "Blog" },
    { url: "/src/html/contacto.html", titulo: "Contacto" },
  ];

  return (
    <>
      <Header enlaces={nav} />
      <CardAnuncio
        titulo="Casa en venta frene al bosque"
        img={img}
        precio="20000000"
        iconos={iconos}
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet facilisis purus. Nunc ut felis pellentesque, fermentum mi et, bibendum felis. Aenean feugiat leo at sapien imperdiet, vestibulum consectetur ante facilisis. Cras vitae magna dui. Praesent vulputate et nulla quis placerat. Aliquam erat volutpat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet facilisis purus. Nunc ut felis pellentesque, fermentum mi et, bibendum felis. Aenean feugiat leo at sapien imperdiet, vestibulum consectetur ante facilisis. Cras vitae magna dui. Praesent vulputate et nulla quis placerat. Aliquam erat volutpat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet facilisis purus. Nunc ut felis pellentesque, fermentum mi et, bibendum felis. Aenean feugiat leo at sapien imperdiet, vestibulum consectetur ante facilisis. Cras vitae magna dui. Praesent vulputate et nulla quis placerat. Aliquam erat volutpat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet facilisis purus. Nunc ut felis pellentesque, fermentum mi et, bibendum felis. Aenean feugiat leo at sapien imperdiet, vestibulum consectetur ante facilisis. Cras vitae magna dui. Praesent vulputate et nulla quis placerat. Aliquam erat volutpat."
      />
      <Footer enlaces={nav} />
    </>
  );
}

export default AnunciosContainer;
