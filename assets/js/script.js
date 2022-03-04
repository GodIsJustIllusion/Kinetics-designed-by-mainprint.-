$("#dark_bg_img").height($("#dark_bg_text").height());

// =======  Sliders =======
$(document).ready(function(){
    $('.products_card').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        variableWidth: true,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 2500,
            settings: 'unslick',
        },
        {
            breakpoint: 490,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }]
    })
});

$(document).ready(function(){
    $('.card-group-logo').slick({
        arrows: false,
        dots: false,
        autoplay: false,
        autoplaySpeed: 5000,
        variableWidth: true,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 2500,
            settings: 'unslick',
        },
        {
            breakpoint: 490,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }]
    })
});

$(document).ready(function(){
    $('.main-slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        variableWidth: true,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 769,
            settings: {
                arrows: false,
            }
        }]
    })
});
$(document).ready(function(){
    $('.primenenie-slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        variableWidth: true,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 769,
            settings: {
                arrows: false,
            }
        }]
    })
});

$(document).ready(function(){
    $('.multiple-items').slick({
        arrows: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        variableWidth: true,
        adaptiveHeight: true,
    })
});

$(document).ready(function(){
    $('.document-items').slick({
        arrows: true,
        dots: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        variableWidth: true,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 769,
            settings: {
                arrows: false,
            }
        }]
    })
});

$(document).ready(function(){
    $('.card-group-logo').slick({
        arrows: false,
        dots: false,
        autoplay: false,
        autoplaySpeed: 5000,
        variableWidth: true,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 2500,
            settings: 'unslick',
        },
        {
            breakpoint: 490,
            settings: {
                slidesToShow: 5,
                swipeToSlide: true,
            }
        }]
    })
});


// ======= Menu slide =======
$('.dropdown').hover( function () {
        $(this).children('.dropdown-menu').slideDown('slow');
    },
);

// $(".dropdown").mouseenter( function () {
//     $(this).find(".dropdown-menu").slideDown(1000, "easeOutElastic");
// });
  
$(".dropdown").mouseleave( function () {
    $(this).children(".dropdown-menu").slideUp(500);
});



const button = document.querySelectorAll('.btn-offer');
const message = document.querySelector ('.message');
const form = document.querySelector('#blablabla');
const popup = document.querySelector('.popup');
const btnclose = document.querySelectorAll('.close-offer');
const textwhite = document.getElementsByClassName('text-white');
const textdark = document.getElementsByClassName('text-dark');
const navbar = document.querySelector('.navbar-nav');
let btnFixed = document.querySelector('.btn-fixed');
let headerFixed = document.querySelector('.fixed-top')


// ======= Open/close form =======
let clickFunction = function () {
    form.classList.add('open');
    popup.classList.add('popup_open');
    headerFixed.classList.remove ('nav-fixed');

    window.scroll({
        top: 0,
        behavior: "smooth"
    });

    if ($(".delivery-img").attr("src", "images/delivery_white.svg")) {
            $(".delivery-img").attr("src", "images/delivery.svg");
        };
    
    setTimeout(function(){ 
        document.body.style.overflow = 'hidden';
        for (let j = 0; j < textwhite.length; ++j) {
            textwhite[j].classList.replace('text-white', 'text-dark');
        }},500);

};


for (let i = 0; i < button.length; ++i) {
    button[i].addEventListener('click', clickFunction);
};

try {

    let parentBtnOffer = document.querySelector('.popup__wrapper');

    parentBtnOffer.addEventListener ("click", function(event) {
        if (event.target.closest ('.close-offer')) {
            form.remove('open');
            popup.remove('popup_open');
            document.body.style.removeProperty('overflow');
            const textdark = $('.text-dark');
            for (let d = 0; d < textdark.length; ++d) {
                textdark[d].classList.replace('text-dark', 'text-white');
            }
            if (navbar.querySelector('.text-white')) {
                $(".delivery-img").attr("src", "http://kpcom.ru/wp-content/themes/kinetics/assets/images/delivery_white.svg");
            } 
            document.querySelector('.btn-offer').scrollIntoView({
                behavior: 'smooth',
                block: 'end'
            });
        }
    });

}

