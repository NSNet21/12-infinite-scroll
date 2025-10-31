const swapBtn = document.getElementById("themeSwap");
const themeText = document.getElementById("themeText");
const themeIcon = document.getElementById("themeIcon").querySelector("i");
const savedTheme = localStorage.getItem("theme");
const html = document.documentElement;

/* theme on loading page */
if (savedTheme) {
  html.setAttribute("data-theme", savedTheme);
} else {
  html.setAttribute("data-theme", "light");
}

swapBtn.addEventListener("click", () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");
  const isDark = currentTheme === "dark";

  // toggle theme
  const newTheme = isDark ? "light" : "dark";
  html.setAttribute("data-theme", newTheme);

  // toggle text
  themeText.textContent = isDark ? "light" : "dark";

  // toggle icon

  if (isDark) {
    localStorage.setItem("theme", newTheme);
    themeIcon.classList.add("fa-sun");
    themeIcon.classList.remove("fa-moon");
  } else {
    localStorage.setItem("theme", newTheme);
    themeIcon.classList.add("fa-moon");
    themeIcon.classList.remove("fa-sun");
  }
});

/* menu list at 930px or lower width command */
const hamButton = document.getElementById("hamIcon");
const menuList = document.getElementById("menuList");
const closeBtn = document.getElementById("closeBtn");

hamButton.addEventListener("click", () => {
  menuList.classList.add("active");
  hamButton.style.opacity = "0";
});

closeBtn.addEventListener("click", () => {
  const isActive = menuList.classList.contains("active");
  if (isActive) {
    menuList.classList.remove("active");
    hamButton.style.opacity = "1";
  }
});


// อาจจะต้องรอแก้ logic ทีหลังหลังใส่ element เพิ่ม
document.addEventListener("click", (event) => {
  const isClickInMenuList = menuList.contains(event.target);
  const isClickInCloseBtn = closeBtn.contains(event.target);
  const isActive = menuList.classList.contains("active");
  const isClickinHamBtn = hamButton.contains(event.target);
  if (!isClickInCloseBtn && !isClickInMenuList && isActive && !isClickinHamBtn) {
    menuList.classList.remove("active");
    hamButton.style.opacity = "1";
  }
});
