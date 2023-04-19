function openWeekAccordion(semesterYear, semesterMonth, semesterDay) {
	const dateNow = new Date();
	const semesterDate = new Date(semesterYear, semesterMonth, semesterDay);

	// close all accordion cards first
	document.querySelectorAll("#accordionWeeks .accordion-button").forEach((e) => e.classList.add("collapsed"));
	document.querySelectorAll("#accordionWeeks .accordion-collapse").forEach((e) => e.classList.remove("show"));
	// $("#accordionWeeks .accordion-button").addClass("collapsed");
	// $("#accordionWeeks .accordion-collapse").removeClass("show");

	console.log(semesterDate);
	console.log(dateNow);
	console.log((dateNow - semesterDate) / (7 * 24 * 60 * 60 * 1000));

	const weeksElapsed = parseInt((dateNow - semesterDate) / (7 * 24 * 60 * 60 * 1000));
	console.log(weeksElapsed);

	let weekAttach;
	if (weeksElapsed < 10) weekAttach = "0" + weeksElapsed;
	else weekAttach = "" + weeksElapsed;

	// Needs work
	console.log(`"#heading--week${weekAttach}.accordion-button"`);

	if (weekAttach >= 1 && weekAttach <= 14) {
		document.querySelector(`#heading--week${weekAttach}.accordion-button`).classList.removeClass("collapsed");
		document.querySelector(`#collapse--week${weekAttach}`).classList.add("show");
	}

	// $(`"#heading--week${weekAttach}.accordion-button"`).removeClass("collapsed");
	// $(`#collapse--week${weekAttach}`).addClass("show");
}
