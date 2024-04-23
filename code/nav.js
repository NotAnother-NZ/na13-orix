//Reset scroll top
// history.scrollRestoration = "manual";
// $(window).on("beforeunload", function () {
//     $(window).scrollTop(0);
// });

var vh = $(window).height() * 0.075;

$(document).ready(function () {
  //set the nav bg color needed to a variable
  var navColor = $("body").attr("nav-color");
  //set the nav bg color to the variable
  $("#nav-bar").css("background-color", navColor);
  $("#nav-fleet-menu-width").css("background-color", navColor);

  //set the text color of #nav-logo-embed, .orix-menu-item, #search-icon-embed to #141414 if body's nav-top is transparent_black, else if nav-top is transparent_white, set the text color of #nav-logo-embed, .orix-menu-item, #search-icon-embed to #F7F7F7
  if ($("body").attr("nav-top") == "transparent_black") {
    //console.log("menu items are meant to be black")
    //set the text color of #nav-logo-embed to #141414
    $(".nav-logo-embed").css("color", "#141414");
    //set the text color of .orix-menu-item to #141414
    $(".orix-menu-item").css("color", "#141414");
    //set the text color of #search-icon-embed to #141414
    $(".search-icon-embed").css("color", "#141414");
    //set the text color of #mobile-nav-icon to #141414
    $("#mobile-nav-icon").css("color", "#141414");
    //set the nav-bar bg color to transparent
    $("#nav-bar").css("background-color", "transparent");
    $("#nav-fleet-menu-width").css("background-color", "transparent");
  } else if ($("body").attr("nav-top") == "transparent_white") {
    //console.log("menu items are meant to be white")
    //set the text color of #nav-logo-embed to #F7F7F7
    $(".nav-logo-embed").css("color", "#F7F7F7");
    //set the text color of .orix-menu-item to #F7F7F7
    $(".orix-menu-item").css("color", "#F7F7F7");
    //set the text color of #search-icon-embed to #F7F7F7
    $(".search-icon-embed").css("color", "#F7F7F7");
    //set the text color of #mobile-nav-icon to #F7F7F7
    $("#mobile-nav-icon").css("color", "#F7F7F7");
    //set the nav-bar bg color to transparent
    $("#nav-bar").css("background-color", "transparent");
    $("#nav-fleet-menu-width").css("background-color", "transparent");
  }

  //make sure the user is on desktop
  // if ($(window).width() > 768) {
  //console.log("Desktop");

  //if any of the .orix-menu-item is hovered, update its color to #EC3C3C
  $(".orix-menu-item").hover(
    function () {
      //console.log("menu item hovered");
      $(this).css("color", "#EC3C3C");
    },
    function () {
      //console.log("menu item unhovered");
      $(this).css("color", "#141414");
    }
  );

  //if #search-icon-embed is hovered, update its color to #EC3C3C
  $("#search-icon-embed").hover(
    function () {
      //console.log("search icon hovered");
      $(this).css("color", "#EC3C3C");
    },
    function () {
      //console.log("search icon unhovered");
      $(this).css("color", "#141414");
    }
  );

  //nav when hovered

  $("#nav-bar").hover(
    function () {
      //console.log("nav bar hovered");
      //set the color of the #nav-bar to the content of the attribute nav-color
      $("#nav-bar").css("background-color", $("body").attr("nav-color"));
      $("#nav-fleet-menu-width").css(
        "background-color",
        $("body").attr("nav-color")
      );
      //set the text color of #nav-logo-embed to #141414
      $(".nav-logo-embed").css("color", "#141414");
      //set the text color of .orix-menu-item to #141414
      $(".orix-menu-item").css("color", "#141414");
      //set the text color of #search-icon-embed to #141414
      $(".search-icon-embed").css("color", "#141414");
      //set the text color of #mobile-nav-icon to #141414
      $("#mobile-nav-icon").css("color", "#141414");
    },
    function () {
      //console.log("nav bar unhovered");
      //check if the nav bar is at the top of the page
      if ($(window).scrollTop() == 0) {
        //console.log("user is at the top of the page");
        //check the attribute nav-top of the body. whether it is set to transparent_white or transparent_black
        if ($("body").attr("nav-top") == "transparent_white") {
          //console.log("menu items are meant to be white")
          //set the color of the #nav-bar back to transparent
          $("#nav-bar").css("background-color", "transparent");
          $("#nav-fleet-menu-width").css("background-color", "transparent");
          //set the text color of #nav-logo-embed back to #F7F7F7
          $(".nav-logo-embed").css("color", "#F7F7F7");
          //set the text color of .orix-menu-item back to #F7F7F7
          $(".orix-menu-item").css("color", "#F7F7F7");
          //set the text color of #search-icon-embed back to #F7F7F7
          $(".search-icon-embed").css("color", "#F7F7F7");
          //set the text color of #mobile-nav-icon back to #F7F7F7
          $("#mobile-nav-icon").css("color", "#F7F7F7");
        } else if ($("body").attr("nav-top") == "transparent_black") {
          //console.log("menu items are meant to be black")
          //set the color of the #nav-bar back to transparent
          $("#nav-bar").css("background-color", "transparent");
          $("#nav-fleet-menu-width").css("background-color", "transparent");
          //set the text color of #nav-logo-embed back to #141414
          $(".nav-logo-embed").css("color", "#141414");
          //set the text color of .orix-menu-item back to #141414
          $(".orix-menu-item").css("color", "#141414");
          //set the text color of #search-icon-embed back to #141414
          $(".search-icon-embed").css("color", "#141414");
          //set the text color of #mobile-nav-icon back to #141414
          $("#mobile-nav-icon").css("color", "#141414");
        }
      } else {
        //console.log("user is not at the top of the page");
        //set the color of the #nav-bar back to #F7F7F7
        $("#nav-bar").css("background-color", $("body").attr("nav-color"));
        $("#nav-fleet-menu-width").css(
          "background-color",
          $("body").attr("nav-color")
        );
        //set the text color of #nav-logo-embed back to #141414
        $(".nav-logo-embed").css("color", "#141414");
        //set the text color of .orix-menu-item back to #141414
        $(".orix-menu-item").css("color", "#141414");
        //set the text color of #search-icon-embed back to #141414
        $(".search-icon-embed").css("color", "#141414");
        //set the text color of #mobile-nav-icon back to #141414
        $("#mobile-nav-icon").css("color", "#141414");
      }
    }
  );

  function updateNavbar() {
    if ($(window).scrollTop() > 0) {
      //console.log("user is not at the top of the page");
      //set the color of the #nav-bar to #F7F7F7
      $("#nav-bar").css("background-color", $("body").attr("nav-color"));
      $("#nav-fleet-menu-width").css(
        "background-color",
        $("body").attr("nav-color")
      );
      //set the text color of #nav-logo-embed to #141414
      $(".nav-logo-embed").css("color", "#141414");
      //set the text color of .orix-menu-item to #141414
      $(".orix-menu-item").css("color", "#141414");
      //set the text color of #search-icon-embed to #141414
      $(".search-icon-embed").css("color", "#141414");
      //set the text color of #mobile-nav-icon to #141414
      $("#mobile-nav-icon").css("color", "#141414");
    } else {
      //console.log("user is at the top of the page");
      //check the attribute nav-top of the body. whether it is set to transparent_white or transparent_black
      if ($("body").attr("nav-top") == "transparent_white") {
        //set the color of the #nav-bar back to transparent
        $("#nav-bar").css("background-color", "transparent");
        $("#nav-fleet-menu-width").css("background-color", "transparent");
        //set the text color of #nav-logo-embed back to #F7F7F7
        $(".nav-logo-embed").css("color", "#F7F7F7");
        //set the text color of .orix-menu-item back to #F7F7F7
        $(".orix-menu-item").css("color", "#F7F7F7");
        //set the text color of #search-icon-embed back to #F7F7F7
        $(".search-icon-embed").css("color", "#F7F7F7");
        //set the text color of #mobile-nav-icon back to #F7F7F7
        $("#mobile-nav-icon").css("color", "#F7F7F7");
        //remove w--open class from the element with class .nav-fleet-menu.w-dropdown-list
        $(".nav-fleet-menu.w-dropdown-list").removeClass("w--open");
      } else if ($("body").attr("nav-top") == "transparent_black") {
        //set the color of the #nav-bar back to transparent
        $("#nav-bar").css("background-color", "transparent");
        $("#nav-fleet-menu-width").css("background-color", "transparent");
        //set the text color of #nav-logo-embed back to #141414
        $(".nav-logo-embed").css("color", "#141414");
        //set the text color of .orix-menu-item back to #141414
        $(".orix-menu-item").css("color", "#141414");
        //set the text color of #search-icon-embed back to #141414
        $(".search-icon-embed").css("color", "#141414");
        //set the text color of #mobile-nav-icon back to #141414
        $("#mobile-nav-icon").css("color", "#141414");
        //remove w--open class from the element with class .nav-fleet-menu.w-dropdown-list
        $(".nav-fleet-menu.w-dropdown-list").removeClass("w--open");
      }
    }
  }

  updateNavbar();

  //nav when scrolled
  //set the color of the #nav-bar to #F7F7F7 when the page is scrolled
  $(window).scroll(function () {
    //console.log("scrolling");
    // if ($(window).scrollTop() > 0) {
    //     //console.log("user is not at the top of the page");
    //     //set the color of the #nav-bar to #F7F7F7
    //     $("#nav-bar").css("background-color", $("body").attr("nav-color"));
    //     //set the text color of #nav-logo-embed to #141414
    //     $(".nav-logo-embed").css("color", "#141414");
    //     //set the text color of .orix-menu-item to #141414
    //     $(".orix-menu-item").css("color", "#141414");
    //     //set the text color of #search-icon-embed to #141414
    //     $(".search-icon-embed").css("color", "#141414");
    // } else {
    //     //console.log("user is at the top of the page");
    //     //check the attribute nav-top of the body. whether it is set to transparent_white or transparent_black
    //     if ($("body").attr("nav-top") == "transparent_white") {
    //         //set the color of the #nav-bar back to transparent
    //         $("#nav-bar").css("background-color", "transparent");
    //         //set the text color of #nav-logo-embed back to #F7F7F7
    //         $(".nav-logo-embed").css("color", "#F7F7F7");
    //         //set the text color of .orix-menu-item back to #F7F7F7
    //         $(".orix-menu-item").css("color", "#F7F7F7");
    //         //set the text color of #search-icon-embed back to #F7F7F7
    //         $(".search-icon-embed").css("color", "#F7F7F7");
    //     } else if ($("body").attr("nav-top") == "transparent_black") {
    //         //set the color of the #nav-bar back to transparent
    //         $("#nav-bar").css("background-color", "transparent");
    //         //set the text color of #nav-logo-embed back to #141414
    //         $(".nav-logo-embed").css("color", "#141414");
    //         //set the text color of .orix-menu-item back to #141414
    //         $(".orix-menu-item").css("color", "#141414");
    //         //set the text color of #search-icon-embed back to #141414
    //         $(".search-icon-embed").css("color", "#141414");
    //     }
    // }
    updateNavbar();
  });

  // }

  //set the background color of the #extra-nav to the content of the attribute nav-color
  $("#extra-nav").css("background-color", $("body").attr("nav-color"));
  //$("#extra-nav-wrapper").css("background-color", $("body").attr("nav-color"));

  //go through all the elements with attribute extra-nav-item
  $("[extra-nav-item]").each(function () {
    //create a <a> tag with class .orix-menu-item and href as id of the element that has the attribute extra-nav-item, and set the text of the <a> tag to the content of the attribute extra-nav-item
    $("#extra-nav-overflow").append(
      "<a class='orix-menu-item extra-nav-link' scroll-link='#" +
        $(this).attr("id") +
        "'>" +
        $(this).attr("extra-nav-item") +
        "</a>"
    );
  });

  //set each of the .extra-nav-link to opacity 25%, and set will get 100% opacity when the section in their scroll-link is in view, and set will get 25% opacity when the section in their scroll-link is not in view
  $(".extra-nav-link").css("opacity", "0.25");

  // $(window).scroll(function () {
  //     $(".extra-nav-link").each(function () {
  //         if ($(window).scrollTop() >= $($(this).attr("scroll-link")).offset().top - $("#nav-bar").outerHeight() - $("#extra-nav").outerHeight() - vh && $(window).scrollTop() <= $($(this).attr("scroll-link")).offset().top + $($(this).attr("scroll-link")).outerHeight() - $("#nav-bar").outerHeight() - $("#extra-nav").outerHeight() - vh) {
  //             $(this).css("opacity", "1");
  //         } else {
  //             $(this).css("opacity", "0.25");
  //         }
  //     });
  // });

  $(window).scroll(function () {
    $(".extra-nav-link").each(function () {
      var link = $(this);
      var target = $(link.attr("scroll-link"));

      if (
        $(window).scrollTop() >=
          target.offset().top -
            $("#nav-bar").outerHeight() -
            $("#extra-nav").outerHeight() -
            vh &&
        $(window).scrollTop() <=
          target.offset().top +
            target.outerHeight() -
            $("#nav-bar").outerHeight() -
            $("#extra-nav").outerHeight() -
            vh
      ) {
        link.css("opacity", "1");
      } else {
        link.css("opacity", "0.25");
      }

      // if ($(window).scrollTop() >= target.offset().top - $("#nav-bar").outerHeight() - $("#extra-nav").outerHeight() - vh && $(window).scrollTop() <= target.offset().top + target.outerHeight() - $("#nav-bar").outerHeight() - $("#extra-nav").outerHeight() - vh) {
      //     var linkPos = link.position().left;
      //     var linkWidth = link.outerWidth();
      //     var extraNavPos = $("#extra-nav").scrollLeft();
      //     var extraNavWidth = $("#extra-nav").outerWidth();
      //     var extraNavScrollPos = linkPos + extraNavPos - (extraNavWidth / 2) + (linkWidth / 2);
      //     $("#extra-nav").animate({
      //         scrollLeft: extraNavScrollPos
      //     }, 200);
      // }
    });
  });

  //if any of the .extra-nav-link is hovered, set the color of that .extra-nav-link to the #EC3C3C and change the cursor to pointer and when the mouse is not hovering over the .extra-nav-link, set the color of that .extra-nav-link to #141414
  $(".extra-nav-link").hover(
    function () {
      $(this).css("color", "#EC3C3C");
      $(this).css("cursor", "pointer");
      $(this).css("opacity", "1");
    },
    function () {
      $(this).css("color", "#141414");
      //set the opacity of the .extra-nav-link to 25% if the section in their scroll-link is not in view
      if (
        $(window).scrollTop() <
          $($(this).attr("scroll-link")).offset().top -
            $("#nav-bar").outerHeight() -
            $("#extra-nav").outerHeight() -
            vh ||
        $(window).scrollTop() >
          $($(this).attr("scroll-link")).offset().top +
            $($(this).attr("scroll-link")).outerHeight() -
            $("#nav-bar").outerHeight() -
            $("#extra-nav").outerHeight() -
            vh
      ) {
        $(this).css("opacity", "0.25");
      } else {
        $(this).css("opacity", "1");
      }
    }
  );

  //set margin-top of #extra-nav to the negative outer height of #extra-nav
  $("#extra-nav").css("margin-top", -$("#extra-nav").outerHeight());

  //if any of the .extra-nav-link is clicked, scroll to the element with the id of the href of the .extra-nav-link + the outer height of #nav-bar and #extra-nav + 7.5vh

  $(".extra-nav-link").click(function () {
    var target = $($(this).attr("scroll-link"));
    var sectionpadding;

    if (target.attr("padding") == "double") {
      sectionpadding =
        target.offset().top -
        $("#nav-bar").outerHeight() -
        $("#extra-nav").outerHeight();
    } else if (target.attr("padding") == "single") {
      sectionpadding = target.offset().top - $("#nav-bar").outerHeight();
    } else {
      sectionpadding = target.offset().top;
    }

    $("html, body").animate(
      {
        scrollTop: sectionpadding
      },
      500
    );
  });
});

