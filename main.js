const toggleBtn = document.querySelector(".toggleBtn");
const container = document.querySelector(".container");
toggleBtn.addEventListener("click", function () {
  container.classList.toggle("active");
});
