["mouseover", "click"].forEach((img) => {
	document.querySelector("#intro-img").addEventListener(img, function() {
		this.src = "assets/images/intro_waving.webp";
		this.alt = "Waving Intro Image";
	});
});

["mouseout", "mouseleave"].forEach((img) => {
	document.querySelector("#intro-img").addEventListener(img, function() {
		this.src = "assets/images/intro_idle.webp";
		this.alt = "Idle Intro Image";
	});
});
