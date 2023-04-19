/**
 * medium-sized images (for screen widths below 1210px)
 * smaller-sized images (25% of ori width, for screen widths below 720px)
 */

const EL_PROFILE_IMG = document.querySelector(`#portrait img`);
const EL_PROFILE_SOURCE_LG = document.querySelector(`#portrait source[media="(min-width: 1920px)"]`);
// const EL_PROFILE_SOURCE_MD = document.querySelector(`#portrait source[media="(max-width: 1210px)"]`);
const EL_PROFILE_SOURCE_SM = document.querySelector(`#portrait source[media="(max-width: 756px)"]`);

const IMG_DEFAULT_BASE = "assets/images/portrait_sq";
const SIZE_SET = { normal: "_md.webp", lg: ".webp", md: "_md.webp", sm: "_sm.webp" };
const IMG_DEFAULT = {};
for (let sizeKey in SIZE_SET) {
	IMG_DEFAULT[sizeKey] = `${IMG_DEFAULT_BASE}${SIZE_SET[sizeKey]}`;
}
const IMG_OSCII_BASE = [
	// "assets/images/oscii_profile01",
	// "assets/images/oscii_profile02",
	// "assets/images/oscii_profile03",
	"assets/images/oscii_profile04",
	"assets/images/oscii_profile05",
	"assets/images/duo_profile01",
	// "assets/images/duo_profile02",
];

const IMG_OSCII = [];
const IMG_OSCII_LG = [];
const IMG_OSCII_MD = [];
const IMG_OSCII_SM = [];

IMG_OSCII_BASE.forEach((thisPath) => {
	IMG_OSCII.push(`${thisPath}${SIZE_SET["normal"]}`);
	IMG_OSCII_LG.push(`${thisPath}${SIZE_SET["lg"]}`);
	IMG_OSCII_MD.push(`${thisPath}${SIZE_SET["md"]}`);
	IMG_OSCII_SM.push(`${thisPath}${SIZE_SET["sm"]}`);
});

// edit profile image
EL_PROFILE_IMG.addEventListener("mouseover", () => {
	const RANDOM_INDEX = Math.floor(Math.random() * IMG_OSCII_BASE.length);
	EL_PROFILE_IMG.setAttribute("src", IMG_OSCII[RANDOM_INDEX]);
	EL_PROFILE_SOURCE_LG.setAttribute("srcset", IMG_OSCII_LG[RANDOM_INDEX]);
	EL_PROFILE_SOURCE_SM.setAttribute("srcset", IMG_OSCII_SM[RANDOM_INDEX]);
});
EL_PROFILE_IMG.addEventListener("mouseout", () => {
	EL_PROFILE_IMG.setAttribute("src", IMG_DEFAULT["md"]);
	EL_PROFILE_SOURCE_LG.setAttribute("srcset", IMG_DEFAULT["lg"]);
	EL_PROFILE_SOURCE_SM.setAttribute("srcset", IMG_DEFAULT["sm"]);
});
