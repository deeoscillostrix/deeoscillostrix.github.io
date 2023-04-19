/**
 * Automatically show dropdown menu item contents on hover
 *
 * Reference for animation on dropdown:
 * https://webdesign.tutsplus.com/tutorials/how-to-make-the-bootstrap-navbar-dropdown-work-on-hover--cms-33840
 */

// const $dropdown = $(".dropdown");
// const $dropdownToggle = $(".dropdown-toggle");
// const $dropdownMenu = $(".dropdown-menu");
// const showClass = "show";

// $(window).on("load resize", () => {
// 	if (this.matchMedia("(min-width: 768px)").matches) {
// 		$dropdown.on(
// 			"mouseenter",
// 			// mouseEnter()
// 			function() {
// 				console.log("Mouse enter");
// 				const $this = $(this);
// 				$this.addClass(showClass);
// 				$this.find($dropdownToggle).attr("aria-expanded", "true");
// 				$this.find($dropdownMenu).addClass(showClass);
// 			}
// 		);
// 		$dropdown.on(
// 			"mouseleave",
// 			// mouseLeave()
// 			function() {
// 				console.log("Mouse leave");
// 				const $this = $(this);
// 				$this.removeClass(showClass);
// 				$this.find($dropdownToggle).attr("aria-expanded", "false");
// 				$this.find($dropdownMenu).removeClass(showClass);
// 			}
// 		);
// 	} else {
// 		$dropdown.off("mouseenter mouseleave");
// 	}
// });

const $dropdown = document.querySelector(".dropdown");
const $dropdownToggle = document.querySelector(".dropdown-toggle");
const $dropdownMenu = document.querySelector(".dropdown-menu");
const showClass = "show";

function dropDownHandler() {
	if (this.matchMedia("(min-width: 768px)").matches) {
		$dropdown.addEventListener("mouseenter", function(e) {
			// console.log("Mouse enter");
			// console.log(e.target);

			const $this = e.target;
			$this.classList.add(showClass);
			$dropdownToggle.setAttribute("aria-expanded", "true");
			$dropdownMenu.classList.add(showClass);
		});
		$dropdown.addEventListener("mouseleave", function(e) {
			// console.log("Mouse leave");
			// console.log(e.target);

			const $this = e.target;
			$this.classList.remove(showClass);
			$dropdownToggle.setAttribute("aria-expanded", "false");
			$dropdownMenu.classList.remove(showClass);
		});
	} else {
		$dropdown.removeEventListener("mouseenter mouseleave");
	}
}

if ($dropdown) {
	window.addEventListener("load", dropDownHandler());
	window.addEventListener("resize", dropDownHandler());
}