//if body has attribute extra-nav to true, set #extra-nav-wrapper to display: block, otherwise set it to display: none
if ($("body").attr("extra-nav") == "true") {
  $("#extra-nav-wrapper").css("display", "block");

  //check attribute extra-nav-activate and extra-nav-deactivate and set their values to a variable
  var extraNavActivate = $("body").attr("extra-nav-activate");
  var extraNavDeactivate = $("body").attr("extra-nav-deactivate");

  //set new Activate variable to the scroll top of extraNavActivate + the outer height of #nav-bar + the outer height of #extra-nav + 7.5vh
  var newActivate =
    $(extraNavActivate).offset().top -
    $("#nav-bar").outerHeight() -
    $("#extra-nav").outerHeight() -
    vh;
  ////console.log("New Activate = " + newActivate);

  //set new Deactivate variable to the scroll top of extraNavDeactivate + the outer height of #nav-bar + the outer height of #extra-nav + 7.5vh
  var newDeactivate =
    $(extraNavDeactivate).offset().top -
    $("#nav-bar").outerHeight() -
    $("#extra-nav").outerHeight() -
    vh;
  ////console.log("New Deactivate = " + newDeactivate);

  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop();
    //if the scroll top is equal or greater than the newActivate variable, animate the margin-top of #extra-nav to the outer height of #nav-bar
    if (scrollPos > newActivate && scrollPos < newDeactivate) {
      //set margin-top of #extra-nav to the outer height of #nav-bar
      $("#extra-nav").css("margin-top", $("#nav-bar").outerHeight());
    }
    //if the scroll top is equal or more than the newDeactivate variable, animate the margin-top of #extra-nav to the negative outer height of #extra-nav
    else {
      //set margin-top of #extra-nav to the negative outer height of #extra-nav
      $("#extra-nav").css("margin-top", -$("#extra-nav").outerHeight());
    }
  });
} else {
  $("#extra-nav-wrapper").css("display", "none");
}

