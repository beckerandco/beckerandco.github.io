/* imágenes portada */

document.addEventListener("DOMContentLoaded", function() {
    let imagenes = [
        "img/tulipanes_2.jpg",
        "img/pieza_unica.JPG",
        "img/calder.JPG",
        "img/pieza_unica_escarabajo.JPG",
        "img/foto_12.jpg",
        "img/margaritas_2.JPG",
        "img/foto_2.jpg",
        "img/calavera_cuarzo rosa.JPG",
        "img/isadora_2.JPG",
        "img/foto_13.jpg",
        "img/tulipanes.jpg",
        "img/foto_3.jpg",
        "img/margaritas.JPG",
        "img/pieza_unica_2.JPG",
        "img/cono_jade_largo.jpg",
        "img/isadora_3.JPG",
        "img/foto_14.jpg",
        "img/foto_4.jpg",
        "img/foto_5.jpg",
        "img/foto_6.jpg",
        "img/foto_7.jpg",
        "img/pendientes_conchas.JPG",
        "img/isadora_4.JPG",
        "img/foto_8.jpg",
        "img/pendientes_palmera.JPG",
        "img/manos.JPG",
        "img/foto_9.jpg",
        "img/foto_10.jpg",


        // Agrega aquí las rutas de las imágenes adicionales
    ];
    let tiempoIntervalo = 100;

    let indiceImagenActual = 0;
    let fotoPortada = document.getElementById("foto_portada");

    function cambiarImagen() {
        fotoPortada.src = imagenes[indiceImagenActual];
        indiceImagenActual = (indiceImagenActual + 1) % imagenes.length;
    }

    cambiarImagen();

    setInterval(cambiarImagen, tiempoIntervalo);
});
