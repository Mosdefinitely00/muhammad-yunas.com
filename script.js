document.addEventListener("DOMContentLoaded", () => {
  console.log("Executive portfolio loaded.");

  // Smooth scroll for nav links
  document.querySelectorAll(".nav-list a").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
