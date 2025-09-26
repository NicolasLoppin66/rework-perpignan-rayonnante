// Script pour les onglets d'informations pratiques
document.addEventListener("DOMContentLoaded", function () {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");

      // Retirer la classe active de tous les boutons et contenus
      tabBtns.forEach((b) => b.classList.remove("active"));
      tabContents.forEach((c) => c.classList.remove("active"));

      // Ajouter la classe active au bouton cliqué et au contenu correspondant
      this.classList.add("active");
      document.getElementById(tabId).classList.add("active");
    });
  });
});

// Menu mobile
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const mainNav = document.querySelector(".main-nav");
  const navOverlay = document.querySelector(".nav-overlay");
  const dropdowns = document.querySelectorAll(".dropdown");

  menuBtn.addEventListener("click", function () {
    mainNav.classList.toggle("active");
    navOverlay.classList.toggle("active");
  });

  navOverlay.addEventListener("click", function () {
    mainNav.classList.remove("active");
    navOverlay.classList.remove("active");
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("active");
    });
  });

  // Gestion des sous-menus en mobile
  dropdowns.forEach((dropdown) => {
    const link = dropdown.querySelector("a");

    link.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdown.classList.toggle("active");
      }
    });
  });

  // Fermeture des sous-menus au redimensionnement
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      mainNav.classList.remove("active");
      navOverlay.classList.remove("active");
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("active");
      });
    }
  });
});
