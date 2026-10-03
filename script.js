document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navItems.forEach((nav) => nav.classList.remove("active"));
      item.classList.add("active");
    });
  });

  const segmentedButtons = document.querySelectorAll(".segmented button");
  segmentedButtons.forEach((button) => {
    button.addEventListener("click", () => {
      segmentedButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
});
