/*
	Story by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

	var $window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: ['361px', '480px'],
		xxsmall: [null, '360px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});



	// Smooth scroll.
	$('.smooth-scroll').scrolly();
	$('.smooth-scroll-middle').scrolly({ anchor: 'middle' });

	// Wrapper.
	$wrapper.children()
		.scrollex({
			top: '30vh',
			bottom: '30vh',
			initialize: function () {
				$(this).addClass('is-inactive');
			},
			terminate: function () {
				$(this).removeClass('is-inactive');
			},
			enter: function () {
				$(this).removeClass('is-inactive');
			},
			leave: function () {

				var $this = $(this);

				if ($this.hasClass('onscroll-bidirectional'))
					$this.addClass('is-inactive');

			}
		});


	  // Header scroll class
	  $(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
		  $('#header').addClass('header-scrolled');
		} else {
		  $('#header').removeClass('header-scrolled');
		}
	  });
	
	  if ($(window).scrollTop() > 100) {
		$('#header').addClass('header-scrolled');
	  }
	
	  // Smooth scroll for the navigation and links with .scrollto classes
	  $('.navbar a, .mobile-nav a, .scrollto').on('click', function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  if (target.length) {
			var top_space = 0;
	
			if ($('#header').length) {
			  top_space = $('#header').outerHeight();
	
			  if (!$('#header').hasClass('header-scrolled')) {
				top_space = top_space - 40;
			  }
			}
	
			$('html, body').animate({
			  scrollTop: target.offset().top - top_space
			}, 1500, 'easeInOutExpo');
	
			if ($(this).parents('.navbar, .mobile-nav').length) {
			  $('.navbar .active, .mobile-nav .active').removeClass('active');
			  $(this).closest('li').addClass('active');
			}
	
			if ($('body').hasClass('mobile-nav-active')) {
			  $('body').removeClass('mobile-nav-active');
			  $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
			  $('.mobile-nav-overly').fadeOut();
			}
			return false;
		  }
		}
	  });
	
	  // Navigation active state on scroll
	  var nav_sections = $('section');
	  var main_nav = $('.navbar, .mobile-nav');
	  var main_nav_height = $('#header').outerHeight();
	
	  $(window).on('scroll', function() {
		var cur_pos = $(this).scrollTop() + 200;
	
		nav_sections.each(function() {
		  var top = $(this).offset().top - main_nav_height,
			bottom = top + $(this).outerHeight();
	
		  if (cur_pos >= top && cur_pos <= bottom) {
			main_nav.find('li').removeClass('active');
			main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
		  }
	
		  if (cur_pos < 300) {
			$(".nav-menu ul:first li:first").addClass('active');
		  }
	
		});
	  });

})(jQuery);