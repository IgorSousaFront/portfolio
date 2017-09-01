var Banner = {
	writing: function () {
		$(".section-banner p span").typed({
			strings: ['Acessibilidade','Usabilidade', 'Responsividade', 'Manutenabilidade'],
			typeSpeed: 100,
			loop: true,
			showCursor: false,
			backDelay: 2000
		});
	}
};

var Portfolio = {
	carousel: function () {
		$('.portfolio-carousel').owlCarousel({
			loop: false,
			margin: 30,
			autoplay: true,
			autoplayTimeout: 5000,
			dots: true,
			nav: false,
			responsive:{
				0:{
					items:1
				},
				768:{
					items:2
				},
				992:{
					items:3
				}
			}
		});
	}
};

var App = {
	init: function () {
		$('a[href="#"]').click(function (e) {
				e.preventDefault();
	    });

		Banner.writing();

		Portfolio.carousel();
	}
};

$(document).ready(function(){
	App.init();
});

$(window).on('load', function() {
});

$(window).on('resize', function() {
});

window.addEventListener('popstate', function (e) {
});