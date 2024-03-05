$('[name="phone"]').mask('+7 (999) 999-99-99');

// $('.product-card-slider').slick({
// 	slidesToShow: 1,
// 	dots: true,
// 	arrows: false,
// 	// autoplay: true,
// 	autoplaySpeed: 2000,
// });

// $('.exclusive-slider').slick({
// 	slidesToShow: 1,
// 	appendArrows: '.exclusive-slider__nav',
// 	variableWidth: true,
// 	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
// 	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
// 	responsive: [
// 		{
// 			breakpoint: 576,
// 			settings: {
// 				slidesToShow: 1,
// 				variableWidth: false
// 			}
// 		}
// 	]
// });

$('.sales-slider').slick({
	slidesToShow: 1,
	variableWidth: true,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	appendArrows: '.sales-slider__nav',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				variableWidth: true,
				// autoplay: true,
				arrows: false
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				variableWidth: true,
				autoplay: true,
				arrows: false
			}
		}
	]
});

let homeSlider = $('.sales-slider');

$('.counter-slide__default').text("/" + homeSlider.slick("getSlick").slideCount);

homeSlider.on('afterChange', function (event, slick, currentSlide) {
	$(".counter-slide__cp").text(currentSlide < 10 ? `${currentSlide + 1}` : currentSlide + 1);
});


// password view
$('.btn-view-password').on('click', function () {
	if ($(this).siblings('.input-password').attr('type') === 'password') {
		$(this).addClass('view');
		$(this).siblings('.input-password').attr('type', 'text');
	} else {
		$(this).removeClass('view');
		$(this).siblings('.input-password').attr('type', 'password');
	}
	return false;
});