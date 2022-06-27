const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

console.log(navToggle);
console.log(nav);

navToggle.addEventListener("click", () => {
  const visible = nav.getAttribute("data-visible");

  if (visible === "false") {
    nav.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded", "true");
  } else {
    nav.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
  }
});
