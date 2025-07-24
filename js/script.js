document.addEventListener("DOMContentLoaded", () => {
  // Toggle mobile nav
  const menuBtn = document.querySelector(".menu-btn");
  const navList = document.querySelector(".nav-list");
  if (menuBtn && navList) {
    menuBtn.addEventListener("click", () => {
      navList.classList.toggle("open");
    });
  }

    // app.js (or within a <script> tag in your HTML)
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const navList = document.querySelector('.nav-list');

    menuBtn.addEventListener('click', function () {
        navList.classList.toggle('open');
    });
});
    
  // Toggle policy content
  const toggleButtons = document.querySelectorAll(".toggle-btn");

  toggleButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const content = document.getElementById(targetId);
      if (content) {
        content.style.display = content.style.display === "block" ? "none" : "block";
      }
    });
  });

  // Smooth scroll with offset (optional)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    });
  });
});