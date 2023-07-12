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

  // when click in document
  document.addEventListener("click", (e) => {
    if (!menuBtn.contains(e.target) && !navbar.contains(e.target)) {
      navbar.classList.remove("nav-active");
      menuBtn.classList.remove("nav-active");
      closeBtn.classList.remove("nav-active");
    }
  });
}

// Send Email function
function sendEmail() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  const fullName = `${firstName} ${lastName}`;
  const params = {
    from_name: fullName,
    email_id: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_whxx3q5", "template_xf2piyz", params)
    .then(function (res) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your message has been send",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  document.forms["contact-form"].reset();
}

// Call apps
navbarFunction();