catch {
    try {
        let parentBtnOffer = document.querySelector('.popup__wrapper');

        parentBtnOffer.addEventListener ("click", function(event) {
            if (event.target.closest ('.close-offer')) {
                form.removeClass('open');
                popup.removeClass('popup_open');
                document.body.style.removeProperty('overflow');
                const textdark = $('.text-dark');
                for (let d = 0; d < textdark.length; ++d) {
                    textdark[d].classList.replace('text-dark', 'text-white');
                }
                if (navbar.querySelector('.text-white')) {
                    $(".delivery-img").attr("src", "http://kpcom.ru/wp-content/themes/kinetics/assets/images/delivery_white.svg");
                } 
                document.querySelector('.btn-offer').scrollIntoView({
                    behavior: 'smooth',
                    block: 'end'
                });
            }
        });
    }
    catch {}
}


// ======= Add Active class =======
//относительные пути
$(function () {
    let url = window.location.pathname;
    let urlRegExp = new RegExp(url.replace(/\/$/, '') + "$");
    let location = window.location.href;
        
    $('.navbar li a.nav-link').each(function () {
            if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
            $(this).addClass('active');
        }
    });

    $('.footer-block-nav a').each(function () {
            if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
            $(this).addClass('active');
        }
    });

    $('.footer-block-nav-hidden a').each(function () {
            if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
            $(this).addClass('active');
        }
    });

    $('.footer-block-products li a').each(function () {
            if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
            $(this).addClass('active');
        }
    });

    $('.navbar li a.dropdown-item').each(function () {
        if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
        $(this).addClass('active');
    }
    });

    if (location.match('o_nas') || location.match('o_kraskah') || location.match('contacts') ||location.match('sposoby_naneseniya')) {
        $('.navbar .navbar-toggler .bi').addClass('text-white');
        $('.navbar .contacts-block-hidden a').addClass('text-white');
        $('.navbar .contacts-block-hidden p').addClass('text-white');
        $('.navbar .contacts-block-social .bi').addClass('text-white');
        $('.navbar .navbar-nav .nav-item .nav-link').addClass('text-white');
        $('.navbar .contacts-block').addClass('text-white');
        $('.navbar .contacts-block .contacts-block-hidden').addClass('text-white');
        $('.navbar .contacts-block .contacts-block-hidden a').addClass('text-white');
        $('.navbar .contacts-block .contacts-block-hidden p').addClass('text-white');
        $('.navbar .contacts-block .contacts-block-social bi').addClass('text-white');
        $('.navbar .contacts-block .contacts-block-adartive').addClass('text-white');
        $('.navbar .navbar-collapse .contacts-block-adaptive a').addClass('text-white');
        $('.navbar .navbar-collapse .contacts-block-adaptive p').addClass('text-white');
        $(".navbar .navbar-collapse .delivery-img").attr("src", "images/delivery_white.svg");
        $(".navbar .navbar-brand img").attr("src", "images/logo_main_white.svg");
        }

    if ((location.match('o_nas') || location.match('o_kraskah')) && window.innerWidth <= 480) {
        $('.navbar .navbar-toggler .bi').removeClass('text-white');
        $('.navbar .contacts-block-hidden a').removeClass('text-white');
        $('.navbar .contacts-block-hidden p').removeClass('text-white');
        $('.navbar .contacts-block-social .bi').removeClass('text-white');
        $('.navbar .navbar-toggler .bi').addClass('text-dark');
        $('.navbar .contacts-block-hidden a').addClass('text-dark');
        $('.navbar .contacts-block-hidden p').addClass('text-dark');
        $('.navbar .contacts-block-social .bi').addClass('text-dark');
        $('.dark-bg-title .breadcrumb-item a').addClass('text-dark');
        $('.dark-bg-title').addClass('text-dark');
        $(".navbar .navbar-brand img").attr("src", "images/logo.svg");
        }

    if (location.match('contacts')) {
        $("#dark_bg_img").height($(window).height() - $(".footer").height());
    }
});


// абсолютные пути
// $(function () {
//     let location = window.location.href;
 
