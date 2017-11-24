
	var MYAPP = {};

	MYAPP.json = {
		imgData: [
			{href: '#', src: 'image/image1.jpg'},
			{href: '#', src: 'image/image2.jpg'},
			{href: '#', src: 'image/image3.jpg'},
			{href: '#', src: 'image/image4.jpg'},
		],
		timeout: 3000,
	}
	MYAPP.slider1 = new Slide('.banner', MYAPP.json);
	MYAPP.slider2 = new Slide('.small_slide', MYAPP.json);
	MYAPP.banner = document.getElementById('banner')
	window.onresize = function() {
		MYAPP.slider1.width = MYAPP.banner.style.width;
	}
	MYAPP.oPrev = document.getElementById('prev');
	MYAPP.oNext = document.getElementById('next');
	MYAPP.oPrev.addEventListener('click', function() {
		MYAPP.slider2.go(-1);
	}, false);
	MYAPP.oPrev.addEventListener('click', function() {
		MYAPP.slider2.go(1);
	}, false);
	console.log(MYAPP.oPrev);

















