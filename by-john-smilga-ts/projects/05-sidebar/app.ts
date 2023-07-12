const toggleBtn = document.querySelector(".sidebar-toggle") as HTMLElement;
const closeBtn = document.querySelector(".close-btn") as HTMLElement;
const sidebar = document.querySelector(".sidebar") as HTMLElement;

toggleBtn.addEventListener("click", function () {
  // if (sidebar.classList.contains("show-sidebar")) {
  //   sidebar.classList.remove("show-sidebar");
  // } else {
  //   sidebar.classList.add("show-sidebar");
  // }
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
