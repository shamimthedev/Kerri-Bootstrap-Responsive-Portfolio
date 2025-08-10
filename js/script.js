$(document).ready(function() {
    // ===== TYPED.JS INITIALIZATION =====
    if ($('.typed').length) {
        // Clean up any existing instances
        if ($('.typed').data('typed')) {
            $('.typed').data('typed').destroy();
        }
        
        try {
            var typed = new Typed('.typed', {
                strings: [
                    "Kerri Deo.", 
                    "a Designer.", 
                    "a Developer.", 
                    "a Freelancer."
                ],
                typeSpeed: 60,
                backSpeed: 30,
                startDelay: 500,
                backDelay: 1500,
                loop: true,
                showCursor: true,
                cursorChar: '|',
                contentType: 'html'
            });
            
            // Store instance for potential later use
            $('.typed').data('typed', typed);
            
            console.log('Typed.js initialized successfully');
        } catch (e) {
            console.error('Typed.js error:', e);
        }
    } else {
        console.warn('No .typed element found');
    }

    // ===== MIXITUP FILTER =====
    if (typeof mixitup !== 'undefined' && $('.filterMix').length) {
        try {
            var mixer = mixitup('.filterMix', {
                animation: {
                    duration: 300
                }
            });
            console.log('Mixitup initialized successfully');
        } catch (e) {
            console.error('Mixitup error:', e);
        }
    }

    // ===== HEADER SCROLL EFFECT =====
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar_area').addClass('scrolled');
        } else {
            $('.navbar_area').removeClass('scrolled');
        }
    });

    // ===== BACK TO TOP BUTTON =====
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').addClass('show');
        } else {
            $('.back-to-top').removeClass('show');
        }
    });

    $('.back-to-top').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    // ===== SMOOTH SCROLLING =====
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').on('click', function(e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && 
            location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 70
                }, 800);
            }
        }
    });

    // ===== MOBILE MENU CLOSE =====
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
});