const navLinks = [...document.querySelectorAll("[data-nav] a")];

const syncActiveNav = () => {
  const currentPath = window.location.pathname.replace(/\/+$/, "");
  const currentHash = window.location.hash || "#about";

  navLinks.forEach((link) => link.classList.remove("is-active"));

  if (currentPath.includes("/blog/")) {
    return;
  }

  const targetHref = `index.en.html${currentHash}`;
  let matched = false;

  navLinks.forEach((link) => {
    const href = link.getAttribute("href") || "";

    if (href === targetHref || href.endsWith("/" + targetHref)) {
      link.classList.add("is-active");
      matched = true;
    }
  });

  if (!matched) {
    const defaultLink = navLinks.find((link) => {
      const href = link.getAttribute("href") || "";
      return href === "index.en.html#about" || href.endsWith("/index.en.html#about");
    });

    if (defaultLink) {
      defaultLink.classList.add("is-active");
    }
  }
};

syncActiveNav();
window.addEventListener("hashchange", syncActiveNav);
