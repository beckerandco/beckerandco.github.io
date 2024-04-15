/* imágenes portada */

document.addEventListener("DOMContentLoaded", function() {
    let imagenes = [
        "tulipanes_2.jpg",
        "pieza_unica.JPG",
        "calder.JPG",
        "pieza_unica_escarabajo.JPG",
        "foto_12.JPG",
        "margaritas_2.JPG",
        "foto_2.jpg",
        "img/calavera_cuarzo rosa.jpg",
        "isadora_2.JPG",
        "foto_13.jpg",
        "tulipanes.jpg",
        "foto_3.jpg",
        "margaritas.JPG",
        "pieza_unica_2.JPG",
        "cono_jade_largo.jpg",
        "isadora_3.JPG",
        "foto_14.jpg",
        "foto_4.jpg",
        "foto_5.jpg",
        "foto_6.jpg",
        "foto_7.jpg",
        "pendientes_conchas.JPG",
        "isadora_4.JPG",
        "foto_8.jpg",
        "pendientes_palmera.JPG",
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
