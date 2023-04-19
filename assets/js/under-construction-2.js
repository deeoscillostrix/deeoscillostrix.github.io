["mouseover", "click"].forEach((img) => {
	if (document.querySelector("#intro-img")) {
		document.querySelector("#intro-img").addEventListener(img, function() {
			this.src = "../assets/images/intro_waving.png";
			this.alt = "Waving Intro Image";
		});
	} else {
		document.querySelectorAll(".intro-img").forEach(function() {
			this.addEventListener(img, function() {
				this.src = "../assets/images/intro_waving.png";
				this.alt = "Waving Intro Image";
			});
		});
	}
});

["mouseout", "mouseleave"].forEach((img) => {
	if (document.querySelector("#intro-img")) {
		document.querySelector("#intro-img").addEventListener(img, function() {
			this.src = "../assets/images/intro_idle.png";
			this.alt = "Idle Intro Image";
		});
	} else {
		document.querySelectorAll(".intro-img").forEach(function() {
			this.addEventListener(img, function() {
				this.src = "../assets/images/intro_idle.png";
				this.alt = "Idle Intro Image";
			});
		});
	}
});
