const CONTACT = {
  phoneDisplay: "",
  phoneHref: "",
  email: "",
};

const body = document.body;
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");
const callLinks = document.querySelectorAll(".js-call-link");
const phoneLabel = document.querySelector(".js-phone-label");
const emailLabel = document.querySelector(".js-email-label");
const form = document.querySelector(".booking-form");
const statusEl = document.querySelector("#form-status");

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

if (CONTACT.phoneDisplay && CONTACT.phoneHref) {
  callLinks.forEach((link) => {
    link.href = `tel:${CONTACT.phoneHref}`;
    link.querySelector("span").textContent = CONTACT.phoneDisplay;
  });
  phoneLabel.textContent = CONTACT.phoneDisplay;
}

if (CONTACT.email) {
  emailLabel.textContent = CONTACT.email;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const lines = [
    "Dopyt zo stránky Salón Krásy",
    "",
    `Meno: ${data.get("name") || ""}`,
    `Telefón: ${data.get("phone") || ""}`,
    `Služba: ${data.get("service") || ""}`,
    `Preferovaný termín: ${data.get("date") || ""}`,
    "",
    "Poznámka:",
    data.get("message") || "",
  ];

  const bodyText = lines.join("\n");

  if (CONTACT.email) {
    const subject = encodeURIComponent("Rezervácia zo stránky Salón Krásy");
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
    statusEl.textContent = "Správa je pripravená v emailovej aplikácii.";
    statusEl.className = "form-note is-ready";
    form.reset();
    return;
  }

  statusEl.textContent =
    "Kontakt zatiaľ nie je doplnený. Dopyt je pripravený, po doplnení emailu sa otvorí emailová aplikácia.";
  statusEl.className = "form-note is-warning";
});