// //search

$("#search-submit").click(function () {
  $("#search-button").click();
});

$("#search-submit2").click(function () {
  $("#search-button2").click();
});

// if body has search attribute to false, hide #search
if ($("body").attr("search") == "false") {
  $("#search").css("display", "none");
} else {
  $("#search").css("display", "block");
}

// document.addEventListener('DOMContentLoaded', function () {
//     ////console.log('loaded')
//     $('.search-form').submit((e) => {
//         e.preventDefault()
//         const formData = Object.fromEntries(new FormData(e.target).entries())

//         var search = formData;
//         //get the form data in Search : "test" format, and get the value in a variable
//         search = $("#search-form").serialize();
//         //get the value after the = sign in the form data
//         search = search.split("=")[1];
//         //set siteseach to current domain
//         var siteseach = window.location.hostname;
//         //redirect to the search page with the search query on a new tab
//         window.open("https://www.google.com/search?q=" + search + "&sitesearch=" + siteseach, "_blank");

//     })
// })

//if #sign-in is clicked, set #sign-in-wrapper-overlay to flex
$("#sign-in").click(function () {
  $("#sign-in-wrapper-overlay").css("display", "flex");

  //lock scroll position, but retain settings for later
  var scrollPosition = [
    self.pageXOffset ||
      document.documentElement.scrollLeft ||
      document.body.scrollLeft,
    self.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop
  ];
  var html = jQuery("html"); // it would make more sense to apply this to body, but IE7 won't have that
  html.data("scroll-position", scrollPosition);
  html.data("previous-overflow", html.css("overflow"));
  html.css("overflow", "hidden");
  window.scrollTo(scrollPosition[0], scrollPosition[1]);
});

