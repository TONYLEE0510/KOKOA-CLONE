const theme = localStorage.getItem("theme");
const html = document.querySelector("html");
if (theme) {
  if (html) {
    if (theme === "dark") {
      html.classList.add("dark");
    }
  }
} else {
  if (window.matchMedia) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      localStorage.setItem("theme", "dark");
      if (html) {
        html.classList.add("dark");
      }
    }
  }
}
