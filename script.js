$(document).ready(function(){
    $('.testimonials').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplaySpeed: 5000,
        slideBy: 1,   
        margin: 15, /* Espacio entre los elementos */
        nav: true,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        }
    });
});





const form = document.getElementById("formulario")

form.addEventListener("submit",handlesubmit)

async function handlesubmit(event){
    event.preventDefault()
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    
    let regexEmail = /[\w.-]+@[\w]+\.\w{2,}/g
    let regexPhone = /^\+?\d+$/g

    if(!regexEmail.test(email)){
        
        Toastify({
            text: "Please enter a valid email address.",
            className: "warning",
            style: {
              background: "red",
            }
          }).showToast();
        return false
    }
    if(!regexPhone.test(phone)){
        // alert("Please enter a valid number without dashes or spaces. The area code is optional.")
        Toastify({
            text: "Please enter a valid number without dashes or spaces. The area code is optional.",
            className: "warning",
            style: {
              background: "red",
            }
          }).showToast();
        return false
    }
    const form = new FormData(this)
    
    const response = await fetch(this.action,{
        method:this.method,
        body:form,
        headers:{
            "accept": "application/json"
        }
    })
    if (response.ok){
        this.reset()
        
        // event.target.classList.add("envioformulario");
        // setTimeout(()=>{
        //     event.target.classList.remove("envioformulario");
        // },5000)
        Toastify({
            text: "Thank you for reaching out. I will get back to you shortly.",
            className: "success",
            style: {
              background: "green",
            }
          }).showToast();
    }
}











const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");



open.addEventListener("click",()=>{
    
    nav.classList.add("visible");
})

close.addEventListener("click",()=>{
    
    nav.classList.remove("visible");
})













const scrollers = document.querySelectorAll(".scroller");

if(!window.matchMedia("(prefers-reduced-motion:reduce)").matches){
    addAnimation()
}


function addAnimation(){
    scrollers.forEach(scroller=>{
        scroller.setAttribute("data-animated",true);
        
        const scrollerInner = scroller.querySelector(".scroller-inner")
        const scrollerContent = Array.from(scrollerInner.children)

        scrollerContent.forEach(item =>{
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden",true)
            scrollerInner.appendChild(duplicatedItem)
        })

    })
}