const body = document.body;
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-menu a");
const demoDialog = document.querySelector(".demo-dialog");
const demoActions = document.querySelectorAll("[data-demo-action]");
const dialogClose = document.querySelector(".demo-dialog__close");
const dialogConfirm = document.querySelector(".demo-dialog__confirm");

const closeMenu = () => {
  body.classList.remove("menu-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Otvoriť menu");
};

navToggle.addEventListener("click", () => {
  const isOpen = body.classList.toggle("menu-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Zavrieť menu" : "Otvoriť menu");
});

navLinks.forEach((link) => link.addEventListener("click", closeMenu));

demoActions.forEach((action) => {
  action.addEventListener("click", () => {
    closeMenu();
    demoDialog.showModal();
  });
});

[dialogClose, dialogConfirm].forEach((button) => {
  button.addEventListener("click", () => demoDialog.close());
});

demoDialog.addEventListener("click", (event) => {
  if (event.target === demoDialog) {
    demoDialog.close();
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.13 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
