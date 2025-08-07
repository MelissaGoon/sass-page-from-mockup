document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const mainNav = document.querySelector(".main-nav");
  const menuItems = document.querySelectorAll(".main-nav > .nav-list > li.has-submenu");

  // MOBILE: toggle main menu open/close
  hamburger.addEventListener("click", () => {
    mainNav.classList.toggle("open");      // matches your SCSS .main-nav.open
    hamburger.classList.toggle("open");    // matches your SCSS .hamburger.open
  });

  // MOBILE: toggle submenu open/close when clicking the span that has submenu
  menuItems.forEach(item => {
    const submenu = item.querySelector(".submenu");
    const toggleSpan = item.querySelector("span"); // the clickable parent with arrow

    toggleSpan.addEventListener("click", (e) => {
      // Only toggle submenu on mobile widths
      if (window.innerWidth < 760) {
        e.preventDefault();
        submenu.classList.toggle("open");  // add a new class open to submenu
        toggleSpan.classList.toggle("open"); // you can style this to rotate arrow if needed
      }
    });

    // DESKTOP: submenu shown on hover is handled by CSS (:hover) so no JS needed
  });
});
