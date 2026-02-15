  (function highlightMenu() {
      const sections = document.querySelectorAll("section[id]");
      const navLinks = document.querySelectorAll(".nav-menu a");

      function changeActive() {
        let index = sections.length;
        while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
        navLinks.forEach((link) => link.classList.remove("active"));
        if (index >= 0) {
          const activeId = sections[index].getAttribute("id");
          const activeLink = document.querySelector(`.nav-menu a[href="#${activeId}"]`);
          if (activeLink) activeLink.classList.add("active");
        }
      }
      // add small style for active menu
      const style = document.createElement('style');
      style.innerHTML = `.nav-menu a.active { background: #cfe3ef; color: #0f3b4f; font-weight: 600; }`;
      document.head.appendChild(style);
      window.addEventListener("scroll", changeActive);
      window.addEventListener("resize", changeActive);
      changeActive(); // call once
    })();