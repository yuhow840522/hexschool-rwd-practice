$(document).ready(function () {
    // hamburger menu
    $('.showmenu').on('click', function (e) {
        e.preventDefault();
        $('header').toggleClass('menu-show');
    });

    // banner swiper
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 'auto',
        speed: 500,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
    });
    // add scrollTop button
    $('.btn-backtop').click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });


});