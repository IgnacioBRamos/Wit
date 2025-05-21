







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