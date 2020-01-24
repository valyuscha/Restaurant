// Вывод параграфов в блоке about - начало

var aboutFigures = document.querySelector('.about__block_text_figures');

aboutFigures.addEventListener('click', function (event) {

    var titles = document.querySelectorAll('.about__block_text_figures_title');
    var icons = document.querySelectorAll('.about-angle');
    var tagName = event.target.tagName.toLowerCase();
    var arr;

    if (tagName === 'h4') {
        arr = titles;
    } else if (tagName === 'i') {
        arr = icons;
    } else {
        return;
    }


    arr.forEach(function(e) {
        var item;
        var element;

        if (e.id) {
            item = (e.id === event.target.id);
            element = e.id;
        } else {
            var parent = e.parentNode;
            item = (parent.id === event.target.parentNode.id);
            element = (parent.id);
        }

        if (item) {
            var txtStyle = document.getElementById(element).style;
            var nextElementSiblingStyle = document.getElementById(element).nextElementSibling.style;
            var className = document.getElementById(element).lastChild.classList;

            if (txtStyle.getPropertyValue("color") === "rgb(0, 197, 210)") {
                txtStyle.setProperty("color", "#222222");
                nextElementSiblingStyle.display = 'none';
                className.remove('fa-angle-up');
                className.add('fa-angle-down');
            } else {
                txtStyle.setProperty("color", "rgb(0, 197, 210)");
                nextElementSiblingStyle.display = 'block';
                className.remove('fa-angle-down');
                className.add('fa-angle-up');
            }
        }
    })
})

// Вывод параграфов в блоке about - конец


// Вывод видео - начало

$('.video-img').click(function () {
    $('.body__filter').css({
        display: 'block'
    });
    $('.video-iframe').css({
        display: 'block'
    });
})

$('.body__filter').click(function () {
    $('.body__filter').css({
        display: 'none'
    });
    $('.video-iframe').css({
        display: 'none'
    });
    var stopVideo = $('#video').attr('src');
    $('#video').attr('src', stopVideo);
})

// Вывод видео - конец


//    Кнопка вверх (.btn_up) Begin

$('body').append('<button class="btn_up" />');

$('.btn_up').click(function () {
    $('body').animate({
        'scrollTop': 0
    }, 1000);
    $('html').animate({
        'scrollTop': 0
    }, 1000);
})

$(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
        $('.btn_up').addClass('active');
    } else {
        $('.btn_up').removeClass('active');
    }
})

//    Кнопка вверх (.btn_up) End


// Фиксированое меню - начало

$('.menu_links').append('<div class="menu_links">');
$('.menu_links_block_menu-list').append('<a href="#feature-item">');
$('.menu_links_block_logo').append('<div class="menu_links_block_logo">');
$('.mobile_menu_click__link').append('<a class="mobile_menu_click__link color-black" href="#!">');

$(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
        $('.menu_links').removeClass('static');
        $('.menu_links').addClass('scroll');
        $('.menu_links_block_menu-list').removeClass('color-black');
        $('.menu_links_block_menu-list').addClass('color-white');
        $('.menu_links_block_logo').addClass('display-none');
        $('.mobile_menu_click__link').removeClass('color-black');
        $('.mobile_menu_click__link').addClass('color-white');
    } else {
        $('.menu_links').removeClass('scroll');
        $('.menu_links').addClass('static');
        $('.menu_links_block_menu-list').removeClass('color-white');
        $('.menu_links_block_menu-list').addClass('color-black');
        $('.menu_links_block_logo').removeClass('display-none');
        $('.mobile_menu_click__link').removeClass('color-white');
        $('.mobile_menu_click__link').addClass('color-black');
    }
})

// Фиксированое меню - конец


// Меню-бургер - начало

$('.mobile_menu_click').click(function(){
    $('.menu_links_block_menu').fadeToggle();
})

$('.menu_links_block_menu ul li a').on('click', function () {
    if($('.mobile_menu_click').css('display') == 'flex') {
        $('.menu_links_block_menu').fadeToggle();
    }
});
// Меню-бургер - конец