function toggleMode() {
  const html = document.documentElement;
  const button = document.querySelector("#switch button");
  button.classList.add("animate");
  setTimeout(() => button.classList.remove("animate"), 300);

  if (html.classList.contains("light")) {
    html.classList.remove("light");
  } else {
    html.classList.add("light");
  }
}
