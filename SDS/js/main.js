jQuery(document).ready(function () {
  "use strict";
  $(".slider").ripples({
    dropRadius: 10,
    perturbance: 0.01,
  });

  // $(".text").typed({
  let typed = new Typed(".text", {
    strings: [
      "<strong>Welcome to</strong><strong class='primary'> SmartDream School ..</strong>",
      "<strong>Every day is a step towards your </strong> <strong class='primary'>dreams!</strong>",
      "<strong>Every learner shines </strong> <strong class='primary'>brighter!</strong>",
    ],
    typespeed: 0,
    loop: true,
  });

  $(window).scroll(function () {
    let top = $(window).scrollTop();
    if (top >= 60) {
      $("nav").addClass("secondary");
    } else if ($("nav").hasClass("secondary")) {
      $("nav").removeClass("secondary");
    }
  });
  $(".work").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  $("#team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
    },
  });
  $(".counter").counterUp({
    delay: 10,
    time: 3000,
  });

  // $('a.smooth-scroll').smoothScroll();
  $("a.smooth-scroll").click(function (event) {
    event.preventDefault();
    let section = $(this).attr("href");
    $("html,body").animate(
      {
        scrollTop: $(section).offset().top - -1,
      },
      1250,
      "easeInOutExpo"
    );
  });
});
