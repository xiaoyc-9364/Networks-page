
	var MYAPP = {};

	MYAPP.json = {
		imgData: [
			{href: '#', src: 'image/image1.jpg'},
			{href: '#', src: 'image/image2.jpg'},
			{href: '#', src: 'image/image3.jpg'},
			{href: '#', src: 'image/image4.jpg'},
		],
		timeout: 2000,
	}
	MYAPP.slider1 = new Slide('.banner', MYAPP.json);
	MYAPP.slider2 = new Slide('.small_slide', MYAPP.json);
	MYAPP.oPrev = document.getElementById('prev');
	MYAPP.oNext = document.getElementById('next');
	MYAPP.oPrev.addEventListener('click', function() {
		MYAPP.slider2.go(-1);
	}, false);
	MYAPP.oPrev.addEventListener('click', function() {
		MYAPP.slider2.go(1);
	}, false);
	console.log(MYAPP.oPrev);

















