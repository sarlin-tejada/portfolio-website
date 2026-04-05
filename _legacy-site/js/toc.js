/* ------------------------------------------------------------------
   TOC  Scroll-Spy  +  Mobile Drawer Toggle
-------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  /* === Scroll-spy (your original code, untouched) ============= */
  const tocLinks  = document.querySelectorAll(".toc a");
  const sections  = Array.from(document.querySelectorAll("article [id]"));
  let suppressScrollUpdate = false;

  tocLinks.forEach(link => {
    link.addEventListener("click", () => {
      suppressScrollUpdate = true;
      tocLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      /* close drawer on mobile */
      tocNav?.classList.remove("open");
      setTimeout(() => (suppressScrollUpdate = false), 1000);
    });
  });

  const onScroll = () => {
    if (suppressScrollUpdate) return;
    const scrollPos = window.scrollY + 150;
    let current = null;

    for (let i = sections.length - 1; i >= 0; i--) {
      if (scrollPos >= sections[i].offsetTop) {
        current = sections[i].id;
        break;
      }
    }
    if (!current) return;

    tocLinks.forEach(link => {
      const isActive = link.getAttribute("href") === `#${current}`;
      link.classList.toggle("active", isActive);
      link.setAttribute("aria-current", isActive ? "true" : "false");
    });
  };
  window.addEventListener("scroll", onScroll);
  onScroll();               // initial state

  /* === Off-canvas drawer toggle (new) ========================= */
  const tocBtn  = document.getElementById("tocToggle");
  const tocNav  = document.querySelector(".toc");

  if (tocBtn && tocNav) {
    tocBtn.addEventListener("click", () => {
      tocNav.classList.toggle("open");
      /* trap focus inside drawer when opened (optional) */
      if (tocNav.classList.contains("open")) tocNav.focus();
    });
    /* close drawer with Escape key */
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") tocNav.classList.remove("open");
    });
  }
});
