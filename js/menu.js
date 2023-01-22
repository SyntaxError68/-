$(document).ready(function() {
    $('.menu-btn').click(function() {
        $('.menu').toggleClass('menu_active');
        $('body').toggleClass('body_scroll');
    });

    $('.catalog_link').click(function() {
        $('.menu').removeClass('menu_active');
        $('body').removeClass('body_scroll');
    });

    $('.close-btn').click(function() {
        $('.menu').removeClass('menu_active');
        $('body').removeClass('body_scroll');
    });
});
