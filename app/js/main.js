$(function () {

    let modal_show = $('[data-modal]');
    let modal_close = $('[data-close]'); 

    modal_show.on('click', function (event) {
        event.preventDefault();

        let modal_id = $(this).data('modal');
        $(modal_id).addClass('show');
        $('body').addClass('no-scroll');

        $('[data-slider="modal__slider"]').slick('setPosition');
    });

    modal_close.on('click', function (event) {
        event.preventDefault();

        let modal_parent = $(this).parents('.modal');
        modal_parent.removeClass('show');
        $('body').removeClass('no-scroll');
    }); 

   $('.modal').on('click', function (event) {   
        $(this).removeClass('show');
        $('body').removeClass('no-scroll');
    }); 

    $('.modal__wrapper').on('click', function (event) {   
        event.stopPropagation();
    }); 

    $('.modal__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.modal__tabs').find('.tab-item').removeClass('active-tab').hide();
            $('.modal__tabs .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
        });

    $('.files__tabs .file__tab').on('click', function(event) {
        var id = $(this).attr('data-id');
                $('.files__tabs').find('.files__tab-item').removeClass('f_active-tab').hide();
                $('.files__tabs .tabs__tabs').find('.file__tab').removeClass('active');
                $(this).addClass('active');
                
                $('#'+id).addClass('f_active-tab').fadeIn();
                return false;
        });

    $('.files__box-item').on('click', function(){
        $(this).toggleClass('active');
        if ($('.files__box-item').hasClass('active')){
                    $('.insert__btn').addClass('active');
                    $('.insert__text').removeClass('active');
        }
        else {
            $('.insert__btn').removeClass('active');
            $('.insert__text').addClass('active');
        }
    });

    $('.search').on('click', function(){
            $('.search__input').toggleClass('active');
    });

    $('.menu').on('click', function(){
        $('.menu__icon').toggleClass('active');
    });

    $('.menu-adapt').on('click', function(){
        $('.menu__icon-adapt').toggleClass('active');
    });

    $('.parent').on('click', function(){
        $('.child__list').toggleClass('active');
    });

    $('.file__tab-child').on('click', function(){
        $('.grand__list').toggleClass('active');
    });

    $('.tabs__btn-name').on('click', function(){
        $('.tabs__tabs').addClass('active');
    });

    $('.tabs__top-left').on('click', function(){
        $('.tabs__tabs').removeClass('active');
    });

$(function (document, window, index) {
            'use strict';
            var inputs = document.querySelectorAll('.inputfile');
            Array.prototype.forEach.call(inputs, function (input) {
                var label = input.nextElementSibling,
                    labelVal = label.innerHTML;
    
                input.addEventListener('change', function (e) {
                    var fileName = '';
                    if (this.files && this.files.length > 1)
                        fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
                    else
                        fileName = e.target.value.split('\\').pop();
    
                    if (fileName)
                        label.querySelector('span').innerHTML = fileName;
                    else
                        label.innerHTML = labelVal;
                });
                // Firefox bug fix
                input.addEventListener('focus', function () {
                    input.classList.add('has-focus');
                });
                input.addEventListener('blur', function () {
                    input.classList.remove('has-focus');
                });
            });
        }(document, window, 0));
});




