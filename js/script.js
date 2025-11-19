{
    const toggleTheme = () => {
        const body = document.querySelector(".page");
        const themeName = document.querySelector(".nav__themeName");

        body.classList.toggle("dark");
        themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
    };

    const init = () => {
        const button = document.querySelector(".nav__themeButton");
        button.addEventListener("click", toggleTheme);
    };

    init();
}
