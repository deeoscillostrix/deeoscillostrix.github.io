const visuallyHiddenClass = "visually-hidden";

function hideDisplays() {
	document.querySelectorAll(".display-view").forEach((e) => {
		if (!e.classList.contains(visuallyHiddenClass)) e.classList.add(visuallyHiddenClass);
	});
}

window.onload = function() {
	hideDisplays();
	document.querySelector(`#view-main`).classList.remove(visuallyHiddenClass);
};

["main", "about", "socials"].forEach((attach) => {
	// console.log(`.btn-${attach}`);
	document.querySelectorAll(`.btn-${attach}`).forEach((e) => {
		e.addEventListener("click", () => {
			hideDisplays();
			document.querySelector(`#view-${attach}`).classList.remove(visuallyHiddenClass);
		});
	});
	// document.querySelector(`#view-${attach}`).addEventListener("click", () => {});
});
