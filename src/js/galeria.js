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
        imagen.dataset.imagenId = i;
        imagen.onclick = abreImagenGrande;
        const lista = document.createElement("LI");
        lista.appendChild(imagen);
        galeria.appendChild(lista);
    }


}


function abreImagenGrande(e) {
    const id = parseInt(e.target.dataset.imagenId);
    console.log(id);
    const imagen = document.createElement("IMG");
    imagen.src = `../build/img/grande/${id}.webp`;
    const overlay = document.createElement("DIV");
    overlay.appendChild(imagen);
    overlay.classList.add("overlay")
    const body = document.querySelector("body");
    body.appendChild(overlay);
    body.classList.add("hidden-body")
    overlay.onclick = function() {
        body.removeChild(overlay);
        body.classList.remove("hidden-body");
        body.classList.add("scroll-body");

    }



}