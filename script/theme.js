const toggle = document.querySelector(".swich").firstElementChild;
toggle.addEventListener("change", getTheme, false);

function getTheme() {
    const theme = document.querySelector("#main-link")
    if(toggle.checked) {
      theme.href = "css/dark-theme.css"
      localStorage.setItem("theme", theme.href)
    } else {
      theme.href = "css/index.css"
    }
  }

  export default getTheme;