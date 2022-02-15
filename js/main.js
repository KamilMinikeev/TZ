$(function () {

    //apartments-content 

    let apartmentsLinks = document.querySelectorAll('.apartments-options__list-link');
    let apartmentsContents = document.querySelectorAll('.apartments-options__content');
    let section = document.querySelector('.section-top');

    for (let i = 0; i < apartmentsLinks.length; i++) {
        apartmentsLinks[i].addEventListener('mouseover', function () {

            for (let j = 0; j < apartmentsContents.length; j++) {
                if (apartmentsLinks[i].getAttribute('data-link') == apartmentsContents[j].getAttribute('data-option')) {
                    apartmentsContents[i].classList.add('hover');
                    section.classList.add('background');
                }
            }
        })
        apartmentsLinks[i].addEventListener('mouseout', function () {
            for (let k = 0; k < apartmentsContents.length; k++) {
                if (apartmentsLinks[i].getAttribute('data-link') == apartmentsContents[k].getAttribute('data-option')) {
                    apartmentsContents[i].classList.remove('hover');
                    section.classList.remove('background');
                }
            }
        })
    }

    //slider
    let arrowRight = document.querySelector('.apartments__slider-btn2');
    let arrowLeft = document.querySelector('.apartments__slider-btn1');
    let videos = document.querySelectorAll('.video');
    let contents = document.querySelectorAll('.apartments-choice__content');

    arrowRight.addEventListener('click', f1);
    function f1() {
        for (let i = 0; i < videos.length; i++) {

            if (videos[i].classList.contains('active')) {

                if (((videos.length - 1) - i) == 1) {
                    arrowRight.classList.remove('active');
                }

                if (i != (videos.length - 1)) {
                    videos[i + 1].classList.add('order');
                    videos[i + 1].classList.add('active');
                    videos[i].classList.add('transform');
                    arrowLeft.classList.add('active');
                    arrowLeft.disabled = true;
                    arrowRight.disabled = true;
                    if (videos[i + 1].classList.contains('order')) {
                        for (let j = 0; j < contents.length; j++) {
                            contents[j].classList.remove('active');
                            if (contents[j].getAttribute('data-content') == videos[i + 1].getAttribute('data-video')) {
                                contents[j].classList.add('active');
                            }
                        }
                    }
                    setTimeout(() => {
                        videos[i].classList.remove('active');
                        videos[i].classList.remove('order');
                        videos[i + 1].classList.remove('order');
                        videos[i].classList.remove('transform');
                        arrowLeft.disabled = false;
                        arrowRight.disabled = false;
                    }, 2000);
                    return;
                }

            }
        }
    }

    arrowLeft.addEventListener('click', f2);

    function f2() {
        for (let i = 0; i < videos.length; i++) {
            if (videos[i].classList.contains('active')) {


                if (i == 1) {
                    arrowLeft.classList.remove('active');
                }

                if (((videos.length - 1) - i) != (videos.length - 1)) {
                    videos[i - 1].classList.add('order');
                    videos[i - 1].classList.add('active');
                    videos[i].classList.add('transform2');
                    arrowRight.classList.add('active');
                    arrowRight.disabled = true;
                    arrowLeft.disabled = true;

                    if (videos[i - 1].classList.contains('order')) {
                        for (let j = 0; j < contents.length; j++) {
                            contents[j].classList.remove('active');
                            if (contents[j].getAttribute('data-content') == videos[i - 1].getAttribute('data-video')) {
                                contents[j].classList.add('active');
                            }
                        }

                    }
                    setTimeout(() => {
                        videos[i].classList.remove('active');
                        videos[i].classList.remove('order');
                        videos[i - 1].classList.remove('order');
                        videos[i].classList.remove('transform2');
                        arrowRight.disabled = false;
                        arrowLeft.disabled = false;
                    }, 2000);

                    return;
                }
            }
        }

    }

    //slider-range

    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [32, 186],
        slide: function (event, ui) {
            $("#filter1").val(ui.values[0]);
            $("#filter2").val(ui.values[1]);
        }

    });
    $("#slider-range2").slider({
        range: true,
        min: 0,
        max: 50,
        values: [1.5, 17],
        slide: function (event, ui) {
            $("#filter3").val(ui.values[0]);
            $("#filter4").val(ui.values[1]);
        }
    });

    $("#filter1").val($("#slider-range").slider("values", 0));
    $("#filter2").val($("#slider-range").slider("values", 1));
    $("#filter3").val($("#slider-range2").slider("values", 0));
    $("#filter4").val($("#slider-range2").slider("values", 1));


    $("#filter1").on('change', function () {
        let value1 = $("#filter1").val();
        let value2 = $("#filter2").val();

        if (parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            $("#filter1").val(value1);
        }

        $("#slider-range").slider('values', 0, value1);

    })
    $("#filter2").on('change', function () {
        let value1 = $("#filter1").val();
        let value2 = $("#filter2").val();

        if (value2 > 500) {
            value2 = 500;
            $("#filter2").val(500);
        }
        if (parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            $("#filter2").val(value2);
        }

        $("#slider-range").slider('values', 1, value2);

    })

    $("#filter3").on('change', function () {

        let value1 = $("#filter3").val();
        let value2 = $("#filter4").val();

        if (parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            $("#filter3").val(value1);
        }

        $("#slider-range2").slider('values', 0, value1);

    })
    $("#filter4").on('change', function () {

        let value1 = $("#filter3").val();
        let value2 = $("#filter4").val();

        if (value2 > 50) {
            value2 = 50;
            $("#filter4").val(50);
        }
        if (parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            $("#filter4").val(value2);
        }

        $("#slider-range2").slider('values', 1, value2);

    })


    //select

    const selected = document.querySelector('.selected');
    const optionContainer = document.querySelector('.options-container');
    const optionLists = document.querySelectorAll('.option');

    selected.addEventListener('click', () => {
        optionContainer.classList.toggle('active');
    })

    optionLists.forEach(o => {
        o.addEventListener('click', () => {
            selected.innerHTML = o.querySelector('label').innerHTML;
            optionContainer.classList.remove('active');
        })
    })

    //menu 

    let btnMenu = document.querySelector('.header__btn-mobile');
    let popupMenu = document.querySelector('.popup-menu');
    let body = document.querySelector('body');


    btnMenu.addEventListener('click', function () {
        popupMenu.classList.add('is-active');
        body.classList.add('no-scroll');
        if (popupMenu.classList.contains('is-active')) {
            body.addEventListener('keydown', function (e) {
                if (e.keyCode === 27) {
                    popupMenu.classList.remove('is-active');
                    body.classList.remove('no-scroll');
                }
            })
        }
    })

    body.addEventListener('click', function (a) {
        let target = a.target;
        if (target.classList.contains('popup__inner') || target.classList.contains('popup-close')) {
            popupMenu.classList.remove('is-active');
            body.classList.remove('no-scroll');
        }
    })

})