//     $('.navbar li a.nav-link').each(function () {
//         if (location == $(this).attr('href')) {
//             $(this).addClass('active');
//         }
//     });

//     $('.navbar li a.dropdown-item').each(function () {
//         if (location == $(this).attr('href')) {
//             $(this).addClass('active');
//         }    
//     });

//     $('.footer-block-nav a').each(function () {
//         if (location == $(this).attr('href')) {
//             $(this).addClass('active');
//         }
//     });

//     $('.footer-block-nav-hidden a').each(function () {
//         if (location == $(this).attr('href')) {
//             $(this).addClass('active');
//         }
//     });

//     $('.footer-block-products li a').each(function () {
//         if (location == $(this).attr('href')) {
//             $(this).addClass('active');
//         }   
//     });

// });


// ======= Widget =======
$('.message').click (function () {
    $('.widget .messenger').slideToggle();
})
$(document).on('click', function(e) {
    if (!$(e.target).closest(".widget").length) {
      $('.messenger').hide('slow');
    }
    e.stopPropagation();
  });



window.onscroll = function() {
    appear ();
    navFixed ();
}


// ======= Menu-button scroll =======
function appear() {
  if (window.pageYOffset > 20 && window.innerWidth <= 480) {
    btnFixed.style.opacity = '1',
    btnFixed.style.transform = 'rotate(0deg)';
  } else { 
      btnFixed.style.opacity = '0'
      btnFixed.style.transform = 'rotate(90deg)';
    }
};


// ======= Nav fixed =======
function navFixed() {
    if (window.pageYOffset > 40 && window.innerWidth >= 1367) {
        headerFixed.classList.add('nav-fixed');

        for (let j = 0; j < textwhite.length; ++j) {
            textwhite[j].classList.replace('text-white', 'text-dark')
        }

                $('.delivery-img').css('opacity', '0');
        $('.contacts-block-hidden p').css('display', 'none');
        $('.contacts-block-hidden div').css({'margin-right': '90px', 'margin-bottom': '0px'});
        $('.navbar .navbar-brand img').attr('src', 'images/logo_fix.svg');

    } else if (window.innerWidth >= 1367) { 
        headerFixed.classList.remove('nav-fixed');

        const textdark = $('.text-dark');
        for (let d = 0; d < textdark.length; ++d) {
            textdark[d].classList.replace('text-dark', 'text-white')
        }

        $('.delivery-img').css('opacity', '1');
        $('.contacts-block-hidden p').css('display', 'inline-block');
        $('.contacts-block-hidden div').css({'margin-right': 'unset', 'margin-bottom': '10px'});

        let location = window.location.href;

        if (location.match('o_nas') || location.match('o_kraskah') || location.match('sposoby_naneseniya') || location.match('contacts')) {
            $('.navbar .navbar-brand img').attr('src', 'images/logo_main_white.svg');
        } else {
            $('.navbar .navbar-brand img').attr('src', 'images/logo.svg');
        }
    }
};


// for (let li of offcanvasMenu.querySelectorAll('li')) {
//     let span = document.createElement('span'); /* создание span */
//     span.classList.add('show'); /* добавление класса для span */
//     li.prepend(span); /* вставить span внутри li */
//     // span.append(span.nextSibling) /* присоединить к span следующий узел */
// }

// offcanvasMenu.onclick = function(event) {
//     if (event.target.tagName != 'SPAN') return;

//     let childrenList = event.target.parentNode.querySelector('.offcanvas-body-nav-item-products');
//     if (!childrenList) return;
//     childrenList.hidden = !childrenList.hidden;

//     if (childrenList.hidden) {
//         event.target.classList.add('hide');
//         event.target.classList.remove('show');
//     }

//     else {
//         event.target.classList.add('show');
//         event.target.classList.remove('hide');
//     }
// }    

// let privatePolicy = document.querySelector ('#offcanvasBottom');
// let footer = document.querySelector ('.footer');

// if (privatePolicy.classList.contains('show')) {
//     // footer.style.zIndex = '1100';
//     // document.getElementsByClassName('footer')[0].style.zIndex = "1100";
//     document.getElementsByClassName('footer')[0].style= "z-index: 1100";
// }