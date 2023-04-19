window.onload = () => {
	// Reflections on Teaching - set anchor tags to open in new tab
	document.querySelectorAll("#collapse-teach-reflections > .accordion-body > .m-3 a").forEach((e) => {
		e.setAttribute("target", "_blank");
	});
};
