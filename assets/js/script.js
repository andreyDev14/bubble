$(function () {

	$('input[type="range"]').on('input', function () {
		$('.min').text(this.value);
	});

	function fixedMenu() {
		let s = $(window).scrollTop();
		if (s > 20) {
			$('.header__top-wrapper').addClass('header__top-wrapper_fixed');
			if ($(window).width() > 991) {}
		} else {
			$('.header__top-wrapper').removeClass('header__top-wrapper_fixed');
		}
		if ($(window).width() <= 991) {
			$('.header__top-wrapper').addClass('header__top-wrapper_fixed')
		}
	}
	fixedMenu();

	$(window).on('scroll', function () {
		fixedMenu();
	});


	$(window).resize(function () {
		if ($(window).width() > 991) {
			$('.header__mobile').removeClass('header__mobile_active');
			$('.menu-link').removeClass('menu-link_active');
		} else {
			$('.header__top-wrapper').addClass('header__top-wrapper_fixed')
		}
		fixedMenu();
	})

	// плавная прокрутка
	$('.menu li a, .scroll').click(function () {
		var scroll_el = $(this).attr('href');
		if ($(scroll_el).length != 0) {
			$('html, body').animate({
				scrollTop: $(scroll_el).offset().top - 130
			}, 800);
			$('.header__mobile').removeClass('header__mobile_active');
			$('.menu-link').removeClass('menu-link_active');
		} else {
			$('html, body').animate({
				scrollTop: 0
			}, 800);
		}
		return false;
	});

	// Мобильное меню
	let link = $('.menu-link'),
		menu = $('.header__mobile');

	link.on('click', function (e) {
		e.preventDefault();
		link.toggleClass('menu-link_active');
		menu.toggleClass('header__mobile_active');
	});

	// Очистка скрытого поля
	$('.modal').on('hidden.bs.modal', function () {
		$('input.modal__info').val('');
	})

	// Подстанока заголовка прайса
	$('.header__form .submit').on('click', function () {
		$('input.modal__info').val($(this).parent().find('input[type="range"]').val());
	})

	$('.card__item-button').on('click', function () {
		$('input.modal__info').val($(this).prev().prev().text())
	})

});