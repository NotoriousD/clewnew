$(function() {

	$('.header__hamburger').on('click', function () {
		$('.hamburger').toggleClass('is-active');
		$('.header__menu-mobile').toggleClass('mobile-menu-active');
		$('.bgmobile').toggleClass('bgmobile-active');
	});

	var bannerSlider = $('.slider').slick({
		fade: true,
		autoplay: true,
		dots: true,
		arrows: false,
		speed: 1000,
		autoplaySpeed: 5000
	});

	$('.sl-prev').on('click', function(e){
		e.preventDefault();
		bannerSlider.slick('slickPrev');
	});

	$('.sl-next').on('click', function(e){
		e.preventDefault();
		bannerSlider.slick('slickNext');
	});

	var newsSlider = $('.news__slider').slick({
		autoplay: true,
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplaySpeed: 5000,
		speed: 1000,
	});

	var colabSlider = $('.colab__slider').slick({
		autoplay: true,
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplaySpeed: 5000,
		speed: 1000
	});

});
