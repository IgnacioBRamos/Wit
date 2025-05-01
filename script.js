$(document).ready(function(){
    $('.testimonials').owlCarousel({
        dots:false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 1000,
        items: 1, // Mostrar solo un ítem a la vez
        animateIn: 'animate__animated animate__flipInX',   // Agregar animación de entrada
        animateOut: 'animate__animated animate__flipOutX', // Agregar animación de salida
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        freeDrag: false
    });
    
});

$(document).ready(function(){
    $('.brands-carousel').owlCarousel({
        items:1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 5000,
        slideBy: 1,   
        margin: 15, /* Espacio entre los elementos */
    });
});










const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");



open.addEventListener("click",()=>{
    
    nav.classList.add("visible");
})

close.addEventListener("click",()=>{
    
    nav.classList.remove("visible");
})



