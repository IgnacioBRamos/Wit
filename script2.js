const cuadro = document.querySelector('.box');

const detailBusiness = document.querySelector(".detail-business");
const detailHome = document.querySelector(".detail-home");
const detailWeb = document.querySelector(".detail-web");

let interval; // Identificador del intervalo
let currentIndex = 1; // Índice global
let firstCycle = true; // Bandera para controlar la primera vuelta




function agregarColor(items,index) {
    // Eliminar la clase "active" de todos los elementos
    items.forEach(item => item.classList.remove("active-item"));
    // Agregar la clase "active" al elemento seleccionado
    items[index].classList.add("active-item");
}



function startInterval(section) {


    const list = section.querySelector(".detail-items")
    const texto = section.querySelectorAll(".detail-description p")
    const items = Array.from(list.getElementsByTagName("li")); // Convertir NodeList a array para facilitar manipulación


    pauseInterval(); // Asegurarse de que no haya intervalos duplicados
    interval = setInterval(() => {
        // Actualizar el color del elemento actual
        agregarColor(items,currentIndex);


        texto[currentIndex].style.opacity = 1;

        if (!firstCycle) {
            const prevIndex = currentIndex === 0 ? texto.length - 1 : currentIndex - 1;
            texto[prevIndex].style.opacity = 0;
        } else {
            if (currentIndex !== 0) {
                texto[currentIndex - 1].style.opacity = 0;
            }
        }

        // Restablecer el color del elemento anterior (solo después del primer ciclo)
        if (!firstCycle) {
            const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
            items[prevIndex].classList.remove("active");
        }


        // Avanzar al siguiente elemento
        currentIndex = (currentIndex + 1) % items.length;

        // Cambiar bandera después del primer ciclo completo
        if (currentIndex === 0) {
            firstCycle = false;
        }
    }, 5000); // Ejecuta cada 2 segundos
}

function pauseInterval() {
    if (interval) {
        clearInterval(interval);
        console.log("Intervalo pausado");
    }
}




function itemsClickable(section) {
    const list = section.querySelector(".detail-items"); // Contenedor de la lista
    const texto = section.querySelectorAll(".detail-description p"); // Párrafos asociados
    const items = Array.from(list.getElementsByTagName("li")); // Convertir NodeList en array

    if (!list || items.length === 0) {
        console.error("La lista o los elementos no se encontraron en la sección.");
        return;
    }
    
    // Listener para manejar clics en los elementos de la lista
    list.addEventListener("click", (event) => {
        
        const clickedElement = event.target;

        // Verificar si el elemento clickeado es un `li`
        if (clickedElement.tagName === "LI") {
            const index = items.indexOf(clickedElement); // Obtener índice del elemento clickeado
            if (index !== -1) {
                console.log(`Elemento clickeado, índice: ${index}`);

                pauseInterval(); // Pausar el intervalo actual

                texto.forEach(parrafo => (parrafo.style.opacity = 0));

                // Actualizar el color del elemento clickeado
                agregarColor(items, index);

                // Actualizar el índice actual y mostrar el texto asociado
                currentIndex = index;
                texto[currentIndex].style.opacity = 1;

                // Reiniciar el intervalo después de un breve retraso
                setTimeout(() => {
                    firstCycle = false; // Marca que no es el primer ciclo
                    startInterval(section); // Reinicia el intervalo para la sección actual
                }, 5000);
            }
        }
    });
}





