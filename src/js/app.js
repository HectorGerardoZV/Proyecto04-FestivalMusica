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