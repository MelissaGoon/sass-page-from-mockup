document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const mainNav = document.querySelector(".main-nav");
  const menuItems = document.querySelectorAll(".main-nav > .nav-list > li.has-submenu");
  const buttons = document.querySelectorAll(".main-nav > .nav-list > li.has-submenu button");

  // MOBILE: toggle main menu open/close
  hamburger.addEventListener("click", () => {
    mainNav.classList.toggle("open");      // matches your SCSS .main-nav.open
    hamburger.classList.toggle("open");    // matches your SCSS .hamburger.open
  });

  // MOBILE: toggle submenu open/close when clicking the span that has submenu
  menuItems.forEach(item => {
    const submenu = item.querySelector(".submenu");
    const toggleButton = item.querySelector("button"); // the clickable parent with arrow

    toggleButton.addEventListener("click", (e) => {
      // Only toggle submenu on mobile widths
      if (window.innerWidth < 760) {
        e.preventDefault();
        submenu.classList.toggle("open");  // add a new class open to submenu
        toggleButton.classList.toggle("open"); // you can style this to rotate arrow if needed
      }
    });

    // DESKTOP: submenu shown on hover is handled by CSS (:hover) so no JS needed
  });

  // Changing aria labels when toggling

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const aria_text = button.getAttribute('aria-expanded');
      let expanded = false;

      if (aria_text === "true") {
        expanded = true;
      }

      button.setAttribute('aria-expanded', !expanded);
    });

    button.addEventListener('focus', () => {
      button.setAttribute('aria-expanded', 'true');
    });

    parentLi.addEventListener('focusout', e => {
      if (!parentLi.contains(e.relatedTarget)) {
        button.setAttribute('aria-expanded', 'false');
      }
    });

    button.addEventListener('mouseenter', () => {
      button.setAttribute('aria-expanded', 'true');
    });

    parentLi.addEventListener('mouseleave', () => {
      button.setAttribute('aria-expanded', 'false');
    });
  })
});

