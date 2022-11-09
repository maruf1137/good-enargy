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

// counter timer

const counters = document.querySelectorAll('.social__content .number');
// const social_section = document.querySelector('.social-section');
const speed = 200;
// const containerClient = social_section;
// social__content.client
// console.log(containerClient.scrollHeight);

if (counters) {
	counters.forEach((counter) => {
		const animate = () => {
			const value = +counter.getAttribute('akhi');
			const data = +counter.innerText;
			const time = value / speed;
			if (data < value) {
				counter.innerText = Math.ceil(data + time);
				setTimeout(animate, 1);
			} else {
				counter.innerText = value;
			}
		};
		animate();
	});
}
