document.onscroll = function () {
  const nav = document.querySelector(".sticky-top");
  const navExpand = document.querySelector("#navbarSupportedContent");
  const hero = document.querySelector("#hero-section");
  const section2 = document.querySelector(".section2");
  const section3 = document.querySelector(".section3");
  const section4 = document.querySelector(".section4");
  const section5 = document.querySelector(".section5");
  const section6 = document.querySelector(".section6");

  if (section6.getBoundingClientRect().top <= 0) {
    nav.style.backgroundColor = "#fff";
    navExpand.style.backgroundColor = "#fff";
  } else {
    if (section5.getBoundingClientRect().top <= 0) {
      nav.style.backgroundColor = "#f5efdf";
      navExpand.style.backgroundColor = "#f5efdf";
    } else {
      if (section4.getBoundingClientRect().top <= 0) {
        nav.style.backgroundColor = "#fff";
        navExpand.style.backgroundColor = "#fff";
      } else {
        if (section3.getBoundingClientRect().top <= 0) {
          nav.style.backgroundColor = "#f7e5b6";
          navExpand.style.backgroundColor = "#f7e5b6";
        } else {
          if (section2.getBoundingClientRect().top <= 0) {
            nav.style.backgroundColor = "#fff";
            navExpand.style.backgroundColor = "#fff";
          } else {
            if (hero.getBoundingClientRect().top <= 0) {
              nav.style.backgroundColor = "#fffafa";
              navExpand.style.backgroundColor = "#fffafa";
            }
          }
        }
      }
    }
  }
};


var map = document.querySelector('.map');

  
map.addEventListener('mouseover', function handleMouseOver() {
  var popup = document.querySelector('.popup')
  popup.style.display = 'block'
});


map.addEventListener('mouseout', function handleMouseOver() {
  var popup = document.querySelector('.popup')
  popup.style.display = 'none'
});