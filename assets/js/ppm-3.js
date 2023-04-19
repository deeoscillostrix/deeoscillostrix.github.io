// const OT_LORD = `<span class="small-caps">Lord</span>`;
// const OT_GOD = `<span class="small-caps">God</span>`;

const PPIU = [
	{
		prayer_item: {
			eng: `Thanks be to God, for He is in control of heaven and earth, and the current situation of the world. Let us be strong and courageous as we witness God's acts through this pandemic and economic crisis. Bless His name for He has heard the voice of our pleas for mercy.`,
			chi: `感谢上帝，祂掌管着天地和世界当前的状况。我们当刚强壮胆地来看上帝在这场疫情和经济危机中的作为。颂扬祂的名，因为祂听到了我们怜悯的恳求。`,
		},
		verse: {
			ref: {
				eng: "Psalm 27:1",
				chi: "诗篇 27:1",
			},
			quote: {
				eng: `The Lord is my light and my salvation; whom shall I fear?<br>
				The Lord is the stronghold of my life;<br>
				of whom shall I be afraid?`,
				chi: `耶和华是我的亮光，是我的拯救，<br>
				我害怕谁呢？<br>
				耶和华是我性命的保障，<br>
				我还据谁呢？`,
			},
		},
	},
	{
		prayer_item: {
			eng: `Citizens to trust our country's leadership and to comply to the Restiction of Movement Order and instruction "to stay home" to mitigate the spread of Covid-19.`,
			chi: ``,
		},
		verse: {
			ref: {
				eng: "Proverbs 3:21-22",
				chi: "",
			},
			quote: {
				eng: ``,
				chi: ``,
			},
		},
	},
];

const PPIU_DATES = [];
for (let d = new Date(2021, 5, 1), i = 0; i < PPIU.length; d.setDate(d.getDate() + 1), ++i) {
	PPIU_DATES.push(new Date(d));
}
// const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let accordion_ppiu_3 = "accordion-ppiu";

for (let i = 1; i <= PPIU.length; i++) {
	// Prepare date
	let dNow = PPIU_DATES[i - 1];
	let dMonth = dNow.toLocaleString("default", { month: "long" });
	let dShow = `${dMonth} ${dNow.getDate()}, ${dNow.getFullYear()} [${DAYS[dNow.getDay()]}]`;

	const ACCORDION_ITEM = document.createElement("section");
	ACCORDION_ITEM.classList.add("accordion-item");

	const ACCORDION_HEADER = document.createElement("h2");
	ACCORDION_HEADER.classList.add("accordion-header");
	ACCORDION_HEADER.id = `ppiu-${i}`;

	const ACCORDION_BUTTON = document.createElement("button");
	ACCORDION_BUTTON.classList.add("accordion-button", "collapsed");
	ACCORDION_BUTTON.type = "button";
	ACCORDION_BUTTON.setAttribute("data-bs-toggle", "collapse");
	ACCORDION_BUTTON.setAttribute("data-bs-target", `#collapse-ppiu-${i}`);
	ACCORDION_BUTTON.setAttribute("aria-expanded", "false");
	ACCORDION_BUTTON.setAttribute("aria-controls", `collapse-ppiu-${i}`);
	ACCORDION_BUTTON.innerHTML += `Day ${i} - ${dShow}`;

	const ACCORDION_CONTENTS = document.createElement("section");
	ACCORDION_CONTENTS.id = `collapse-ppiu-${i}`;
	ACCORDION_CONTENTS.classList.add("accordion-collapse", "collapse");
	ACCORDION_CONTENTS.setAttribute("aria-labelledby", `ppiu-${i}`);
	ACCORDION_CONTENTS.setAttribute("data-bs-parent", `#${accordion_ppiu_3}`);

	const ACCORDION_BODY = document.createElement("section");
	ACCORDION_BODY.classList.add("accordion-body");

	let row;

	for (let item of ["eng", "chi"]) {
		ACCORDION_BODY.innerHTML += `<p${item.includes("chi") ? " class='chinese-text fs-5'" : ""}>
			${PPIU[i - 1]["prayer_item"][item]}
			</p>`;
	}

	ACCORDION_CONTENTS.append(ACCORDION_BODY);

	ACCORDION_HEADER.append(ACCORDION_BUTTON);
	ACCORDION_ITEM.append(ACCORDION_HEADER, ACCORDION_CONTENTS);

	document.querySelector(`#${accordion_ppiu_3}`).append(ACCORDION_ITEM);
}
