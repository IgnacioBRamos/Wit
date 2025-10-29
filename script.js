
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header-section") || document.querySelector(".header");

  if (header && window.scrollY > 50) {
    header.classList.add("scrolled");
  } else if (header) {
    header.classList.remove("scrolled");
  }
});








const scrollers = document.querySelectorAll(".scroller");

if (scrollers.length > 0 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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





// Navbar functionality
(() => {
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.nav');
  const overlay = document.querySelector('.mobile-overlay');
  const dropdowns = document.querySelectorAll('.dropdown');

  // Toggle mobile menu
  function toggleMobileMenu() {
    const isOpen = nav.classList.contains('active');
    
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
    mobileToggle.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  // Close mobile menu
  function closeMobileMenu() {
    nav.classList.remove('active');
    overlay.classList.remove('active');
    mobileToggle.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Toggle dropdown
  function toggleDropdown(dropdown) {
    const isActive = dropdown.classList.contains('active');
    
    // Close all other dropdowns
    dropdowns.forEach(d => d.classList.remove('active'));
    
    // Toggle current dropdown
    if (!isActive) {
      dropdown.classList.add('active');
    }
  }

  // Event listeners - solo si los elementos existen
  if (mobileToggle && nav && overlay) {
    mobileToggle.addEventListener('click', toggleMobileMenu);
    overlay.addEventListener('click', closeMobileMenu);

    // Close mobile menu on window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 992) {
        closeMobileMenu();
      }
    });

    // Close mobile menu on scroll
    window.addEventListener('scroll', () => {
      if (nav.classList.contains('active')) {
        closeMobileMenu();
      }
    });

    // Close mobile menu when clicking on nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });
  }

  // Dropdown functionality - solo si existen dropdowns
  if (dropdowns.length > 0) {
    dropdowns.forEach(dropdown => {
      const toggle = dropdown.querySelector('.dropdown-toggle');
      
      if (toggle) {
        toggle.addEventListener('click', (e) => {
          e.preventDefault();
          toggleDropdown(dropdown);
        });
      }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.dropdown')) {
        dropdowns.forEach(d => d.classList.remove('active'));
      }
    });
  }
})();







const form = document.getElementById("formulario")

if (form) {
  form.addEventListener("submit", handlesubmit)
}

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