
$(function () {


    //apartments-content 

    let apartmentsLinks = document.querySelectorAll('.apartments-options__list-link');
    let apartmentsContent = document.querySelector('.apartments-options__content');

    for (let i = 0; i < apartmentsLinks.length; i++) {
        apartmentsLinks[i].addEventListener('mouseover', function () {
            apartmentsContent.classList.add('hover');
        })
        apartmentsLinks[i].addEventListener('mouseout', function () {
            apartmentsContent.classList.remove('hover');
        })
    }

    //slider
    let arrowRight = document.querySelector('.apartments__slider-btn2');
    let arrowLeft = document.querySelector('.apartments__slider-btn1');
    let video1 = document.querySelector('.video1');

    arrowRight.addEventListener('click', function () {
        if (arrowRight.classList.contains('active')) {
            video1.classList.remove('active');
            video1.classList.add('remove');
            arrowLeft.classList.add('active');
            arrowRight.classList.remove('active');
        }
    })
    arrowLeft.addEventListener('click', function () {
        if (arrowLeft.classList.contains('active')) {
            video1.classList.remove('remove');
            video1.classList.add('active');
            arrowLeft.classList.remove('active');
            arrowRight.classList.add('active');
        }
    })

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






    //checkbox

    let checkBox = document.querySelectorAll('.filters__checkbox');

    for (let i = 0; i < checkBox.length; i++) {
        checkBox[i].addEventListener('change', function () {
            let checkedInput = this;
            for (let i = 0; i < checkBox.length; i++) {
                checkBox[i].checked = false;
            }
            checkedInput.checked = true;

        })
    }


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