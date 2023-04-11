import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import imagemin from "vite-plugin-imagemin";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "/index.html",
        anuncio: "/src/html/anuncio.html",
        anuncioUnit: "/src/html/anuncioUnit.html",
        blog: "/src/html/blog.html",
        contacto: "/src/html/contacto.html",
        nosotros: "/src/html/nosotros.html",
        formularioPropiedad: "/src/html/formularioPropiedad.html",
      },
    },
  },
  plugins: [
    react(),
    imagemin({
      exclude: "node_modules/**",
      verbose: true,
      // solo tomará imágenes dentro de la carpeta assets
      include: ["src/resource/**/*.{jpg,png,gif,svg}"],
      // opciones de configuración de optimización de imágenes
      gifsicle: {
        optimizationLevel: 7,
        interlaced: true,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            removeViewBox: false,
          },
        ],
      },
    }),
  ],
});
