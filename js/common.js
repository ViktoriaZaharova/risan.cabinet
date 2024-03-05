$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.product-card-slider').slick({
	slidesToShow: 1,
	dots: true,
	arrows: false,
	// autoplay: true,
	autoplaySpeed: 2000,
});

$('.exclusive-slider').slick({
	slidesToShow: 1,
	appendArrows: '.exclusive-slider__nav',
	variableWidth: true,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				variableWidth: false
			}
		}
	]
});

$('.advantages-slider').slick({
	slidesToShow: 4,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});

// $('[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
// 	$('.slick-slider').slick('setPosition');
// });


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