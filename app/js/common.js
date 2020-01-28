$(function() {

	var bannerSlider = $('.slider').slick({
		fade: true,
		autoplay: true,
		dots: true,
		arrows: false,
		
	});

	$('.sl-prev').on('click', function(e){
		e.preventDefault();
		bannerSlider.slick('slickPrev');
	});

	$('.sl-next').on('click', function(e){
		e.preventDefault();
		bannerSlider.slick('slickNext');
	});

});
