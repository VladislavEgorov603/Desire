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

document.querySelector(".header__button").addEventListener('click', function(){
    document.querySelector(".header__drop-menu").classList.toggle("header__drop-menu_active");
})

var buttons = document.querySelectorAll(".gallery__menu-button");

for(var button of buttons) {
    button.addEventListener('click', function(){
        buttons.forEach(i => i.setAttribute('class', 'gallery__menu-button gallery__menu-button_not-active'));

        this.setAttribute('class', 'gallery__menu-button gallery__menu-button_active');
    })
};

var sidebarButtons = document.querySelectorAll(".sidebar__tags-item");

for(var sidebarButton of sidebarButtons){
    sidebarButton.addEventListener("click", function(){
        this.classList.toggle('sidebar__tags-item_active')
    })
}

var playButton = document.querySelector(".about__video-button");
var videoPlayer = document.querySelector(".about__video-player");

playButton.addEventListener('click', function(){
    console.log("click");
    videoPlayer.play();
    videoPlayer.setAttribute('controls', 'controls');
    this.setAttribute('hidden', 'true');
})






