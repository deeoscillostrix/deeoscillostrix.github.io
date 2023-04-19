for (let toggleButton of ["#toggleMoreEdu", "#toggleMoreExp"]) {
	document.querySelector(toggleButton).addEventListener("click", (e) => viewButton(e));
}

// document.querySelector("#toggleMoreEdu").addEventListener("click", (e) => viewButton(e));
