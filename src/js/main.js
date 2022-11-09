var swiper = new Swiper('.mySwiper', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 3,
	loop: true,
	coverflowEffect: {
		rotate: 50,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		240: {
			slidesPerView: 1,
		},
		560: {
			slidesPerView: 1,
		},
		992: {
			slidesPerView: 3,
		},
	},
});

var wow = new WOW({
	boxClass: 'wow', // animated element css class (default is wow)
	animateClass: 'animated', // animation css class (default is animated)
	offset: 0, // distance to the element when triggering the animation (default is 0)
	mobile: true, // trigger animations on mobile devices (default is true)
	live: true, // act on asynchronously loaded content (default is true)
	callback: function (box) {
		// the callback is fired every time an animation is started
		// the argument that is passed in is the DOM node being animated
	},
	scrollContainer: null, // optional scroll container selector, otherwise use window,
	resetAnimation: true, // reset animation on end (default is true)
});
wow.init();
