let button = document.querySelector(".js-main__button");
let body = document.querySelector(".js-body");
let theme = document.querySelector(".js-main__button-theme");

button.addEventListener("click", () => {
    body.classList.toggle("dark");

  body.classList.contains("dark") ? "jasny" : "ciemny"
});
