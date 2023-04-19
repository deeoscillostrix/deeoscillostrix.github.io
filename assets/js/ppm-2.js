const P3M = [
	{
		theme: {
			eng: "Adoration & Thanksgiving",
			chi: "敬拜与感恩",
		},
		main_points: [
			{
				eng: "God's Promises, Presence, Protection, Provision",
				chi: "上帝的应许、同在、保护、供应",
			},
		],
		read: [
			{
				eng: "Psalm 92",
				chi: "诗篇 92",
			},
		],
	},
	{
		theme: {
			eng: "#New Normal",
			chi: "#新常态",
		},
		main_points: [
			{
				eng: "Paradigm shift",
				chi: "模式转变",
			},
			{
				eng: "Plug in to God and the world",
				chi: "与上帝和世界连接",
			},
			{
				eng: "Prolific discipleship",
				chi: "多结果子的门徒",
			},
		],
		read: [
			{
				eng: "Joshua 1:7b-9",
				chi: "约书亚记 1:7（下）-9",
			},
		],
	},
	{
		theme: {
			eng: "Renewal & Restoration",
			chi: "更新与恢复",
		},
		main_points: [
			{
				eng: "Body - physical condition",
				chi: "身–身体状况",
			},
			{
				eng: "Mind - emotional and psychological health",
				chi: "心–情绪和心理健康",
			},
			{
				eng: "Soul - spiritual well-being",
				chi: "灵–灵命健康",
			},
		],
		read: [
			{
				eng: "Matthew 11:28",
				chi: "马太福音 11:28",
			},
			{
				eng: "Isaiah 40:28-31",
				chi: "以赛亚书 40:28-31",
			},
		],
	},
	{
		theme: {
			eng: "Holiness - People after God's Heart",
			chi: "圣洁 - 成为和神心意的人",
		},
		main_points: [
			{
				eng: "Home",
				chi: "家庭",
			},
			{
				eng: "Church",
				chi: "教会",
			},
			{
				eng: "Nation",
				chi: "国家",
			},
		],
		read: [
			{
				eng: "Hebrews 12:14",
				chi: "希伯来书 12:14",
			},
		],
	},
	{
		theme: {
			eng: "Arise! Shine! O City on the Hill; Light of the World",
			chi: "起来！发光！山上的城；世上的光",
		},
		main_points: [
			{
				eng: "Awakening",
				chi: "觉醒",
			},
			{
				eng: "Anointing",
				chi: "恩膏",
			},
			{
				eng: "Lasting Legacy: Spiritual disciplines & works of mercy",
				chi: "持久的遗产：属灵纪律和怜悯之工",
			},
		],
		read: [
			{
				eng: "Psalm 71:20-21",
				chi: "诗篇 71:20-21",
			},
			{
				eng: "Isaiah 61:1-3",
				chi: "以赛亚书 61:1-3",
			},
		],
	},
	{
		theme: {
			eng: "Spiritual Heritage - Intimacy & Growth",
			chi: "属灵遗产 - 亲密与成长",
		},
		main_points: [
			{
				eng: "The SILENT Generation - seniors",
				chi: "沉默的一代 - 老年人",
			},
			{
				eng: "The NEW Generation - adults",
				chi: "新一代 - 成年人",
			},
			{
				eng: "The NEXT Generation - youth and young adults",
				chi: "下一代 - 青年和青成年",
			},
			{
				eng: "The i-Generation - children & teenagers",
				chi: "属马的一代 - 儿童和少年",
			},
			{
				eng: "The ALPHA Generation - toddlers & preschoolers",
				chi: "学前的一代 - 幼儿和学龄前儿童",
			},
		],
		read: [
			{
				eng: "Deuteronomy 6:5-7",
				chi: "申命记 6:5-7",
			},
		],
	},
	{
		theme: {
			eng: 'KCMC - "FAITH, LIFE, MISSION"',
			chi: "KCMC - 信仰，生活＆使命",
		},
		main_points: [
			{
				eng: "Church Leadership",
				chi: "领导层",
			},
			{
				eng: 'Resumption Plan for "physical worship"',
				chi: "恢复＂实体崇拜＂的计划",
			},
			{
				eng: "Ministries: SS, YMIF, CG, Choir, MWF, Senior Fellowship, etc.",
				chi: "事工：主日学，青少年团契，诗班，卫理妇女姐妹会，乐龄团契等。",
			},
			{
				eng: "Mission & Local Evangelism: OA, GNC, Private School",
				chi: "宣教与本地布道：原住民事工，佳音团契，校园事工",
			},
			{
				eng: "Preaching Points: BBT2, KUMC, SAMC, P. Ketam, Sg Lima",
				chi: "布道所：武吉丁宜2，巴生卫星市，实提阿南，吉胆岛，五条港",
			},
		],
		read: [
			{
				eng: "Matthew 5:14-16",
				chi: "马太福音 5:14-16",
			},
		],
	},
];

