window.onload = function(){


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
	var	oBanner = document.getElementById('banner');
	var a;
	// MYAPP.slider = new Slide('.banner', MYAPP.json);
	// console.log(MYAPP.slider.width);
	document.onresize = function () {

		MYAPP.slider.width = oBanner.offsetWidth;
	}

}

