function switchSection(section, xTranslate) {
    // Restablece todas las secciones
    if(section == detailBusiness){
        detailHome.style.opacity = 0;
        detailHome.style.zIndex = 0;
        detailWeb.style.opacity = 0;
        detailWeb.style.zIndex = 0;
    }else if(section == detailWeb){
        detailHome.style.opacity = 0;
        detailHome.style.zIndex = 0;
        detailBusiness.style.opacity = 0;
        detailBusiness.style.zIndex = 0;
    }else{
        detailWeb.style.opacity = 0;
        detailWeb.style.zIndex = 0;
        detailBusiness.style.opacity = 0;
        detailBusiness.style.zIndex = 0;
    }
    
    

    // Activa la sección seleccionada
    section.style.opacity = 1;
    section.style.zIndex = 2;

    

    cuadro.style.left = `${xTranslate}vw`

    firstCycle = true; // Reinicia la bandera de ciclo
    currentIndex = 0; // Reinicia el índice


    const texto = section.querySelectorAll(".detail-description p");
    texto.forEach(parrafo => (parrafo.style.opacity = 0)); // Oculta todos los textos
    if(firstCycle){
        texto[0].style.opacity = 1;
    }
    


    const queries = [
        {
            query: '(max-width: 480px)',
            action: () => {
                if (section == detailBusiness) {
                    cuadro.style.width = "36vw"
                } else if (section == detailHome) {
                    cuadro.style.width = "33vw"
                    cuadro.style.left = `${(xTranslate) + 4}vw`
                } else {
                    cuadro.style.left = `${(xTranslate) + 8.5}vw`
                    cuadro.style.width = "28vw";
                }

                console.log('Pantalla pequeña: max-width 480px');
            },
        },
        {
            query: '(min-width: 481px) and (max-width: 768px)',
            action: () => {
                if (section == detailBusiness) {
                    cuadro.style.width = "23vw";
                } else if (section == detailHome) {
                    cuadro.style.width = "20vw";
                    cuadro.style.left = `${(xTranslate) - 3}vw`
                } else {
                    cuadro.style.width = "19vw";
                    cuadro.style.left = `${(xTranslate) - 7}vw`
                }

                console.log('Pantalla mediana: 481px - 768px');
            },
        },
        {
            query: '(min-width: 769px) and (max-width: 1440px)',
            action: () => {
                if (section == detailBusiness) {
                    cuadro.style.width = "16vw";
                } else if (section == detailHome) {
                    cuadro.style.width = "13vw";
                    cuadro.style.left = `${(xTranslate)}vw`
                } else {
                    cuadro.style.width = "13vw";
                    cuadro.style.left = `${(xTranslate) - 1}vw`
                }

                console.log('Pantalla grande: 769px - 1440px');
            },
        }, {
            query: '(min-width: 1441px) and (max-width: 2000px)',
            action: () => {


                if (section == detailBusiness) {
                    cuadro.style.left = `${(xTranslate) + 7}vw`
                    cuadro.style.width = "18vw"
                } else if (section == detailHome) {
                    cuadro.style.left = `${(xTranslate) -3 }vw`
                    cuadro.style.width = "18vw"
                } else {
                    cuadro.style.left = `${(xTranslate)-10.5}vw`
                    cuadro.style.width = "15.5vw";
                }

                console.log('Pantalla extra grande: min-width 1441px');
            },
        },
        {
            query: '(min-width: 2001px)',
            action: () => {


                if (section == detailBusiness) {
                    cuadro.style.width = "13vw"
                } else if (section == detailHome) {
                    cuadro.style.left = `${(xTranslate) - 5}vw`
                    cuadro.style.width = "12vw"
                } else {
                    cuadro.style.left = `${(xTranslate) - 10}vw`
                    cuadro.style.width = "12vw";
                }

                console.log('Pantalla extra grande: min-width 1441px');
            },
        },
    ];

    // Función para evaluar todas las media queries
    function evaluateMediaQueries() {
        queries.forEach(({ query, action }) => {
            const mediaQuery = window.matchMedia(query);
            if (mediaQuery.matches) {
                action();
            }
        });
    }

    // Escuchar cambios en cada media query
    queries.forEach(({ query, action }) => {
        const mediaQuery = window.matchMedia(query);
        mediaQuery.addEventListener('change', () => {
            if (mediaQuery.matches) {
                action();
            }
        });
    });

    // Evaluar las media queries al cargar la página
    evaluateMediaQueries();


    
    // Manejador de eventos para clics en los elementos de la lista
   
   


    // cuadro.style.transform = `translate(${xTranslate}%, 0px)`;

    
    pauseInterval(); // Pausa cualquier intervalo activo
    startInterval(section); // Inicia el intervalo para la sección seleccionada
}




// Funciones para manejar los botones
function firstD() {
    switchSection(detailBusiness, 0); // Mueve la caja y activa Business
    itemsClickable(detailBusiness)
    // cuadro.style.width = "12vw";
}

function secondD() {
    switchSection(detailHome, 30); // Mueve la caja y activa Home
    itemsClickable(detailHome)
    // cuadro.style.width = "12vw";
}

function thirdD() {
    switchSection(detailWeb, 58); // Mueve la caja y activa Web
    itemsClickable(detailWeb)
    // cuadro.style.width = "10vw";
    // cuadro.style.right = "0vw";
}

// Inicia con la sección Business por defecto

firstD();










const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");



open.addEventListener("click", () => {

    nav.classList.add("visible");
})

close.addEventListener("click", () => {

    nav.classList.remove("visible");
})









