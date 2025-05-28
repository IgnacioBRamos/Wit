/*
window.addEventListener("scroll", function () {
  const header = document.querySelector(".nav-container");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
*/







const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach(scroller => {
    scroller.setAttribute('data-animated', true);
    const scrollerInner = scroller.querySelector('.scroller__inner');
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach(item => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);

    })
  })
}





(() => {

  const openNav = document.querySelector(".open-menu"),
    closeNav = document.querySelector(".close-menu"),
    navMenu = document.querySelector(".nav-links-container"),
    overlay = document.querySelector(".overlay"),
    mediaSize = 992;

  openNav.addEventListener("click", toggleMenu);
  closeNav.addEventListener("click", toggleMenu);
  overlay.addEventListener("click",toggleMenu);


  function toggleMenu() {
    navMenu.classList.toggle("open");
    overlay.classList.toggle("active");
  }



  navMenu.addEventListener("click", (event) => {


    if (event.target.hasAttribute("data-toggle") && window.innerWidth <= mediaSize) {
      event.preventDefault();
      const dropdownMenuBranch = event.target.parentElement;


      if (dropdownMenuBranch.classList.contains("active")) {
        collapseDropdownMenu();
      }

      else {
        if (navMenu.querySelector(".dropdown-menu-branch.active")) {
          collapseDropdownMenu();
        }
        dropdownMenuBranch.classList.add("active");
        const dropdownMenu = dropdownMenuBranch.querySelector(".dropdown-menu");
        dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + "px";

      }
    }
  });

  function collapseDropdownMenu(){
    navMenu.querySelector(".dropdown-menu-branch.active .dropdown-menu").removeAttribute("style");
    navMenu.querySelector(".dropdown-menu-branch.active").classList.remove("active");
  }




})();







const form = document.getElementById("formulario")

form.addEventListener("submit", handlesubmit)

async function handlesubmit(event) {
    event.preventDefault()
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let checkbox = document.getElementById("privacy").checked
    let checkboxError = document.getElementById("checkbox-error")
    let emailError = document.getElementById("email-error")
    let phoneError = document.getElementById("phone-error")


    let regexEmail = /[\w.-]+@[\w]+\.\w{2,}/g
    let regexPhone = /^\+?\d+$/g

    if (!regexEmail.test(email)) {
        emailError.style.display = "block"
        return false
    }
    if (!regexPhone.test(phone)) {
          phoneError.style.display = "block"
          return false
    }
    if (!checkbox) {
        checkboxError.style.display = "block"
        return false
    }
    const form = new FormData(this)

    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            "accept": "application/json"
        }
    })
    if (response.ok) {
        this.reset()
        alert("Thank you for reaching out. I will get back to you shortly.")
    }
    else{
      alert("Something went wrong. Please try again.")
    }
    emailError.style.display = "none"
    phoneError.style.display = "none"
    checkboxError.style.display = "none"
}