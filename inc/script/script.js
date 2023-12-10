(function($) {
    "use strict";
    $(".dropdown").click(function() {
        if ($(this).hasClass("current")) {
            $(this).removeClass("current");
        } else {
            $(".dropdown.current").removeClass("current");
            $(this).addClass("current");
        }
    });

    $(".dropdown .dropdown-menu .dropdown").on("click", function(e) {
        var data = $(this).find(":nth-child(2)").toggleClass("current");
    });
    $(window).scroll(function() {
            $(this).scrollTop() >= 100 ?
                $("#return-to-top").fadeIn(200) :
                $("#return-to-top").fadeOut(200);
        }),
        $("#return-to-top").click(function() {
            $("body,html").animate({
                    scrollTop: 0,
                },
                500
            );
        }),
        $(window).on("load", function() {
            $(".video-slide").owlCarousel({
                items: 1,
                loop: true,
                margin: 30,
                autoplay: true,
                nav: true,
                navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
                dots: false,
                autoplayHoverPause: true,
                autoplaySpeed: 800,
                responsive: {
                    0: {
                        items: 1
                    },
                    767: {
                        items: 1
                    },
                    992: {
                        items: 2
                    },
                    1500: {
                        items: 2
                    },
                },
            });

            $(".review-slide").owlCarousel({
                mouseDrag: false,
                items: 1,
                loop: true,
                nav: true,
                navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
                autoplay: true,
                dots: false,
                autoplayTimeout: 15000,
                smartSpeed: 800
            });

            $(".owl-dot").attr("aria-label", "Dots");
            $(".owl-prev").attr("aria-label", "Previous");
            $(".owl-next").attr("aria-label", "Next");
            $(".owl-prev").attr("role", "button");
            $(".owl-next").attr("role", "button");
            $(".pre-owl").attr("width", "25");
            $(".pre-owl").attr("height", "25");
            $(".next-owl").attr("width", "25");
            $(".next-owl").attr("height", "25");
            $(".fa-plus").attr("aria-label", "Plus Icon");
            $(".fa-minus").attr("aria-label", "Minus Icon");

            $(".lb-prev").attr("href", "/");
            $(".lb-next").attr("href", "/");
            $(".lb-cancel").attr("href", "/");
            $(".lb-close").attr("href", "/");

            $("#google img").attr("alt", "google");
            $("#instagram img").attr("alt", "instagram");
            $("#yelp img").attr("alt", "yelp");
            $("#facebook img").attr("alt", "facebook");

            $(".linkIcons  img").attr("width", "100");
            $(".linkIcons  img").attr("height", "100");
        });

    $(".navigation ul li span").mouseup(function() {
        if (
            $(this).attr("aria-expanded") == "undefined" ||
            $(this).attr("aria-expanded") == "true"
        ) {
            $(this).removeClass("fa-minus");
            $(this).addClass("fa-plus");
        } else {
            $(this).removeClass("fa-plus");
            $(this).addClass("fa-minus");
        }
    });
    $(".menu-icon-in").click(function() {
        $(this).toggleClass("open");
    });

    $(".hamburger").on("click", function(e) {
        e.preventDefault();
        var mask = '<div class="mask-overlay"></div>';
        $(mask).hide().appendTo("body").fadeIn("fast");
        if ($(".dvLeft").hasClass("open")) {
            $(".mask-overlay").remove();
            $(".menu-icon-in").removeClass("open");
        }
        $(".dvLeft").toggleClass("open");
        $(".dvside-out,.mask-overlay").on("click", function() {
            $(".dvLeft").removeClass("open");
            $(".mask-overlay").remove();
            $(".menu-icon-in").removeClass("open");
        });
    });
    var nav_scroll = function() {
        setTimeout(function() {
            let divHeight = $("#menubar").height();
            let menuHeight = $("#ulmenu").height();
            if (menuHeight > divHeight) {
                $("#menubar").css("overflow-y", "scroll");
            } else {
                $("#menubar").css("overflow-y", "hidden");
            }
        }, 500);
    };
    nav_scroll();
    $(window).on("resize", function() {
        nav_scroll();
    });

    $(".navigation ul li span.sub").click(function() {
        nav_scroll();
        var box_id = $(this).data("target_");
        if ($(box_id).is(":visible")) {
            $(box_id).removeClass("show");
            $(this).removeClass("fa-minus");
            $(this).addClass("fa-plus");
        } else if (!$(box_id).is(":visible")) {
            $(box_id).addClass("show");
            $(this).removeClass("fa-plus");
            $(this).addClass("fa-minus");
        }
    });
    $("a.common-btn").append("<span></span>");
    $("a.common-btn")
        .on("mouseenter", function(e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find("span").css({
                top: relY,
                left: relX,
            });
        })
        .on("mouseout", function(e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find("span").css({
                top: relY,
                left: relX,
            });
        });
    const header = document.querySelector(".header-area");
    const headerUpper = document.querySelector(".header-top");
    const fixedCTA = document.querySelector(".fixed-contact");
    const hamburger = document.querySelector(".hamburger");
    const dvLeft = document.querySelector(".dvLeft");
    const noBanner = document.querySelector(".inner-no-banner");
    window.addEventListener("scroll", () => {
        const windowWidth = window.innerWidth;

        window.scrollY > 5 ?
            header.classList.add("header-bg-on-scroll") :
            header.classList.remove("header-bg-on-scroll");


    });

    hamburger.addEventListener("click", () => {
        const maskOverlay = document.querySelector(".mask-overlay");
        header.classList.toggle("header-bg-on-click");
        if (document.querySelector("body").contains(maskOverlay)) {
            maskOverlay.addEventListener("click", () => {
                header.classList.remove("header-bg-on-click");
            });
        }
    });

    const dvLeftPaddingTop = () => {
        dvLeft.style.paddingTop = 10 + header.offsetHeight + "px";
    };
    if (window.innerWidth < 1200) {
        dvLeftPaddingTop();
    }
    window.addEventListener("resize", () => {
        if (window.innerWidth < 1200) {
            dvLeftPaddingTop();
        } else {
            dvLeft.removeAttribute("style");
        }
    });

    if (document.querySelector("body").contains(noBanner)) {
        const noBannerPaddingTop = () => {
            noBanner.style.paddingTop = header.offsetHeight + "px";
        };
        noBannerPaddingTop();
        window.addEventListener("resize", () => {
            noBannerPaddingTop();
        });
    }
    $("img.svg").each(function() {
        var $img = $(this),
            imgID = $img.attr("id"),
            imgClass = $img.attr("class"),
            imgURL = $img.attr("src");
        $.get(
            imgURL,
            function(data) {
                var $svg = $(data).find("svg");
                if (typeof imgID !== "undefined") {
                    $svg = $svg.attr("id", imgID);
                }
                if (typeof imgClass !== "undefined") {
                    $svg = $svg.attr("class", imgClass);
                }
                $svg = $svg.removeAttr("xmlns:a");
                $img.replaceWith($svg);
            },
            "xml"
        );
    });
    $.event.special.touchstart = {
        setup: function(_, ns, handle) {
            this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
        }
    };

    $(function() {
        $('.acc_ctrl').on('click', function(e) {
            e.preventDefault();
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).next()
                    .stop()
                    .slideUp(300);
            } else {
                $(this).addClass('active');
                $(this).next()
                    .stop()
                    .slideDown(300);
            }
        });
    });
})
(jQuery);