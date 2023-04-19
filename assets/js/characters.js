const INTRO_IMG_TAG = "#intro-img";
const INTRO_IMG_GROUP_TAG = ".intro-img";

if (document.querySelector(INTRO_IMG_TAG)) {
	["mouseover", "click"].forEach((img) => {
		document.querySelector(INTRO_IMG_TAG).addEventListener(img, function() {
			this.src = "../assets/images/intro_waving.webp";
			this.alt = "Waving Intro Image";
		});
	});

	// document.querySelector("#intro-img").addEventListener("mouseover", function() {
	// 	this.src = "../assets/images/intro_waving.png";
	// 	this.alt = "Waving Intro Image";
	// });

	["mouseout", "mouseleave"].forEach((img) => {
		document.querySelector(INTRO_IMG_TAG).addEventListener(img, function() {
			this.src = "../assets/images/intro_idle.webp";
			this.alt = "Idle Intro Image";
		});
	});

	// document.querySelector("#intro-img").addEventListener("mouseout", function() {
	// 	this.src = "../assets/images/intro_idle.png";
	// 	this.alt = "Idle Intro Image";
	// });
}

if (document.querySelector(INTRO_IMG_GROUP_TAG)) {
	["mouseover", "click"].forEach((img) => {
		document.querySelectorAll(INTRO_IMG_GROUP_TAG).forEach((e) => {
			e.addEventListener(img, function() {
				this.src = "../assets/images/intro_waving.webp";
				this.alt = "Waving Intro Image";
			});
		});
	});
	["mouseout", "mouseleave"].forEach((img) => {
		document.querySelectorAll(INTRO_IMG_GROUP_TAG).forEach((e) => {
			e.addEventListener(img, function() {
				this.src = "../assets/images/intro_idle.webp";
				this.alt = "Idle Intro Image";
			});
		});
	});
}
