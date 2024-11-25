function initialize() {
  const headerMenuIcon = document.getElementById("header-menu-icon");
  headerMenuIcon.addEventListener("click", showSlidingPanel);
  const menuSideIcon = document.getElementById("menu-side-icon");
  menuSideIcon.addEventListener("click", hideSlidingPanel);
}

function showSlidingPanel() {
  const menuSide = document.getElementById("menu-side");
  menuSide.classList.add("side-menu-open");
  menuSide.classList.remove("side-menu-close");
}

function hideSlidingPanel() {
  const menuSide = document.getElementById("menu-side");
  menuSide.classList.add("side-menu-close");
  menuSide.classList.remove("side-menu-open");
}

initialize();
