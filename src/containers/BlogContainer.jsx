import { CardAnuncio } from "../components/CardAnuncio";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import img from "../resource/destacada.jpg";

function BlogContainer() {
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
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet facilisis purus. Nunc ut felis pellentesque, fermentum mi et, bibendum felis. Aenean feugiat leo at sapien imperdiet, vestibulum consectetur ante facilisis. Cras vitae magna dui. Praesent vulputate et nulla quis placerat. Aliquam erat volutpat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet facilisis purus. Nunc ut felis pellentesque, fermentum mi et, bibendum felis. Aenean feugiat leo at sapien imperdiet, vestibulum consectetur ante facilisis. Cras vitae magna dui. Praesent vulputate et nulla quis placerat. Aliquam erat volutpat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet facilisis purus. Nunc ut felis pellentesque, fermentum mi et, bibendum felis. Aenean feugiat leo at sapien imperdiet, vestibulum consectetur ante facilisis. Cras vitae magna dui. Praesent vulputate et nulla quis placerat. Aliquam erat volutpat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet facilisis purus. Nunc ut felis pellentesque, fermentum mi et, bibendum felis. Aenean feugiat leo at sapien imperdiet, vestibulum consectetur ante facilisis. Cras vitae magna dui. Praesent vulputate et nulla quis placerat. Aliquam erat volutpat."
        descripcion={{ fecha: "20/10/2021", autor: "Daniel Vilca" }}
      />
      <Footer enlaces={nav} />
    </>
  );
}

export default BlogContainer;
