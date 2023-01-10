window.addEventListener("scroll", function(){
	var nav = document.querySelector("nav");
	nav.classList.toggle("sticky", window.scrollY > 0);
})


var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1600,
	speedAsDuration: true
	});

	