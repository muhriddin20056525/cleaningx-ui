const navList = document.querySelector(".nav-list"),
  menuBtn = document.querySelector(".header-hamburger");

menuBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
});
