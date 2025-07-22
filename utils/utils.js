import Parallax from "parallax-js";
export const thamesUtils = {
  bgImage() {
    document.querySelectorAll("[data-background]").forEach(function (element) {
      var backgroundUrl = element.getAttribute("data-background");
      element.style.backgroundImage = "url(" + backgroundUrl + ")";
    });
  },
  stickyNav() {
    var sticky = document.getElementById("header-sticky");

    window.addEventListener("scroll", function () {
      var scroll = window.scrollY;
      if (scroll < 2) {
        sticky.classList.remove("sticky-menu");
      } else {
        sticky.classList.add("sticky-menu");
      }
    });
  },
  parallax() {
    // const Parallax = require("parallax-js");
    var scene = document.getElementById("scene");
    if (scene) {
      var parallax = new Parallax(scene, {
        limitX: true,
        scalarX: 10.0,
        originX: 0,
      });
    }
  },
  counterUp() {
    const elements = document.querySelectorAll(".counter-text-wrap");

    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function handleCounterText(element) {
      const countText = element.querySelector(".count-text");
      const stopValue = parseInt(countText.getAttribute("data-stop"), 10);
      const speed = parseInt(countText.getAttribute("data-speed"), 10);

      if (!element.classList.contains("counted") && isInViewport(element)) {
        element.classList.add("counted");
        let start = 0;
        const step = Math.ceil(stopValue / (speed / 10));

        const interval = setInterval(() => {
          start += step;
          countText.textContent = Math.min(start, stopValue);

          if (start >= stopValue) {
            clearInterval(interval);
            countText.textContent = stopValue;
          }
        }, 10);
      }
    }

    window.addEventListener("scroll", () => {
      elements.forEach((element) => {
        if (!element.classList.contains("counted")) {
          handleCounterText(element);
        }
      });
    });
  },
};
