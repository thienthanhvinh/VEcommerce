$(".product-slider").slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left slick-arrow' aria-hidden='true'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right slick-arrow' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
});


$(".rating-slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left slick-arrow' aria-hidden='true'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right slick-arrow' aria-hidden='true'></i></button>",
});

const toggleSwitch = document.querySelector(
  '.toggle-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("class", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("class", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("class", "light");
    localStorage.setItem("theme", "light");
  }
}
toggleSwitch.addEventListener("change", switchTheme);
