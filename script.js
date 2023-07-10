// Navbar Function
function navbarFunction() {
  const navbar = document.querySelector(".navbar-menu");
  const menuBtn = document.getElementById("menu-btn");
  const closeBtn = document.getElementById("close-btn");

  menuBtn.addEventListener("click", () => {
    navbar.classList.add("nav-active");
    menuBtn.classList.add("nav-active");
    closeBtn.classList.add("nav-active");
  });

  closeBtn.addEventListener("click", () => {
    navbar.classList.remove("nav-active");
    menuBtn.classList.remove("nav-active");
    closeBtn.classList.remove("nav-active");
  });
}

// Call apps
navbarFunction();
