/* imágenes portada */

document.addEventListener("DOMContentLoaded", function() {
    let imagenes = [
        "tulipanes_2.jpg",
        "broche.jpg",
        "menta.jpg",
        "flores_1.jpg",
        "pieza_unica.JPG",
        "calder.JPG",
         "cono_jade_largo.jpg",
        "pieza_unica_amatista.jpg",
        "flores_2.jpg"
        "pieza_unica_escarabajo.JPG",
        "foto_12.JPG",
        "margaritas_2.JPG",
        "foto_2.jpg",
        "calavera_cuarzo rosa.jpg",
        "foto_3.jpg",
        "isadora_2.JPG",
        "foto_13.JPG",
        "tulipanes.jpg",
        "margaritas.JPG",
        "pieza_unica_2.JPG",
        "isadora_3.JPG",
        "foto_14.JPG",
        "flores_3.jpg"
        "foto_4.jpg",
        "foto_5.jpg",
        "broche_margarita.jpg",
        "foto_6.jpg",
        "foto_7.jpg",
        "pendientes_conchas.JPG",
         "flores_4.jpg"
        "isadora_4.JPG",
        "foto_8.jpg",
        "pendientes_palmera.JPG",
        "negro.png",
        "manos.JPG",
        "foto_9.jpg",
        "foto_10.jpg",
    ];
    let tiempoIntervalo = 500;

    let indiceImagenActual = 0;
    let fotoPortada = document.getElementById("foto_portada");

    function cambiarImagen() {
        fotoPortada.src = imagenes[indiceImagenActual];
        indiceImagenActual = (indiceImagenActual + 1) % imagenes.length;
    }

    cambiarImagen();

    setInterval(cambiarImagen, tiempoIntervalo);
});
