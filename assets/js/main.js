const topScroll = document.querySelector(".top-scroll");
const nav = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 50) {
    topScroll.classList.add("activescroll");
    nav.classList.add("navscroll");
  } else {
    topScroll.classList.remove("activescroll");
    nav.classList.remove("navscroll");
  }
});

$(window).on("load", function () {
  $(".status").fadeOut();
  $("#preloader").delay(500).fadeOut();
});
