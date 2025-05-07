const themeBtn = document.getElementById("themeToggle");
const fontSizeSelect = document.getElementById("fontSize");
const card = document.getElementById("animatedCard");

function applyPreferences() {
  const theme = localStorage.getItem("theme") || "light";
  const fontSize = localStorage.getItem("fontSize") || "16px";
  
  document.body.className = theme;
  document.documentElement.style.setProperty("--font-size", fontSize);
  fontSizeSelect.value = fontSize;
}

function toggleTheme() {
  const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.body.className = newTheme;
  localStorage.setItem("theme", newTheme);
}

function updateFontSize(size) {
  document.documentElement.style.setProperty("--font-size", size);
  localStorage.setItem("fontSize", size);
}

themeBtn.addEventListener("click", () => {
  toggleTheme();
  themeBtn.classList.add("pulse");
  setTimeout(() => themeBtn.classList.remove("pulse"), 300);
});

fontSizeSelect.addEventListener("change", (e) => {
  updateFontSize(e.target.value);
});

card.addEventListener("click", () => {
  card.animate([
    { transform: 'rotate(0deg) scale(1)' },
    { transform: 'rotate(5deg) scale(1.1)' },
    { transform: 'rotate(-5deg) scale(1.05)' },
    { transform: 'rotate(0deg) scale(1)' }
  ], {
    duration: 500,
    easing: 'ease-in-out'
  });
});

applyPreferences();
