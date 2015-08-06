// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Srolling
$('a[href*=#]:not([href=#])').click(function() {
    var target = $(this.hash);

    $(this).addClass('active');

    $('html, body').stop().animate({
        scrollTop: target.offset().top
    }, 1000);

    return false;
});

// Scroll function
$(window).scroll(function() {

    var scrollTop = $(this).scrollTop(),
        windowHeight = $(this).height(),
        menuList = $('a.page-scroll');

    // Add active on menu
    menuList.each(function() {
        var hash = $(this.hash),
            targetTop = hash.offset().top,
            targetBottom = targetTop + hash.outerHeight();

        if (scrollTop + 1 > targetTop && scrollTop + 1 < targetBottom) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
});

$(document).ready(function() {
    //Particule.js init
    particlesJS('particles-js', {
        particles: {
            color: '#aaa',
            shape: 'circle',
            opacity: 1,
            size: 4,
            size_random: true,
            nb: 100,
            line_linked: {
                enable_auto: true,
                distance: 100,
                color: '#c02e0c',
                opacity: 1,
                width: 1,
                condensed_mode: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 600
                }
            },
            anim: {
                enable: true,
                speed: 3
            }
        },
        interactivity: {
            enable: true,
            mouse: {
                distance: 220
            },
            mode: 'grab'
        },
        retina_detect: true
    });

    var $timeline_block = $('.cd-timeline-block'),
        pos = new google.maps.LatLng(48.793832, 2.372959),
        map;

    //hide timeline blocks which are outside the viewport
    $timeline_block.each(function() {
        if ($(this).offset().top > $(window).scrollTop() + $(window).height() * 0.75) {
            $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        }
    });

    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function() {
        $timeline_block.each(function() {
            if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden')) {
                $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
            }
        });
    });

    //enable carrousel controls
    $('.carousel-control.left').click(function() {
        $('#projects_slide').carousel('prev');
    });

    $('.carousel-control.right').click(function() {
        $('#projects_slide').carousel('next');
    });

    function initialize() {
        var mapOptions = {
            zoom: 12,
            center: pos,
            scrollwheel: false
        };

        map = new google.maps.Map(document.getElementById('map'),
            mapOptions);

        var marker = new google.maps.Marker({
            position: pos,
            map: map,
            title: "I\'m here !"
        });
    }

    google.maps.event.addDomListener(window, 'load', initialize);
});
