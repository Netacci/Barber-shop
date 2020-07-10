const topScroll = document.querySelector(".top-scroll");
const nav = document.querySelector(".navbar");

// backTotop scroll
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 50) {
    topScroll.classList.add("activescroll");
    nav.classList.add("navscroll");
  } else {
    topScroll.classList.remove("activescroll");
    nav.classList.remove("navscroll");
  }
});
//preloader
$(window).on("load", function () {
  $(".status").fadeOut();
  $("#preloader").delay(500).fadeOut();
});
//collapse nav window
$(document).on("click", ".navbar-collapse", function (e) {
  if ($(e.target).is("a")) {
    $(this).collapse("hide");
  }
});
