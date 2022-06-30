$(".top__slider").slick({
    dots: true,
    customPaging : function() {
        return '<button></button>';
        },
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    arrows: false,
});

$(".contact__slider").slick({
    dots: true,
    customPaging : function() {
        return '<button></button>';
        },
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 10,
    slidesToScroll: 10,
    arrows: false,
})


const images = $(".gallery__image");
const viewBox = $(".gallery__view");
const viewImage = $(".gallery__view-image");

viewBox.on('click', function(){
    viewImage.attr('src', "");
    $(this).css('display', 'none');
})

images.on('click', function(){
    const imageLink = $(this).attr('src');
    viewImage.attr('src', imageLink);
    viewBox.css('display', 'block');
})


$(".header__button").on('click',function(){
    $(".header__drop-menu").toggleClass('header__drop-menu_active');
})


$(".gallery__menu-button").on('click', function(){
    $(".gallery__menu-button").attr('class', 'gallery__menu-button gallery__menu-button_not-active');
    $(this).attr('class', 'gallery__menu-button gallery__menu-button_active');
})

$(".sidebar__tags-item").on('click', function(){
    $(this).toggleClass('sidebar__tags-item_active');
})



const videoPlayer = document.querySelector(".about__video-player");

$('.about__video-button').on('click', function(){
    videoPlayer.play();
    videoPlayer.setAttribute('controls', 'controls');
    videoPlayer.setAttribute('style', 'object-fit: contain');
    
    $(this).hide();
})

$('.sidebar__button').on('click', function(){
    $('.blog-site__sidebar').toggleClass('blog-site__sidebar_active');

    if ($('.blog-site__sidebar').hasClass('blog-site__sidebar_active')) {
        $('.sidebar__button-text').text('Open');
        setTimeout(
            function() 
            {
                $('.blog-site__sidebar').css('z-index','1');
            }, 500)
    } else {
        $('.sidebar__button-text').text('Close');
        $('.blog-site__sidebar').css('z-index','3');
    }
})



if (document.querySelector('title').textContent == "Contact"){
    if (window.matchMedia('(max-width: 1600px)').matches) {
        $(".contact__slider").slick('slickSetOption', 'slidesToShow', 8, true);
        $(".contact__slider").slick('slickSetOption', 'slidesToScroll', 8, true);
    };

    if (window.matchMedia('(max-width: 1300px)').matches) {
        $(".contact__slider").slick('slickSetOption', 'slidesToShow', 6, true);
        $(".contact__slider").slick('slickSetOption', 'slidesToScroll', 6, true);
    };

    if (window.matchMedia('(max-width: 1000px)').matches) {
        $(".contact__slider").slick('slickSetOption', 'slidesToShow', 4, true);
        $(".contact__slider").slick('slickSetOption', 'slidesToScroll', 4, true);
    };

    if (window.matchMedia('(max-width: 600px)').matches) {
        $(".contact__slider").slick('slickSetOption', 'slidesToShow', 2, true);
        $(".contact__slider").slick('slickSetOption', 'slidesToScroll', 2, true);
    };
}



