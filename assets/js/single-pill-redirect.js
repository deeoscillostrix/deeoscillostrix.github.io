const hash = location.hash;
if (hash) {
	// console.log(hash);
	// console.log(`.nav-pills a[href=\\${hash}]`);

	// check if section with ID according to hash already exists or not
	if (document.querySelector(`section${hash}`)) {
		// change selected pill
		for (let x of document.querySelectorAll(".nav-pills button.nav-link")) {
			x.classList.remove("active");
			x.setAttribute("aria-selected", "false");
		}
		document.querySelector(`${hash}-tab`).classList.add("active");
		document.querySelector(`${hash}-tab`).setAttribute("aria-selected", "true");

		// display tab as according to hash
		document.querySelectorAll(".tab-pane").forEach((e) => {
			e.classList.remove("active");
			e.classList.remove("show");
		});
		document.querySelector(hash).classList.add("active");
		document.querySelector(hash).classList.add("show");
	}

	// if ($(`section${hash}`).length) {
	// 	// change selected pill
	// 	$(".nav-pills button.nav-link").removeClass("active");
	// 	$(".nav-pills button.nav-link").attr("aria-selected", "false");
	// 	$(`${hash}-tab`).addClass("active");
	// 	$(`${hash}-tab`).attr("aria-selected", "true");

	// 	// display tab as according to hash
	// 	$(".tab-pane").removeClass("active show");
	// 	$(hash).addClass("active show");
	// }
}

// change hash as each nav pill is clicked on
document.querySelectorAll(".nav-pills button.nav-link").forEach((e) => {
	e.addEventListener("click", (e) => {
		if (document.querySelector(`section${e.target.dataset.bsTarget}`)) location.hash = e.target.dataset.bsTarget;
	});
});

// $(".nav-pills button.nav-link").on("click", (e) => {
// 	// console.log(e.target.dataset.bsTarget);
// 	if ($(`section${e.target.dataset.bsTarget}`).length) {
// 		location.hash = e.target.dataset.bsTarget;
// 	}
// });
