$('.feature__slider-block').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 300,
    arrow: true,
    prevArrow: $('.feature-prev'),
    nextArrow: $('.feature-next'),
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 820,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 570,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 1
            }
        }
    ]
})

$('.stuff__slider-block').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    arrow: true,
    prevArrow: $('.stuff-prev'),
    nextArrow: $('.stuff-next'),
    responsive: [
        {
            breakpoint: 1205,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 910,
            settings: {
                slidesToShow: 1,
                style: {
                    width: '50%'
                }
            }
        }
    ]
})

$('.feedback__slider-block').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    arrow: true,
    prevArrow: $('.feedback-prev'),
    nextArrow: $('.feedback-next'),
    responsive: [
        {
            // breakpoint: 1199
        }
    ]
})

let slickCenter,
    blogSlider = $('.blog__slider-block')

blogSlider.on('init', function (event, slick) {
    slickCenter = $('.slick-center')

    slickCenter.find('section').css({
        margin: '0 auto',
        // width: 370
    })

    slickCenter.prev().find('section').css({
        margin: '0'
    })

    slickCenter.next().find('section').css({
        marginLeft: 'auto'
    })
})

blogSlider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    arrow: true,
    centerMode: true,
    centerPadding: 0,
    prevArrow: $('.blog-prev'),
    nextArrow: $('.blog-next'),
    responsive: [
        {
            breakpoint: 1150,
            settings: {
                centerMode: false
            }
        },
        {
            breakpoint: 1085,
            settings: {
                centerMode: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 750,
            settings: {
                centerMode: false,
                slidesToShow: 1
            }
        }
    ]
})

blogSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    if ((currentSlide > nextSlide && (nextSlide !== 0 || currentSlide === 1)) || (currentSlide === 0 && nextSlide === slick.slideCount - 1)) {
        slickCenter = $('.slick-center').prev()
    } else if (currentSlide === nextSlide) {
        slickCenter = $('.slick-center')
    } else {
        slickCenter = $('.slick-center').next()
    }

    slickCenter.find('section').css({
        margin: '0 auto',
    })

    slickCenter.prev().find('section').css({
        margin: '0'
    })

    slickCenter.next().find('section').css({
        marginLeft: 'auto'
    })


})