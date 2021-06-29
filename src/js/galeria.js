document.addEventListener('DOMContentLoaded',
    function() {
        crearGaleria();
    });

function crearGaleria() {
    const galeria = document.querySelector(".galeria__imagenes");
    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement("IMG");
        imagen.src = `../build/img/thumb/${i}.webp`;
        imagen.classList.add("galeria__img");
        const lista = document.createElement("LI");
        lista.appendChild(imagen);
        galeria.appendChild(lista);
    }
}