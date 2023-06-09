var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.animation = "moveDown 0.5s forwards";
    } else {
        document.getElementById("navbar").style.animation = "moveUp 0.5s forwards";
    }
    prevScrollpos = currentScrollPos;
}

$(function () {
    $('.hamburger').click(function () {
        $('.items').toggleClass("show");
        $('ul li').toggleClass("hide");
        return false;
    });
});

$(function () {
    $('html').click(function () {
        if ($('ul li').attr('class') == 'logo hide') {
            $('.items').toggleClass("show");
            $('ul li').toggleClass("hide");
        };
    });
});

$(document).on('keydown', function (event) {
    if (event.key == "Escape" && $('ul li').attr('class') == 'logo hide') {
        $('.items').toggleClass("show");
        $('ul li').toggleClass("hide");
    }
});

$(function () {
    var lastScrollTop = 0, delta = 5;
    $(window).scroll(function () {
        var nowScrollTop = $(this).scrollTop();
        if (Math.abs(lastScrollTop - nowScrollTop) >= delta) {
            if (nowScrollTop > lastScrollTop && $('ul li').attr('class') == 'logo hide') {
                $('.items').toggleClass("show");
                $('ul li').toggleClass("hide");
            } else {
            }
            lastScrollTop = nowScrollTop;
        }
    });
});

$(function () {
    $('.smoothScroll').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1500);
                return false;
            }
        }
    });
});

function animateValue(id, start, end, duration) {

    var obj = document.getElementById(id);
    var range = end - start;
    var minTimer = 50;
    var stepTime = Math.abs(Math.floor(duration / range));

    stepTime = Math.max(stepTime, minTimer);

    var startTime = new Date().getTime();
    var endTime = startTime + duration;
    var timer;

    function run() {
        var now = new Date().getTime();
        var remaining = Math.max((endTime - now) / duration, 0);
        var value = Math.round(end - (remaining * range));
        obj.innerHTML = value;
        if (value == end) {
            clearInterval(timer);
        }
    }

    timer = setInterval(run, stepTime);
    run();
}

animateValue("value", 0, 40, 2500);
