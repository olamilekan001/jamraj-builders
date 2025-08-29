(function ($) {
  "use strict";

  // Dropdown on mouse hover
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $(".navbar .dropdown")
          .on("mouseover", function () {
            $(".dropdown-toggle", this).trigger("click");
          })
          .on("mouseout", function () {
            $(".dropdown-toggle", this).trigger("click").blur();
          });
      } else {
        $(".navbar .dropdown").off("mouseover").off("mouseout");
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });

  // Date and time picker
  $(".date").datetimepicker({
    format: "L",
  });
  $(".time").datetimepicker({
    format: "LT",
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Portfolio isotope and filter
  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
  });
  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("active");
    $(this).addClass("active");

    portfolioIsotope.isotope({ filter: $(this).data("filter") });
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: false,
    loop: true,
  });

  // $(window).on("load", function () {
  //   const hour = new Date().getHours();

  //   if (hour >= 18 || hour < 6) {
  //     $("body").addClass("dark-mode");
  //   }

  //   $("#preloader").fadeOut(500, function () {
  //     $("#content").addClass("show");
  //   });
  // });
})(jQuery);

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const page = document.getElementById("content");

  //fade out preloader
  // preloader.style.opacity = "0";

  //enable dark mode if time is between 6pm and 6am
  const hour = new Date().getHours();
  if (hour >= 18 || hour < 6) {
    document.body.classList.add("dark-mode");
  }

  setTimeout(() => {
    preloader.style.display = "none";
    page.style.display = "block";
    setTimeout(() => {
      page.style.opacity = "1";
      page.style.transition = "opacity 3s ease-in";
    }, 50);
  }, 2000);
});

const servicesDark = document.querySelector(".services-dark");
servicesDark.addEventListener("load", () => {
  if (hour >= 18 || hour < 6) {
    servicesDark.classList.add("dark-mode");
    servicesDark.classList.remove("bg-light");
  }
});
