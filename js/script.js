console.log("Krótka strona o mnie, w trakcie rozwijania. Więcej już w krótce!")

let button = document.querySelector(".nav__themeButton");
let body = document.querySelector(".page");
let themeName = document.querySelector(".nav__themeName");

button.addEventListener("click", () => {
    body.classList.toggle("dark");

    themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";

});