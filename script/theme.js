const toggle = document.querySelector(".swich").firstElementChild;
toggle.addEventListener("change", getTheme, false);
const theme = localStorage.getItem("toggle");

if (theme) {
  // set the toggle as true or fase based on the theme saved in the local storage
  toggle.checked = theme === "dark"
  
  setTheme(theme);
}

function setTheme(theme) {
  const element = document.documentElement;
  const elementStyles = getComputedStyle(element);
  let themeBackColortheme,themeFontColortheme;

  themeBackColortheme = elementStyles.getPropertyValue(`--${theme}-theme-background-color`);
  themeFontColortheme = elementStyles.getPropertyValue(`--${theme}-theme-font-color`);
  
  element.style.setProperty('--selected-theme-background-color', themeBackColortheme);
  element.style.setProperty('--selected-theme-font-color', themeFontColortheme);
}

function getTheme() {
  const theme = toggle.checked ? 'dark' : 'light';
  localStorage.setItem("toggle", theme);

  setTheme(theme);
}

export default getTheme;