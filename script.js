const buttons = document.querySelectorAll("[data-lang]");
const body = document.body;
const stored = localStorage.getItem("preferredLang");

const setLang = (lang) => {
  body.classList.remove("lang-en", "lang-zh", "lang-both");
  body.classList.add(`lang-${lang}`);

  buttons.forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });

  localStorage.setItem("preferredLang", lang);
};

if (stored && ["en", "zh", "both"].includes(stored)) {
  setLang(stored);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    setLang(button.dataset.lang);
  });
});