//if #sign-in-close is clicked, set #sign-in-wrapper-overlay to none
$("#sign-in-close").click(function () {
  $("#sign-in-wrapper-overlay").css("display", "none");

  //un-lock scroll position
  var html = jQuery("html");
  var scrollPosition = html.data("scroll-position");
  html.css("overflow", html.data("previous-overflow"));
  window.scrollTo(scrollPosition[0], scrollPosition[1]);
});

//if #search is clicked, set #search-wrapper-overlay to flex
$("#search").click(function () {
  $("#search-wrapper-overlay").css("display", "flex");

  //lock scroll position, but retain settings for later
  var scrollPosition = [
    self.pageXOffset ||
      document.documentElement.scrollLeft ||
      document.body.scrollLeft,
    self.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop
  ];
  var html = jQuery("html"); // it would make more sense to apply this to body, but IE7 won't have that
  html.data("scroll-position", scrollPosition);
  html.data("previous-overflow", html.css("overflow"));
  html.css("overflow", "hidden");
  window.scrollTo(scrollPosition[0], scrollPosition[1]);
});

//if #search-close is clicked, set #search-wrapper-overlay to none
$("#search-close").click(function () {
  $("#search-wrapper-overlay").css("display", "none");

  //un-lock scroll position
  var html = jQuery("html");
  var scrollPosition = html.data("scroll-position");
  html.css("overflow", html.data("previous-overflow"));
  window.scrollTo(scrollPosition[0], scrollPosition[1]);
});

