const nav = document.querySelector("#nav");
        const open = document.querySelector("#open");
        const close = document.querySelector("#close");



        open.addEventListener("click", () => {

            nav.classList.add("visible");
        })

        close.addEventListener("click", () => {

            nav.classList.remove("visible");
        })









        const form = document.getElementById("formulario")

        form.addEventListener("submit",handlesubmit)
        
        async function handlesubmit(event){
            event.preventDefault()
            let email = document.getElementById("email").value
            let phone = document.getElementById("phone").value
            
            let regexEmail = /[\w.-]+@[\w]+\.\w{2,}/g
            let regexPhone = /^\+?\d+$/g
        
            if(!regexEmail.test(email)){
                alert("Please enter a valid email address.")
                return false
            }
            if(!regexPhone.test(phone)){
                alert("Please enter a valid number without dashes or spaces. The area code is optional.")
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
                alert("Thank you for reaching out. I will get back to you shortly.")
            }
        }









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