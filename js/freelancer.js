(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 71)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Floating label headings for the contact form
  $(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

})(jQuery); // End of use strict


var images = [];

function preload() {
    for (var i = 1; i < 163; i++) {
        images[i] = new Image();
        images[i].src = "/img/logoseq/image-" + i.toString().padStart(4, '0') + ".png"
    }
}
preload();

var currentUrl = null;

$(window).scroll(
    function( event ) {

        if ($(window).scrollTop() >= 310) {
            console.log('hihih');
            $('.subsectionmenu').addClass('subsectionmenu-fixed');
            $('.navcolorbg').addClass('navcolorbg-shrink');
            $('.textitems').addClass('textitems-shrink');
        }
        else {
            $('.subsectionmenu').removeClass('subsectionmenu-fixed');
            $('.navcolorbg').removeClass('navcolorbg-shrink');
            $('.textitems').removeClass('textitems-shrink');
        }

        var fromTop = $(window).scrollTop(), url = null;

        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        console.log(scrollHeight);

        cH = Math.ceil(fromTop/15)

        if(cH > 0 && cH < 163) {
            $(".logotxt").html(images[cH].src );
            $("#logo").attr('src', images[cH].src);
        }
    }



);

$( document ).ready(function() {
});

