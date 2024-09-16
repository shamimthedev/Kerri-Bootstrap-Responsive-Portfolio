// Typed JS Here
$(function(){
	$(".typed").typed({
		strings: ["Kerry Deo.", "A Designer.", "A Creator."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});

// MIxitUp JS Here 
var containerEl = document.querySelector('.filterMix');

            var mixer = mixitup(containerEl);

//==== Back-to-top button
$(window).on('scroll', function(event) {
	if($(this).scrollTop() > 600){
			$('.back-to-top').fadeIn(200)
	} else{
			$('.back-to-top').fadeOut(200)
	}
});
//==== Animate the scroll to top
$('.back-to-top').on('click', function(event) {
	event.preventDefault();

	$('html, body').animate({
			scrollTop: 0,
	}, 1000);
});