$(function() {
	setUpCarousel(true)
	$(window).on('resize', function() {
		setUpCarousel(false)
	})

	$('.carousel-indicators li').on('click', function() {
		var carousel = findCarousel($(this))
		var index = $(this).index()
		goToCarouselSlide(carousel, index)
	})

	$('.carouselNav[nav="left"]').on('click', function() {
		var carousel = findCarousel($(this))
		var index = $(carousel.container).find('.item.active').index() - 1
		if (index < 0) {
			index = carousel.slides.length - 1
		}
		goToCarouselSlide(carousel, index)
	})

	$('.carouselNav[nav="right"]').on('click', function() {
		var carousel = findCarousel($(this))
		var index = $(carousel.container).find('.item.active').index() + 1
		if (index >= carousel.slides.length) {
			index = 0
		}
		goToCarouselSlide(carousel, index)
	})
})

function goToCarouselSlide(carousel, index) {
	$(carousel.container).find('.item.droppingOut')
		.removeClass('droppingOut')
	$(carousel.container).find('.item.active')
		.addClass('droppingOut')
		.removeClass('active')

	carousel.slides
		.removeClass('left')
		.removeClass('right')
	$(carousel.slides[index])
		.addClass('active')
		
	for (var i = 0; i < index; i++) {
		$(carousel.slides[i]).addClass('left')
	}
	for (var i = index+1; i < carousel.slides.length; i++) {
		$(carousel.slides[i]).addClass('right')
	}

	var indicators = $(carousel.container).find('.carousel-indicators li')
	indicators.removeClass('active')
	$(indicators[index]).addClass('active')
}

function setUpCarousel(newCarousel) {
	$('.carousel').each(function(thiscarousel) {
		var carousel = findCarousel($(this), true)
		if (newCarousel) {
			$(carousel.slides[0]).addClass('active')
			for (var i = carousel.slides.length - 1; i > 0; i--) {
				$(carousel.slides[i]).addClass('right')
			}
			appendCarouselNavigation(carousel)
		}
		var speed = $(carousel.container).attr('speed')
		if (typeof speed != 'undefined' && !isNaN(+speed)) {

			eval('var timer_'+thiscarousel+';')
			eval('var index_'+thiscarousel+' = 0;')

			$(carousel.container).find('.carouselNav').on('click', function() {
				eval('clearTimeout(timer_'+thiscarousel+')')
				var newIndex = $(carousel.container).find('.item.active').index() + 1;
				if (newIndex >= carousel.slides.length) {
					newIndex = 0
				}
				eval('var timer_'+thiscarousel+';')
				eval('var index_'+thiscarousel+' = newIndex;')
				rollSlide(eval('index_'+thiscarousel));

			})

			rollSlide(eval('index_'+thiscarousel));

			function rollSlide(index) {

			    eval('timer_'+thiscarousel+' = timer = setTimeout(function(){\
			    \
			    	index++;\
				    if (index >= carousel.slides.length) {\
						index = 0;\
					}\
			    	goToCarouselSlide(carousel, index);\
			    	rollSlide(index);\
			    }, +speed);\
			    ')
			}
		}
	})
}

function appendCarouselNavigation(carousel) {
	var indicators = '<li class="active"></li>'
	for (var i = carousel.slides.length - 1; i > 0; i--) {
		indicators += '<li></li>'
	}
	carousel.viewer.append('<ol class="carousel-indicators">'+indicators+'</ol>')
	carousel.viewer.append('<i class="fa fa-arrow-left carouselNav" nav="left" aria-hidden="true"></i>')
	carousel.viewer.append('<i class="fa fa-arrow-right carouselNav" nav="right" aria-hidden="true"></i>')
}

function findCarousel(thisEle, reset) {
	var carousel = {}
	carousel.container = thisEle.closest('.carousel') || thisEle
	carousel.slides = carousel.container.find('.item')
	carousel.viewer = carousel.container.find('.viewer')
	carousel.slideCont = carousel.slides.parent()

	if (reset) {
		setCarouselSizing(carousel)
	}
	return carousel
	
}

function setCarouselSizing(carousel) {
	carousel.container.find('.item').width('inherit')
	carousel.slides.addClass('settingUp')
	carousel.slideCont
		.height('initial')
		.width('initial')

	var slideSize = carousel.slides[0].getBoundingClientRect()
	carousel.slideWidth = slideSize.width.toFixed(5)
	carousel.slideHeight = slideSize.height.toFixed(5)
	carousel.slides.removeClass('settingUp')
	carousel.slideCont
		.height(carousel.slideHeight)
		.width(carousel.slideWidth)
}