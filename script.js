function toggleMode() {
  const html = document.documentElement;
  const button = document.querySelector("#switch button");
  const icon = document.getElementById("switch-icon");
  button.classList.add("animate");
  setTimeout(() => button.classList.remove("animate"), 500);

  if (html.classList.contains("light")) {
    html.classList.remove("light");
    icon.src = "assets/assets/moon-stars.svg";
  } else {
    html.classList.add("light");
    icon.src = "assets/assets/sun.svg";
  }
}
