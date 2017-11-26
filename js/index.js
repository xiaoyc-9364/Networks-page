
	var MYAPP = {};

	MYAPP.json1 = {
		imgData: [
			{href: '#', src: 'image/image1.jpg'},
			{href: '#', src: 'image/image2.jpg'},
			{href: '#', src: 'image/image3.jpg'},
			{href: '#', src: 'image/image4.jpg'},
		],
		timeout: 2000,
	}
	MYAPP.json2 = {
		imgData: [
			{href: '#', src: 'image/taobao.png'},
			{href: '#', src: 'image/renren.png'},
			{href: '#', src: 'image/qq.png'},
			{href: '#', src: 'image/sina.png'},
			{href: '#', src: 'image/360.png'}
		],
		timeout: 1000,
	}

	MYAPP.slider1 = new Slide('.banner', MYAPP.json1);
	MYAPP.slider2 = new Slide('.small_slide', MYAPP.json2);
	MYAPP.oPrev = document.getElementById('prev');
	MYAPP.oNext = document.getElementById('next');
	
	addEvent(MYAPP.oPrev, 'click' ,function() {			
		MYAPP.slider2.go(-1);
	});
	addEvent(MYAPP.oNext, 'click' ,function() {
		MYAPP.slider2.go(1);
	});
	addEvent(window, 'resize', function() {		//图片随着视口大小自适应
		var oBnner = document.getElementById('banner')
			MYAPP.slider1.resize(oBnner.offsetWidth);
	});