//sticky elements

//if there's any element with attribute sticky = true, set it's top to the outer height of #nav-bar + outer height of #extra-nav (only if extra-nav is true)
//if on desktop
//wait for the page to load
$(window).on("load", function () {
  if ($(window).width() > 768) {
    if ($("body").attr("extra-nav") == "true") {
      var stickyTop =
        $("#nav-bar").outerHeight() + $("#extra-nav").outerHeight();
    } else {
      var stickyTop = $("#nav-bar").outerHeight();
    }
    //set the top of those element to the stickyTop variable
    $("[sticky='true']").css("top", stickyTop);
  }
});

//if #fleet-overview-open is clicked lock scroll position, but retain settings for later
$("#fleet-overview-open").click(function () {
  var scrollPosition = [
    self.pageXOffset ||
      document.documentElement.scrollLeft ||
      document.body.scrollLeft,
    self.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop
  ];
  var html = jQuery("html"); // it would make more sense to apply this to body, but IE7 won't have that
  html.data("scroll-position", scrollPosition);
  html.data("previous-overflow", html.css("overflow"));
  html.css("overflow", "hidden");
  window.scrollTo(scrollPosition[0], scrollPosition[1]);
});

//if #fleet-overview-close is clicked, un-lock scroll position
$("#fleet-overview-close").click(function () {
  var html = jQuery("html");
  var scrollPosition = html.data("scroll-position");
  html.css("overflow", html.data("previous-overflow"));
  window.scrollTo(scrollPosition[0], scrollPosition[1]);
});

$(document).ready(function () {
  //vehicle leasing nav dropdown on desktop
  //make sure user is on desktop
  if ($(window).width() > 768) {
    //get the x value of #vehicle-leasing-dropdown in the window
    var vehicleLeasingDropdownX = $("#vehicle-leasing-dropdown").offset().left;
    // console.log(vehicleLeasingDropdownX);
    //set that as the margin-left value of element with class .orix-menu-item.fleet-menu
    $(".orix-menu-item.fleet-menu").css("margin-left", vehicleLeasingDropdownX);
  }
});
