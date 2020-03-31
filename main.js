$(document).ready(function() {
  console.log("ready");
  navIcon();
  bellnavIcon();
  userNavIcon();
  contactNavIcon();
  shopingCarousel();
  bellActivate();

  function navIcon() {
    // by default hide all content div elements except first element
    $(".mch-content .mch-content__item").hide();
    $(".mch-content .mch-content__item:first-child").show();

    $("#mch-nav .mch-nav__iconbox").click(function() {
      $("#mch-nav .mch-nav__iconbox").removeClass("active");
      $(this).addClass("active");

      $("#mch-nav .mch-nav__icon").removeClass("active");
      $(this)
        .children()
        .addClass("active");

      var current_tab_value = $(this).attr("data-list");
      $(".mch-content .mch-content__item").hide();
      $("." + current_tab_value).show();
    });
  }

  function bellnavIcon() {
    $("#mch-bellIcon").click(function() {
      $(".mch-content-1__wrapper").show();
      $('.mch-content__item__activatereferral').hide()
    })
  }

  function userNavIcon() {
    $(
      "#mch-content-3 .mch-content-3__content .mch-content-3__content__item"
    ).hide();
    $(
      "#mch-content-3 .mch-content-3__content .mch-content-3__content__item:first-child"
    ).show();

    $("#mch-content-3 ul li").click(function() {
      $("#mch-content-3 ul li").removeClass("active");
      $(this).addClass("active");

      var current_tab_value = $(this).attr("data-list");
      console.log(current_tab_value);
      $("#mch-content-3 .mch-content-3__content__item").hide();
      $("." + current_tab_value).show();
    });
  }

  function contactNavIcon() {
    $(
      "#mch-content-4 .mch-content-4__content .mch-content-4__content__item"
    ).hide();
    $(
      "#mch-content-4 .mch-content-4__content .mch-content-4__content__item:first-child"
    ).show();

    $("#mch-content-4 ul li").click(function() {
      $("#mch-content-4 ul li").removeClass("active");
      $(this).addClass("active");

      var current_tab_value = $(this).attr("data-list");
      console.log(current_tab_value);
      $("#mch-content-4 .mch-content-4__content__item").hide();
      $("." + current_tab_value).show();
    });
  }

  // $('#owl-carousel').owlCarousel();
  function shopingCarousel() {
    $("#mch-content-2__carousel").owlCarousel({
      items: 1,
      autoplay: true,
      smartSpeed: 700,
      loop: true,
      autoplayHoverPause: true,
      nav: true,
      dots: false
    });
  }

  function bellActivate() {
    $(".mch-content-1__body__list--activate").click(function() {
      $(".mch-content-1__wrapper").hide();
      var current_tab_value = $(this).attr("data-list");
      $("." + current_tab_value).show();
    });
  }
});
