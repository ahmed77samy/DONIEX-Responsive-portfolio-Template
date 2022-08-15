function initDONIEX() {
    "use strict";
    // loader ------------------
    $(".loader").fadeOut(500, function () {
        $("#main").animate(
            {
                opacity: "1",
            }
        );
    });
    // Owl carousel ------------------
    var ss = $(".single-slider"),
        sync1 = $(".hero-wrap-image-slider"),
        sync2 = $(".hero-wrap-text-slider"),
        gR = $(".gallery_horizontal"),
        gf = $(".full-screen-gallery"),
        flag = false,
        duration = 1300,
        rtlt = eval($(this).data("rtlt"));

    sync1.owlCarousel({
            loop: false,
            margin: 0,
            nav: false,
            items: 1,
            dots: false,
            smartSpeed: 1200,
        })
        .on("changed.owl.carousel", function (a) {
            if (!flag) {
                flag = true;
                sync2.trigger("to.owl.carousel", [
                    a.item.index,
                    duration,
                    true,
                ]);
                flag = false;
            }
        });
    sync2.owlCarousel({
            loop: false,
            margin: 0,
            nav: false,
            items: 1,
            dots: true,
            smartSpeed: 1200,
            autoHeight: false,
            mouseDrag: false,
        })
        .on("changed.owl.carousel", function (a) {
            if (!flag) {
                flag = true;
                sync1.trigger("to.owl.carousel", [
                    a.item.index,
                    duration,
                    true,
                ]);
                flag = false;
            }
        });
    $(".hero-wrap-text-slider-holder a.next-slide").on("click", function () {
        $(this)
            .closest(".hero-wrap-text-slider-holder")
            .find(sync2)
            .trigger("next.owl.carousel");
        return false;
    });
    $(".hero-wrap-text-slider-holder a.prev-slide").on("click", function () {
        $(this)
            .closest(".hero-wrap-text-slider-holder")
            .find(sync2)
            .trigger("prev.owl.carousel");
        return false;
    });
    var slsl = $(".slideshow-item");
    slsl.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: false,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: true,
        autoplayTimeout: 4100,
        autoplayHoverPause: false,
        autoplaySpeed: 3600,
    });
    var tsh = $(".testimon-slider");
    tsh.owlCarousel({
        margin: 0,
        items: 1,
        smartSpeed: 1300,
        loop: true,
        nav: false,
        autoHeight: true,
        dots: false,
    });
    $(".testimon-slider-holder a.next-slide").on("click", function () {
        $(this)
            .closest(".testimon-slider-holder")
            .find(tsh)
            .trigger("next.owl.carousel");
    });
    $(".testimon-slider-holder a.prev-slide").on("click", function () {
        $(this)
            .closest(".testimon-slider-holder")
            .find(tsh)
            .trigger("prev.owl.carousel");
    });
    var ts = $(".show-thumbs").data("textshow");
    var th = $(".show-thumbs").data("texthide");
    $(".show-thumbs").text(ts);
    function showThumbs() {
        $(".show-thumbs").removeClass("vis-t");
        $(".owl-thumbs").addClass("vis-thumbs");
        $(".show-thumbs").text(th);
        setTimeout(function () {
            $(".owl-thumb-item").addClass("himask");
        }, 650);
    }
    function hideThumbs() {
        $(".show-thumbs").text(ts);
        $(".show-thumbs").addClass("vis-t");
        $(".owl-thumbs").removeClass("vis-thumbs");
        $(".owl-thumb-item").removeClass("himask");
    }
    $(".show-thumbs").on("click", function () {
        if ($(this).hasClass("vis-t")) showThumbs();
        else hideThumbs();
        return false;
    });
    $(document).on("click", ".owl-thumb-item", function () {
        hideThumbs();
        return false;
    });
    // magnific popup ------------------
    var $pzg = $(".popup-zoom-gallery");
    var $pzgYT = $(".popup-zoom-gallery a.popup-youtube");
    $pzg.magnificPopup({
        delegate: "a.popup-image",
        type: "image",
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300,
			opener: function(element) {
				return element.find('img');
			}
		}
    });
    $pzgYT.magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
		gallery: {
			enabled: true
		},
	});
    // css functionts------------------
    function a() {
        $(".hero-wrap-image-slider .item").css({
            height: $(".hero-wrap-image-slider").outerHeight(true),
        });
        $(".hero-wrap-text-slider .item").css({
            height: $(".hero-wrap-text-slider").outerHeight(true),
        });
        $(".slideshow-item .item").css({
            height: $(".slideshow-item ").outerHeight(true),
        });
        $(".height-emulator").css({
            height: $(".content-footer").outerHeight(true),
        });
        var a = $(window).height(),
            b = $("header").outerHeight(),
            c = $(".p_horizontal_wrap");
        c.css("height", a - b - 30);
        var d = $(window).width();
        if (d < 768) c.css("height", a - b - 60);
        $(" #portfolio_horizontal_container .portfolio_item img").css({
            height: $(".portfolio_item").outerHeight(true),
        });
    }
    a();
    $(window).on("resize", function () {
        a();
    });
    // // scroll animation ------------------
    var i = 1;
    $(document.body).on("appear", ".stats", function (a) {
        if (1 === i) k(2600);
        i++;
    });
    function number(a, b, c, d) {
        if (d) {
            var e = 0;
            var f = parseInt(d / a);
            var g = setInterval(function () {
                if (e - 1 < a) c.html(e);
                else {
                    c.html(b);
                    clearInterval(g);
                }
                e++;
            }, f);
        } else c.html(b);
    }
    function k(a) {
        $(".stats .num").each(function () {
            var b = $(this);
            var c = b.attr("data-num");
            var d = b.attr("data-content");
            number(c, d, b, a);
        });
    }
    $(".animaper").appear();
    $(document.body).on("appear", ".piechart-holder", function () {
        $(this)
            .find(".chart")
            .each(function () {
                var a = $(".piechart-holder").data("skcolor");
                $(".chart").easyPieChart({
                    barColor: a,
                    trackColor: "transparent",
                    scaleColor: "transparent",
                    size: "150",
                    lineWidth: "20",
                    lineCap: "circle",
                    onStep: function (a, b, c) {
                        $(this.el).find(".percent").text(Math.round(c));
                    },
                });
            });
    });
    $(document.body).on("appear", ".skillbar-box", function () {
        $(this)
            .find("div.skillbar-bg")
            .each(function () {
                $(this)
                    .find(".custom-skillbar")
                    .delay(600)
                    .animate(
                        {
                            width: $(this).attr("data-percent"),
                        },
                        1500
                    );
            });
    });
    var circle = document.querySelector('.footer-title circle');
    var radius = circle.r.baseVal.value;
    var circumference = radius * 2 * Math.PI;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;
    function setProgress(percent) {
        const offset = circumference - percent / 100 * circumference;
        circle.style.strokeDashoffset = offset;
    }
    document.onscroll = () => {
        const ele = document.querySelector(".footer-title h2")
        let height = document.scrollingElement.scrollHeight - window.innerHeight
        let scroll = document.documentElement.getBoundingClientRect().y
        ele.textContent = `${Math.round(Math.abs(scroll * 100 ) / height)}%`
        setProgress(Math.round(Math.abs(scroll * 100 ) / height));
    }
    // Background video ------------------
    var l = $(".background-youtube").data("vid");
    var m = $(".background-youtube").data("mv");
    $(".background-youtube").YTPlayer({
        fitToBackground: true,
        videoId: l,
        // pauseOnScroll: true,
        mute: m,
        callback: function () {
            var a = $(".background-video").data("ytPlayer").player;
        },
    });
    var vid = $(".background-vimeo").data("vim");
    $(".background-vimeo").append(
        '<iframe src="https://player.vimeo.com/video/' +
            vid +
            '?background=1"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen ></iframe>'
    );
    $(".video-holder").height($(".media-container").height());
    if ($(window).width() > 1036) {
        if ($(".video-holder").length > 0)
            if (
                ($(".media-container").height() / 9) * 16 >
                $(".media-container").width()
            ) {
                $(".background-vimeo iframe ")
                    .height($(".media-container").height())
                    .width(($(".media-container").height() / 9) * 16);
                $(".background-vimeo iframe ").css({
                    "margin-left": (-1 * $("iframe").width()) / 2 + "px",
                    top: "-75px",
                    "margin-top": "0px",
                });
            } else {
                $(".background-vimeo iframe ")
                    .width($(window).width())
                    .height(($(window).width() / 16) * 9);
                $(".background-vimeo iframe ").css({
                    "margin-left": (-1 * $("iframe").width()) / 2 + "px",
                    "margin-top": (-1 * $("iframe").height()) / 2 + "px",
                    top: "50%",
                });
            }
    } else if ($(window).width() < 760) {
        $(".video-holder").height($(".media-container").height());
        $(".background-vimeo iframe ").height($(".media-container").height());
    } else {
        $(".video-holder").height($(".media-container").height());
        $(".background-vimeo iframe ").height($(".media-container").height());
    }
    // Isotope ------------------
    function n() {
        if ($(".gallery-items").length) {
            var a = $(".gallery-items").isotope({
                singleMode: true,
                columnWidth:
                    ".grid-sizer, .grid-sizer-second, .grid-sizer-three",
                itemSelector:
                    ".gallery-item, .gallery-item-second, .gallery-item-three",
                transformsEnabled: true,
                transitionDuration: "700ms",
                resizable: true,
            });
            a.imagesLoaded(function () {
                a.isotope("layout");
            });
            $(".gallery-filters").on("click", "a.gallery-filter", function (b) {
                b.preventDefault();
                var c = $(this).attr("data-filter");
                a.isotope({
                    filter: c,
                });
                $(".gallery-filters a.gallery-filter").removeClass(
                    "gallery-filter-active"
                );
                $(this).addClass("gallery-filter-active");
                return false;
            });
            a.isotope("on", "layoutComplete", function (a, b) {
                var b = a.length;
                $(".num-album").html(b);
            });
        }
        $(".gallery-filters").on("click", "a", function (a) {
            a.preventDefault();
            var b = $(this).attr("data-filter");
            $(".p_horizontal_wrap").animate({ scrollLeft: 1 }, 500);
            setTimeout(function () {
                d.isotope({
                    filter: b,
                });
            }, 900);
            $(".gallery-filters a").removeClass("gallery-filter_active");
            $(this).addClass("gallery-filter_active");
        });
    }
    $(".grid-item a").on("click", function () {
        var a = $(this).attr("href");
        window.location.href = a;
        return false;
    });
    var j = $(".portfolio_item , .gallery-item").length;
    $(".all-album , .num-album").html(j);
    n();
    $(".filter-button").addClass("act-filter");
    $(".filter-button").on("click", function () {
        if ($(this).hasClass("act-filter")) {
            showfilter();
        } else {
            hidefilter();
        }
        return false;
    });
    function showfilter() {
        $(".filter-button").removeClass("act-filter");
        $(".hid-filter").slideDown(500);
        $(".resize-carousel-holder").addClass("visfilb");
    }
    function hidefilter() {
        $(".filter-button").addClass("act-filter");
        $(".hid-filter").slideUp(500);
        $(".resize-carousel-holder").removeClass("visfilb");
    }
    // Scroll window ------------------
    $(".scroll-top").click(function () {
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            1500
        );
        return false;
    });
    $(".custom-scroll-link").on("click", function () {
        var a = 80;
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") ||
            location.hostname == this.hostname
        ) {
            var b = $(this.hash);
            b = b.length ? b : $("[name=" + this.hash.slice(1) + "]");
            if (b.length) {
                $("html,body").animate(
                    {
                        scrollTop: b.offset().top - a,
                    },
                    {
                        queue: false,
                        duration: 1600,
                        easing: "easeInOutExpo",
                    }
                );
                return false;
            }
        }
    });
    // Other functions  ------------------
    $.fn.duplicate = function (a, b) {
        var c = [];
        for (var d = 0; d < a; d++) $.merge(c, this.clone(b).get());
        return this.pushStack(c);
    };
    $("<div class='scale-callback'></div>").duplicate(12).appendTo(".sb-bg");
    $(".show-hid-sidebar").on("click", function (a) {
        a.preventDefault();
        $(".hid-sidebar").addClass("vissb");
        setTimeout(function () {
            $(".scale-callback").addClass("scale-bg5");
        }, 450);
        setTimeout(function () {
            $(".sb-inner").addClass("sb-innervis");
        }, 800);
        $(".sb-overlay").addClass("vis-overlay");
        return false;
    });
    $(".close-sidebar , .sb-overlay").on("click", function () {
        $(".hid-sidebar").removeClass("vissb");
        $(".sb-inner").removeClass("sb-innervis");
        $(".scale-callback").removeClass("scale-bg5");
        $(".sb-overlay").removeClass("vis-overlay");
        return false;
    });
    var bgImage = $(".bg");
    bgImage.each(function (a) {
        if ($(this).attr("data-bg"))
            $(this).css("background-image", "url(" + $(this).data("bg") + ")");
    });
    // Contact form  ------------------
    $("#contactform").submit(function () {
        var a = $(this).attr("action");
        $("#message").slideUp(750, function () {
            $("#message").hide();
            $("#submit").attr("disabled", "disabled");
            $.ajax({
                method: "POST",
                url: "php/contact.php",
                data: {
                    name: $("#name").val(),
                    email: $("#email").val(),
                    phone: $("#phone").val(),
                    comments: $("#comments").val(),
                }
              })
            .done(function( a ) {
                document.getElementById("message").innerHTML = a;
                $("#message").slideDown("slow");
                $("#submit").removeAttr("disabled");
                if (null != a.match("success"))
                $("#contactform").slideDown("slow");
            });
        });
        return false;
    });
    $("#contactform input, #contactform textarea").keyup(function () {
        $("#message").slideUp(1500);
    });
    // Mobile bavigation   ------------------
    var nb = $(".nav-button"),
        nh = $(".nav-holder");
    function showMenu() {
        nb.removeClass("vis-m");
        nh.slideDown(500);
    }
    function hideMenu() {
        nb.addClass("vis-m");
        nh.slideUp(500);
    }
    nb.on("click", function () {
        if ($(this).hasClass("vis-m")) showMenu();
        else hideMenu();
    });
    var mobileHover = function () {
        $(".grid-item-holder , nav li")
            .on("touchstart", function () {
                $(this).trigger("hover");
            })
            .on("touchend", function () {
                $(this).trigger("hover");
            });
    };

    mobileHover();
}
// remove parallax and video on mobile   ------------------
function initparallax() {
    var a = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (
                a.Android() ||
                a.BlackBerry() ||
                a.iOS() ||
                a.Opera() ||
                a.Windows()
            );
        },
    };
    trueMobile = a.any();
    if (null == trueMobile) {
        var b = $("#main");
        b.find("[data-top-bottom]").length > 0 &&
            b.waitForImages(function () {
                s = skrollr.init();
                s.destroy();
                $(window).resize(function () {
                    var a = $(window).width();
                    if (a < 1036) s.destroy();
                    else
                        skrollr.init({
                            forceHeight: !1,
                            easing: "easeInOutElastic",
                            mobileCheck: function () {
                                return !1;
                            },
                        });
                });
                skrollr.init({
                    forceHeight: !1,
                    easing: "easeInOutElastic",
                    mobileCheck: function () {
                        return !1;
                    },
                });
            });
        var c = $(window).width();
        if (c < 1036) {
            s = skrollr.init();
            s.destroy();
        }
    }
    if (trueMobile) $(".background-youtube , .background-vimeo").remove();
}
$(document).ready(function () {
    initDONIEX();
    initparallax();
});