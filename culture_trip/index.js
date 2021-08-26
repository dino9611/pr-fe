function isPageTop() {
  let navbar = document.getElementsByClassName('navbar1')[2];
  if (window.scrollY == 0) {
    //user scrolled to the top of the page
    navbar.style.opacity = '0';
  } else {
    navbar.style.opacity = '1';
  }
}

let lastScrollTop = 0;
function transformNavbar() {
  let navbar = document.getElementsByClassName('navbar1');
  let pill = document.getElementsByClassName('rounded-pill');
  var st = window.pageYOffset || document.documentElement.scrollTop;

  for (let i = 1; i < navbar.length; i++) {
    if (st > lastScrollTop) {
      navbar[i].style.transform = 'translateY(-50%)';
    } else {
      navbar[i].style.transform = 'translateY(0%)';
    }
  }

  for (let i = 0; i < pill.length; i++) {
    if (st > lastScrollTop) {
      pill[i].style.opacity = '0';
    } else {
      pill[i].style.opacity = '1';
    }
  }

  lastScrollTop = st <= 0 ? 0 : st;
}
function onScroll() {
  isPageTop();
  transformNavbar();
}

let carouselCurr = 0;
function carouselLeft() {
  if (carouselCurr > 0) {
    let carousel = document.getElementsByClassName('containerC')[0];
    carousel.style.transform = `translateX(-${carouselCurr - 1}00vw)`;
    carouselCurr--;
  }
}
function carouselRight() {
  if (carouselCurr < 3 - 1) {
    let carousel = document.getElementsByClassName('containerC')[0];
    carousel.style.transform = `translateX(-${carouselCurr + 1}00vw)`;
    carouselCurr++;
  }
}

// listeners
// window.onscroll = function(){myScript};
window.addEventListener('scroll', onScroll);
