$(function () {

    $(document).on('click', '.tab-link', function (e) {
        e.preventDefault()
    });

    //скроллы кнопок
    $("#for-skills").click(function () {
        $('html, body').animate({
            scrollTop: $(".skills").offset().top
        }, 800);
    });

    $("#for-contacts").click(function () {
        $('html, body').animate({
            scrollTop: $(".contacts").offset().top
        }, 800);
    });

    $("#to-portfolio").click(function () {
        $('html, body').animate({
            scrollTop: $(".works").offset().top
        }, 800);
    });

    //mixitup js
    let containerEl = document.querySelector('#portfolio-project');

    let mixer = mixitup(containerEl, {
        classNames: {
            block: "",
        },
        animation: {
            enable: true,
        },
    });

    const filterToggles = document.querySelectorAll('.tab-link');
    const portfolioBigCards = document.querySelectorAll('.works__item ');

    for (let i = 0; i < filterToggles.length; i++) {
        filterToggles[i].addEventListener('click', function () {
            if (i === 0) {
                for (let j = 0; j < 2; j++) {
                    portfolioBigCards[j].classList.add('works__item--big')
                }
            } else {
                for (let j = 0; j < 2; j++) {
                    portfolioBigCards[j].classList.remove('works__item--big')
                }
            }
        })
    }

    //fake-placeholder
    const formRows = document.querySelectorAll(".form-row");
    const formRowsInputs = document.querySelectorAll(".input");

    for (let i = 0; i < formRows.length; i++) {
        formRows[i].addEventListener("click", function () {
            const placeholderElement = this.querySelector(".fake-placeholder");
            placeholderElement.classList.add("active");
        });
    }

    for (let i = 0; i < formRowsInputs.length; i++) {
        formRowsInputs[i].addEventListener("blur", function () {
            const thisParent = this.parentElement;

            if (this.value === "") {
                thisParent.querySelector("span").classList.remove("active");
            }
        });
    }

    //AOS js - анимации lib
    AOS.init();

    //hamburger-menu
    const button = document.querySelector('.header__hamburger');
    const menu = document.querySelector('.mobile__menu');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay_menu')

    button.addEventListener('click', () => {
        menu.classList.toggle('active');
        button.classList.toggle('cross');
        body.classList.toggle('noscroll');
        overlay.classList.toggle('visible');
    })

    //page-nav plugin
    $('#page-nav').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function () {
        },
        end: function () {
        },
        scrollChange: function ($currentListItem) {
        }
    })

    //fix-menu
    window.addEventListener('scroll', function () {
        const fixMenu = document.querySelector('.fix-menu');
        (this.pageYOffset > 50) ? fixMenu.classList.add('fixed') : fixMenu.classList.remove('fixed');
    })
});
