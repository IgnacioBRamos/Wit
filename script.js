$(document).ready(function(){
    $('.testimonials').owlCarousel({
        loop: true,
        autoplay: true,
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
        alert("ingrese un mail valido")
        return false
    }
    if(!regexPhone.test(phone)){
        alert("ingrese un numero valido sin guiones ni espacios y el codigo de area es opcional")
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
        console.log(form)
        alert("gracias por contactarme, te escribire pronto")
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