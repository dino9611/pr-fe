const menuButton = document.querySelector('.menu-bars');
const menuSidebar = document.querySelector('.menu-sidebar');
// let menuBarsOpen = false;
function menuBarsClick() {
  // if (!menuBarsOpen) {
  //   menuButton.classList.add('open');
  //   menuSidebar.classList.add('open');
  // } else {
  //   menuButton.classList.remove('open');
  //   menuSidebar.classList.remove('open');
  // }
  // menuBarsOpen = !menuBarsOpen;
  menuButton.classList.toggle('open');
  menuSidebar.classList.toggle('open');
}
