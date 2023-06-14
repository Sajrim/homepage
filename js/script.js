
{
  const toggleBackground = () => {
    const theme = document.querySelector(".js-main__button-theme");
    const body = document.querySelector(".js-body");
    body.classList.toggle("dark");
    theme.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
  };

  const init = () => {
    const button = document.querySelector(".js-main__button");
    const general = button.addEventListener("click", toggleBackground);
    ;
  };
  init()
}