const DATES_START = [];
const DATES_END = [];
for (
	let d1 = new Date(2020, 5, 1), d2 = new Date(2020, 5, 7), i = 0;
	i < P3M.length;
	d1.setDate(d1.getDate() + 7), d2.setDate(d2.getDate() + 7), ++i
) {
	DATES_START.push(new Date(d1));
	DATES_END.push(new Date(d2));
}
let accordion_p3m = "accordion-p3m";

for (let i = 1; i <= P3M.length; i++) {
	// Prepare date
	let dNow_start = DATES_START[i - 1];
	let dMonth_start = dNow_start.toLocaleString("default", { month: "long" });
	let dNow_end = DATES_END[i - 1];
	let dMonth_end = dNow_end.toLocaleString("default", { month: "long" });

	let dShow_start = `${dMonth_start} ${dNow_start.getDate()}, ${dNow_start.getFullYear()}`;
	let dShow_end = `${dMonth_end} ${dNow_end.getDate()}, ${dNow_end.getFullYear()}`;

	const ACCORDION_ITEM = document.createElement("section");
	ACCORDION_ITEM.classList.add("accordion-item");

	const ACCORDION_HEADER = document.createElement("h2");
	ACCORDION_HEADER.classList.add("accordion-header");
	ACCORDION_HEADER.id = `p3m-${i}`;

	const ACCORDION_BUTTON = document.createElement("button");
	ACCORDION_BUTTON.classList.add("accordion-button", "collapsed");
	ACCORDION_BUTTON.type = "button";
	ACCORDION_BUTTON.setAttribute("data-bs-toggle", "collapse");
	ACCORDION_BUTTON.setAttribute("data-bs-target", `#collapse-p3m-${i}`);
	ACCORDION_BUTTON.setAttribute("aria-expanded", "false");
	ACCORDION_BUTTON.setAttribute("aria-controls", `collapse-p3m-${i}`);
	ACCORDION_BUTTON.innerHTML += `Week ${i} [${dShow_start} - ${dShow_end}]`;

	const ACCORDION_CONTENTS = document.createElement("section");
	ACCORDION_CONTENTS.id = `collapse-p3m-${i}`;
	ACCORDION_CONTENTS.classList.add("accordion-collapse", "collapse");
	ACCORDION_CONTENTS.setAttribute("aria-labelledby", `p3m-${i}`);
	ACCORDION_CONTENTS.setAttribute("data-bs-parent", `#${accordion_p3m}`);

	const ACCORDION_BODY = document.createElement("section");
	ACCORDION_BODY.classList.add("accordion-body");

	ACCORDION_BODY.innerHTML += `<section class="text-center">
	<header><h3>Theme</h3></header>
	<h4 class="text-primary">${P3M[i - 1].theme.eng}
	<span class="chinese-text">${P3M[i - 1].theme.chi}</span>
	</h4>
	</section>`;

	const HR = document.createElement("hr");

	let ul = document.createElement("ul");
	ul.classList.add("py-3", "text-center");
	ul.style.listStyleType = "none";
	for (let point of P3M[i - 1].main_points) {
		let li = document.createElement("li");
		li.classList.add("pb-2");
		li.innerHTML += `${point.eng} `;

		let span = document.createElement("span");
		span.classList.add("chinese-text", "fs-5");
		span.innerHTML += point.chi;
		li.append(span);
		ul.append(li);
	}
	ACCORDION_BODY.append(ul);

	ACCORDION_BODY.append(HR);

	ACCORDION_BODY.innerHTML += `<section class="text-center">
	<header><h3>Pray</h3></header>`;

	ul = document.createElement("ul");
	ul.classList.add("py-3", "text-center");
	ul.style.listStyleType = "none";
	for (let verse of P3M[i - 1].read) {
		let li = document.createElement("li");
		li.classList.add("pb-2");
		li.innerHTML += `${verse.eng} `;

		let span = document.createElement("span");
		span.classList.add("chinese-text", "fs-5");
		span.innerHTML += verse.chi;
		li.append(span);
		ul.append(li);
	}
	ACCORDION_BODY.append(ul);

	// <h4 class="text-primary">${P3M[i - 1].read.eng}
	// <span class="chinese-text">${P3M[i - 1].read.chi}</span></h4>

	ACCORDION_BODY.innerHTML += `</section>`;

	ACCORDION_CONTENTS.append(ACCORDION_BODY);

	ACCORDION_HEADER.append(ACCORDION_BUTTON);
	ACCORDION_ITEM.append(ACCORDION_HEADER, ACCORDION_CONTENTS);

	document.querySelector(`#${accordion_p3m}`).append(ACCORDION_ITEM);
}
