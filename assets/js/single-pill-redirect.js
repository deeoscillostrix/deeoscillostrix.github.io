const hash = location.hash;
if (hash) {
	// check if section with ID according to hash already exists or not
	if (document.querySelector(`section${hash}`)) {
		// change selected pill
		document.querySelectorAll(`.nav-pills button.nav-link`).forEach((x) => {
			x.classList.remove("active");
			x.setAttribute("aria-selected", "false");
		});
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
}

// change hash as each nav pill is clicked on
document.querySelectorAll(".nav-pills button.nav-link").forEach((e) => {
	e.addEventListener("click", (e) => {
		if (document.querySelector(`section${e.target.dataset.bsTarget}`)) location.hash = e.target.dataset.bsTarget;
	});
});
