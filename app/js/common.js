$(function () {
  $(".hover-mnu").hover(function () {
    $(".bgmobile").toggleClass("bgmobile-active");
  });

  $(".search").on("click", function () {
    $(this).addClass("is-hide");
    $(".desktop-search-toggle").addClass("visible");
    $(".menu").addClass("search-active");
  });

  $(".desktop-search-close").on("click", function () {
    $(".search").removeClass("is-hide");
    $(".desktop-search-toggle").removeClass("visible");
    $(".menu").removeClass("search-active");
  });

  if ($(window).width() <= 1100) {
    let wh = $(window).height();
    $(".header__menu-mobile").css({
      height: `${wh}px`,
      minHeight: `${wh}px`,
    });
  }

  $(window).resize(() => {
    if ($(window).width() <= 1100) {
      let wh = $(window).height();
      $(".header__menu-mobile").css({
        height: `${wh}px`,
        minHeight: `${wh}px`,
      });
    }
  });

  const bannerSlider = $(".slider").slick({
    fade: true,
    autoplay: true,
    dots: false,
    arrows: false,
    speed: 1000,
    autoplaySpeed: 5000,
  });

  $(".sl-prev").on("click", function (e) {
    e.preventDefault();
    bannerSlider.slick("slickPrev");
  });

  $(".sl-next").on("click", function (e) {
    e.preventDefault();
    bannerSlider.slick("slickNext");
  });

  const newsSlider = $(".news__slider").slick({
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  const colabSlider = $(".colab__slider").slick({
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".product-option-select").first().addClass("active");

  $(document).ready(function () {
    var qInput = $(".quantity input");
    qInput.disabled = true;
    qInput.after("<div class='q-plus quant'>+</div>");
    qInput.before("<div class='q-minus quant'>-</div>");
    $(document).on("click", ".quant", function () {
      qInput = $(this).siblings("input");
      var q = parseInt(qInput.val());
      if ($(this).hasClass("q-plus")) {
        q++;
      } else if ($(this).hasClass("q-minus") && q >= 2) {
        q--;
      }
      qInput.val(q);
      var parents = $(this).parents(".cart__item-contain");
      var price = parseInt(parents.find(".cart__price").data("price"));
      var newPrice = price * q;
      parents.find(".cart__price").attr("data-q", q);
      parents
        .find(".woocommerce-Price-amount")
        .html(
          '<span class="woocommerce-Price-amount amount">' +
            newPrice +
            '<span class="woocommerce-Price-currencySymbol"> грн</span></span>'
        );

      calculateTotals();

      var productID = $(this).parents(".cart__item").attr("data-productid");
      window.cartObj[productID].quantity = q;
      window.cartObj[productID].line_total = newPrice;

      $.ajax({
        url: "/",
        method: "GET",
        data: {
          action: "change_quantity",
          q: q,
          cart_item_id: parents.data("key"),
        },
        success: function (data) {
          console.log(data);
        },
      });
    });
    var calculateTotals = function () {
      var total = 0;
      $(".cart__item-contain").each(function () {
        var price = parseInt($(this).find("[data-price]").data("price"));
        var q = parseInt($(this).find("[data-q]").attr("data-q"));
        total += price * q;
      });
      $(".cart__total .mobile-total span").text(total);
    };

    var calculateCartItems = function () {
      var counter = 0;
      $(".cart__item").each(function () {
        counter++;
      });
      return counter;
    };
  });

  $(".desktop-menu-link").hover(function () {
    $(this).find(".desktop-menu-toggle").toggleClass("dmt-active");
  });

  let menuTrigger = true;

  $(window).scroll(function () {
    if ($(window).scrollTop() > 0 && menuTrigger) {
      $(".header__menu-mobile").removeClass("mobile-menu-active");
      $(".bgmobile").removeClass("bgmobile-active");
      menuTrigger = false;
    } else if ($(window).scrollTop() === 0) {
      menuTrigger = true;
    }
  });

  $(".grid-column").on("click", function () {
    $(this).addClass("active");
    $(".grid-row").removeClass("active");
    $(".catalog__item").addClass("item__col").removeClass("item__row");
  });

  $(".grid-row").on("click", function () {
    $(this).addClass("active");
    $(".grid-column").removeClass("active");
    $(".catalog__item").addClass("item__row").removeClass("item__col");
  });

  if ($(window).width() <= 500) {
    $(".catalog__item").addClass("item__row");
  }

  /* $(".checkout-step__container").steps({
    headerTag: ".wc-custom-checkout__title",
    bodyTag: ".checkout-step__container",
    transitionEffect: "slideLeft",
    autoFocus: true,
    labels: {
      next: 'Наступний крок',
      previous: 'Попередній крок',
      finish: false
    },
    transitionEffectSpeed: 0,
  }); */

});
