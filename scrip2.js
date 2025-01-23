const cuadro = document.querySelector('.box');

const detailBusiness = document.querySelector(".detail-business");
const detailHome = document.querySelector(".detail-home");
const detailWeb = document.querySelector(".detail-web");

let prueba; // Identificador del intervalo
let index = 0; // Índice global
let firstCycle = true; // Bandera para controlar la primera vuelta



const parrafositos=[
    "As a business owner, you need a network infrastructure solution that can grow with you and keep your operations running smoothly. Our solutions minimize risk, improve efficiency, and reduce operational costs over time. By choosing WIT Solutions Group, you invest in a solution that supports not only today’s business needs but also tomorrow’s technological advancements.",
    "Security is an essential priority for any business, but managing it with multiple systems can be overwhelming. WIT Solutions Group provides comprehensive protection and peace of mind. Our approach not only safeguards your assets, employees, and sensitive information but also enables you to manage risks more effectively, all while reducing overhead costs and administrative burdens.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "Lorem Ipsum is simply dummr text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "Lorem Ipsum is simply dumma text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "You’re juggling a million priorities every day, and managing complex projects just adds more to your plate. That’s where we come in. WIT Solutions Group service is designed specifically for busy professionals like you who don’t have the time to micromanage deadlines, resources, and deliverables.<br>Can we schedule 20 minutes to discuss how we can take your next project off your to-do list and turn it into a success story?",
    "In today’s fast-paced business world, meetings are the cornerstone of collaboration and decision-making. But let’s face it—technical issues, outdated equipment, and cluttered setups waste valuable time and create unnecessary frustration.<br> WIT Solutions Group specializes in installing state-of-the-art systems tailored to your business needs, ensuring your conference room works as efficiently as you do."
]




// Función para restaurar estilos de una sección específica
function resetStyles(section) {
    const items = section.querySelectorAll(".detail-items li");
    const parrafos = section.querySelectorAll(".detail-description p");

    items.forEach(item => (item.style.opacity = 0.2));
    parrafos.forEach(parrafo => (parrafo.style.opacity = 0));
}

function startInterval(section,parrafositos) {
    



    const items = section.querySelectorAll(".detail-items li");
    
    resetStyles(section); // Restaura los estilos antes de iniciar
    const testo = section.querySelector(".detail-description p");
    testo.style.opacity = 1;
    index = 0;




    prueba = setInterval(() => {
        
        // Resalta el elemento actual
        items[index].style.opacity = 1;
        
        // console.log(parrafositos[index]);
        testo.textContent = parrafositos[index];
        
        // Si no es la primera vuelta, opaca el último elemento al reiniciar
        if (index === 0 && !firstCycle) {
            items[items.length - 1].style.opacity = 0.2;

        }

        // Opaca el elemento anterior (excepto en la primera vuelta para el último)
            
        if (index > 0) {
            
            items[index - 1].style.opacity = 0.2;
            
            
        }

        // Incrementa el índice
        index++;

        // Reinicia el índice y actualiza la bandera después de la primera vuelta
        if (index === items.length) {
            index = 0;
            firstCycle = false;
        }
    }, 2000); // Ejecuta cada 2 segundos
}

function pauseInterval() {
    clearInterval(prueba); // Detiene el intervalo
    console.log("Intervalo pausado");
}



function switchSection(section, xTranslate,parrafositos) {
    // Restablece todas las secciones
    detailHome.style.opacity = 0;
    detailWeb.style.opacity = 0;
    detailBusiness.style.opacity = 0;


    // Activa la sección seleccionada
    section.style.opacity = 1;

    


    cuadro.style.left = `${xTranslate}vw`

    const queries = [
        {
            query: '(max-width: 480px)',
            action: () => {
                if(section==detailBusiness){
                    cuadro.style.width = "36vw"
                }else if(section == detailHome){
                    cuadro.style.width = "34vw"
                    cuadro.style.left = `${(xTranslate)+4}vw`
                }else{
                    cuadro.style.left = `${(xTranslate)+8.5}vw`
                    cuadro.style.width = "28vw";
                }
                
                console.log('Pantalla pequeña: max-width 480px');
            },
        },
        {
            query: '(min-width: 481px) and (max-width: 768px)',
            action: () => {
                if(section==detailBusiness){
                    cuadro.style.width = "23vw";
                }else if(section == detailHome){
                    cuadro.style.width = "20vw";
                    cuadro.style.left = `${(xTranslate)-3}vw`
                }else{
                    cuadro.style.width = "19vw";
                    cuadro.style.left = `${(xTranslate)-7}vw`
                }
                
                console.log('Pantalla mediana: 481px - 768px');
            },
        },
        {
            query: '(min-width: 769px) and (max-width: 1440px)',
            action: () => {
                if(section==detailBusiness){
                    cuadro.style.width = "16vw";
                }else if(section == detailHome){
                    cuadro.style.width = "13vw";
                    cuadro.style.left = `${(xTranslate)}vw`
                }else{
                    cuadro.style.width = "13vw";
                    cuadro.style.left = `${(xTranslate)-1}vw`
                }
                
                console.log('Pantalla grande: 769px - 1440px');
            },
        },{
            query: '(min-width: 1441px) and (max-width: 2000px)',
            action: () => {
                

                if(section==detailBusiness){
                    cuadro.style.width = "12vw"
                }else if(section == detailHome){
                    cuadro.style.left = `${(xTranslate)-1.5}vw`
                    cuadro.style.width = "12vw"
                }else{
                    cuadro.style.left = `${(xTranslate)+1}vw`
                    cuadro.style.width = "11vw";
                }

                console.log('Pantalla extra grande: min-width 1441px');
            },
        },
        {
            query: '(min-width: 2001px)',
            action: () => {
                

                if(section==detailBusiness){
                    cuadro.style.width = "12vw"
                }else if(section == detailHome){
                    cuadro.style.left = `${(xTranslate)-5.1}vw`
                    cuadro.style.width = "12vw"
                }else{
                    cuadro.style.left = `${(xTranslate)-8}vw`
                    cuadro.style.width = "10vw";
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
    





    // cuadro.style.transform = `translate(${xTranslate}%, 0px)`;
    

    pauseInterval(); // Pausa cualquier intervalo activo
    startInterval(section,parrafositos); // Inicia el intervalo para la sección seleccionada
}




// Funciones para manejar los botones
function firstD() {
    switchSection(detailBusiness, 0,parrafositos); // Mueve la caja y activa Business
    // cuadro.style.width = "12vw";
}

function secondD() {
    switchSection(detailHome,30,parrafositos); // Mueve la caja y activa Home
    // cuadro.style.width = "12vw";
}

function thirdD() {
    switchSection(detailWeb, 58,parrafositos); // Mueve la caja y activa Web
    // cuadro.style.width = "10vw";
    // cuadro.style.right = "0vw";
}

// Inicia con la sección Business por defecto

firstD();










const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");



open.addEventListener("click",()=>{
    
    nav.classList.add("visible");
})

close.addEventListener("click",()=>{
    
    nav.classList.remove("visible");
})









