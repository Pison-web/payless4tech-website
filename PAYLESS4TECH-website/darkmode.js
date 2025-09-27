function toggleTheme() {
  const body = document.body;
  const toggle = document.getElementById("themeToggle");

  if (toggle.checked) {
    body.classList.remove("default-mode");
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
    body.classList.add("default-mode");
  }
}
