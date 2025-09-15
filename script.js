//Código de funcionamento do menu mobile.

function mostrarMenu() {
  let menuMobile = document.querySelector(".mobileMenu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "ASSETS/img/menu_white_36dp.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "ASSETS/img/close_white_36dp.svg";
  }
}
