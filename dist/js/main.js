$('document').ready(function () {
    $('.toggle-menu-open').click(function () {
        $('nav').toggleClass('active');
    })
    $('.toggle-menu-close').click(function () {
        $('nav').removeClass('active');
        // $("#open").css('display', 'block');
    })

    $('nav ul li a').click(function () {
        $('nav').removeClass('active');
        // $("#open").css('display', 'block');
    })


    $(window).scroll(function () {
        if ($(window).scrollTop() < 100) {
            $('header').addClass('onTop');
            $('header').removeClass('shrink');
        } else {
            $('header').removeClass('onTop');
            $('header').addClass('shrink');
        }
    });

    var scrollLink = $('.nav-item');

    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 500);
    })

    $(window).scroll(function () {
        var scrollPos = $(this).scrollTop();
        scrollLink.each(function () {
            var sectionOffset = $(this.hash).offset().top - 60;
            if (sectionOffset <= scrollPos) {
                $(this).parent().addClass('active')
                $(this).parent().siblings().removeClass('active')
            }
        })
    })

});