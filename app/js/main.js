$(".top__slider").slick({
    dots: true,
    customPaging : function(slider, i) {
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
    customPaging : function(slider, i) {
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
    $(this).css('display', 'none')
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
    $(".gallery__menu-button").attr('class', 'gallery__menu-button gallery__menu-button_not-active')
    $(this).attr('class', 'gallery__menu-button gallery__menu-button_active')
})

$(".sidebar__tags-item").on('click', function(){
    $(this).toggleClass('sidebar__tags-item_active')
})



const videoPlayer = document.querySelector(".about__video-player");

$('.about__video-button').on('click', function(){
    videoPlayer.play();
    videoPlayer.setAttribute('controls', 'controls');
    $(this).hide();
})







