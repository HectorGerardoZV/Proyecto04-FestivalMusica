document.addEventListener("DOMContentLoaded", function() {
    scrollNav();
    navegacionFija();
});

function scrollNav() {
    const enlaces = document.querySelectorAll(".navegacion a");
    enlaces.forEach(function(enlace) {
        enlace.addEventListener("click", function(e) {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior: "smooth"
            });
        })
    });

}

function navegacionFija() {
    const barra = document.querySelector(".header");
    const observer = new IntersectionObserver(function(entries) {
        const elemento = entries[0];
        if (elemento.isIntersecting) {
            barra.classList.remove("barra-fija");
        } else {
            barra.classList.add("barra-fija");
        }
    });

    observer.observe(document.querySelector('.video'));
}
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