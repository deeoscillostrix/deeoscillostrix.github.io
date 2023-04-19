const TYPES = {
	dragon: { eng: "Dragon", jpn: "ドラゴン", chs: "龙", cht: "龍", effectiveness: {} },
	ghost: { eng: "Ghost", jpn: "ゴースト", chs: "幽灵", cht: "幽靈", effectiveness: {} },
	ground: { eng: "Ground", jpn: "じめん", chs: "地面", cht: "地面", effectiveness: {} },
	flying: { eng: "Flying", jpn: "ひこう", chs: "飞行", cht: "飛行", effectiveness: {} },
	poison: { eng: "Poison", jpn: "どく", chs: "毒", cht: "毒", effectiveness: {} },
	bug: { eng: "Bug", jpn: "むし", chs: "虫", cht: "蟲", effectiveness: {} },
	water: { eng: "Water", jpn: "みず", chs: "水", cht: "水", effectiveness: {} },
	electric: { eng: "Electric", jpn: "でんき", chs: "电", cht: "電", effectiveness: {} },
	rock: { eng: "Rock", jpn: "いわ", chs: "岩石", cht: "岩石", effectiveness: {} },
	grass: { eng: "Grass", jpn: "くさ", chs: "草", cht: "草", effectiveness: {} },
	dark: { eng: "Dark", jpn: "あく", chs: "恶", cht: "惡", effectiveness: {} },
	ice: { eng: "Ice", jpn: "こおり", chs: "冰", cht: "冰", effectiveness: {} },
	normal: { eng: "Normal", jpn: "ノーマル", chs: "一般", cht: "一般", effectiveness: {} },
	fire: { eng: "Fire", jpn: "ほのお", chs: "火", cht: "火", effectiveness: {} },
	fighting: { eng: "Fighting", jpn: "かくとう", chs: "格斗", cht: "格鬥", effectiveness: {} },
	steel: { eng: "Steel", jpn: "はがね", chs: "钢", cht: "鋼", effectiveness: {} },
	psychic: { eng: "Psychic", jpn: "エスパー", chs: "超能力", cht: "超能力", effectiveness: {} },
	fairy: { eng: "Fairy", jpn: "フェアリー", chs: "妖精", cht: "妖精", effectiveness: {} },
};

// initializes effectiveness array for each type
for (let type in TYPES) for (let t_e in TYPES) TYPES[type].effectiveness[t_e] = 1;

// // effectiveness against Dragon TYPES [0]
for (let x of ["water", "electric", "grass", "fire"]) TYPES.dragon.effectiveness[x] /= 2;
for (let x of ["dragon", "ice", "fairy"]) TYPES.dragon.effectiveness[x] *= 2;

// effectiveness against Ghost TYPES [1]
for (let x of ["poison", "bug"]) TYPES.ghost.effectiveness[x] /= 2;
for (let x of ["ghost", "dark"]) TYPES.ghost.effectiveness[x] *= 2;
for (let x of ["normal", "fighting"]) TYPES.ghost.effectiveness[x] = 0;

// effectiveness against Ground TYPES [2]
for (let x of ["poison", "rock"]) TYPES.ground.effectiveness[x] /= 2;
for (let x of ["water", "grass", "ice"]) TYPES.ground.effectiveness[x] *= 2;
for (let x of ["electric"]) TYPES.ground.effectiveness[x] = 0;

// // effectiveness against Flying TYPES [3]
for (let x of ["bug", "grass", "fighting"]) TYPES.flying.effectiveness[x] /= 2;
for (let x of ["electric", "rock", "ice"]) TYPES.flying.effectiveness[x] *= 2;
for (let x of ["ground"]) TYPES.flying.effectiveness[x] = 0;

// effectiveness against Poison TYPES [4]
for (let x of ["poison", "bug", "grass", "fighting", "fairy"]) TYPES.poison.effectiveness[x] /= 2;
for (let x of ["ground", "psychic"]) TYPES.poison.effectiveness[x] *= 2;

// effectiveness against Bug TYPES [5]
for (let x of ["ground", "grass", "fighting"]) TYPES.bug.effectiveness[x] /= 2;
for (let x of ["flying", "rock", "fire"]) TYPES.bug.effectiveness[x] *= 2;

// effectiveness against Water TYPES [6]
for (let x of ["water", "ice", "fire", "steel"]) TYPES.water.effectiveness[x] /= 2;
for (let x of ["electric", "grass"]) TYPES.water.effectiveness[x] *= 2;

// effectiveness against Electric TYPES [7]
for (let x of ["flying", "electric", "steel"]) TYPES.electric.effectiveness[x] /= 2;
for (let x of ["ground"]) TYPES.electric.effectiveness[x] *= 2;

// effectiveness against Rock TYPES [8]
for (let x of ["flying", "poison", "normal", "fire"]) TYPES.rock.effectiveness[x] /= 2;
for (let x of ["ground", "water", "grass", "fighting", "steel"]) TYPES.rock.effectiveness[x] *= 2;

// effectiveness against Grass TYPES [9]
for (let x of ["ground", "water", "electric", "grass"]) TYPES.grass.effectiveness[x] /= 2;
for (let x of ["flying", "poison", "bug", "ice", "fire"]) TYPES.grass.effectiveness[x] *= 2;

// effectiveness against Dark TYPES [10]
for (let x of ["ghost", "dark"]) TYPES.dark.effectiveness[x] /= 2;
for (let x of ["bug", "fighting", "fairy"]) TYPES.dark.effectiveness[x] *= 2;
for (let x of ["psychic"]) TYPES.dark.effectiveness[x] = 0;

// effectiveness against Ice TYPES [11]
for (let x of ["ice"]) TYPES.ice.effectiveness[x] /= 2;
for (let x of ["rock", "fire", "fighting", "steel"]) TYPES.ice.effectiveness[x] *= 2;

// effectiveness against Normal TYPES [12]
for (let x of ["fighting"]) TYPES.normal.effectiveness[x] *= 2;
for (let x of ["ghost"]) TYPES.normal.effectiveness[x] = 0;

// effectiveness against Fire TYPES [13]
for (let x of ["bug", "grass", "ice", "fire", "steel", "fairy"]) TYPES.fire.effectiveness[x] /= 2;
for (let x of ["ground", "water", "rock"]) TYPES.fire.effectiveness[x] *= 2;

// effectiveness against Fighting TYPES [14]
for (let x of ["bug", "rock", "dark"]) TYPES.fighting.effectiveness[x] /= 2;
for (let x of ["flying", "psychic", "fairy"]) TYPES.fighting.effectiveness[x] *= 2;

// effectiveness against Steel TYPES [15]
for (let x of ["dragon", "flying", "bug", "rock", "grass", "ice", "normal", "steel", "psychic", "fairy"])
	TYPES.steel.effectiveness[x] /= 2;
for (let x of ["ground", "fire", "fighting"]) TYPES.steel.effectiveness[x] *= 2;
for (let x of ["poison"]) TYPES.steel.effectiveness[x] = 0;

// effectiveness against Psychic TYPES [16]
for (let x of ["fighting", "psychic"]) TYPES.psychic.effectiveness[x] /= 2;
for (let x of ["ghost", "bug", "dark"]) TYPES.psychic.effectiveness[x] *= 2;

// effectiveness against Fairy TYPES [17]
for (let x of ["bug", "dark", "fighting"]) TYPES.fairy.effectiveness[x] /= 2;
for (let x of ["poison", "steel"]) TYPES.fairy.effectiveness[x] *= 2;
for (let x of ["dragon"]) TYPES.fairy.effectiveness[x] = 0;

const SUPPRESS_ABILITIES = {
	dry_skin: { eng: "Dry Skin", jpn: "かんそうはだ", chs: "干燥皮肤", cht: "乾燥皮膚" },
	filter: { eng: "Filter", jpn: "フィルター", chs: "过滤", cht: "過濾" },
	flash_fire: { eng: "Flash Fire", jpn: "もらいび", chs: "引火", cht: "引火" },
	heatproof: { eng: "Heatproof", jpn: "たいねつ", chs: "耐热", cht: "耐熱" },
	immunity: { eng: "Immunity", jpn: "めんえき", chs: "免疫", cht: "免疫" },
	levitate: { eng: "Levitate", jpn: "ふゆう", chs: "漂浮", cht: "飄浮" },
	lightning_rod: { eng: "Lightning Rod", jpn: "ひらいしん", chs: "避雷针", cht: "避雷針" },
	motor_drive: { eng: "Motor Drive", jpn: "でんきエンジン", chs: "电气引擎", cht: "電氣引擎" },
	overcoat: { eng: "Overcoat", jpn: "ぼうじん", chs: "防尘", cht: "防塵" },
	prism_armor: { eng: "Prism Armor", jpn: "プリズムアーマー", chs: "棱镜装甲", cht: "稜鏡裝甲" },
	rks_system: { eng: "RKS System", jpn: "ＡＲシステム", chs: "ＡＲ系统", cht: "ＡＲ系統" },
	sap_sipper: { eng: "Sap Sipper", jpn: "そうしょく", chs: "草食", cht: "食草" },
	solid_rock: { eng: "Solid Rock", jpn: "ハードロック", chs: "坚硬岩石", cht: "坚硬岩石" },
	storm_drain: { eng: "Storm Drain", jpn: "よびみず", chs: "引水", cht: "引水" },
	thick_fat: { eng: "Thick Fat", jpn: "あついしぼう", chs: "厚脂肪", cht: "厚脂肪" },
	volt_absorb: { eng: "Volt Absorb", jpn: "ちくでん", chs: "蓄电", cht: "蓄電" },
	water_absorb: { eng: "Water Absorb", jpn: "ちょすい", chs: "储水", cht: "儲水" },
};

const TYPE_CHANGE_MOVES = {
	burn_up: { eng: "Burn Up", jpn: "もえつきる", chs: "燃尽", cht: "燃盡" },
	forests_curse: { eng: "Forest's Curse", jpn: "もりののろい", chs: "森林诅咒", cht: "森林詛咒" },
	gravity: { eng: "Gravity", jpn: "じゅうりょく", chs: "重力", cht: "重力" },
	magic_powder: { eng: "Magic Powder", jpn: "まほうのこな", chs: "魔法粉", cht: "魔法粉" },
	roost: { eng: "Roost", jpn: "はねやすめ", chs: "羽栖", cht: "羽棲" },
	soak: { eng: "Soak", jpn: "みずびたし", chs: "浸水", cht: "浸水" },
	trick_or_treat: { eng: "trick_or_treat", jpn: "ハロウィン", chs: "万圣夜", cht: "萬聖夜" },
};

function selectListing() {
	for (let type in TYPES) {
		document.querySelector("#type-1").innerHTML += `
			<button class="btn btn-pkmn1" id="btn-${type}1" onclick="click1('${type}')">
				<image src="../assets/svg/${type}.svg" style="width: 15px; padding-top: -1rem; padding-bottom: .15rem;">&nbsp;
				<span class="type-desc type-eng">${type.toUpperCase()}</span>
				<span class="type-desc type-jpn chinese-text">${TYPES[type].jpn}</span>
				<span class="type-desc type-chs chinese-text">${TYPES[type].chs}</span>
				<span class="type-desc type-cht chinese-text">${TYPES[type].cht}</span>
			</button>`;
		document.querySelector("#type-2").innerHTML += `
		<button class="btn btn-pkmn2" id="btn-${type}2" onclick="click2('${type}')">
			<image src="../assets/svg/${type}.svg" style="width: 15px; padding-top: -1rem; padding-bottom: .15rem;">&nbsp;
			<span class="type-desc type-eng">${type.toUpperCase()}</span>
			<span class="type-desc type-jpn chinese-text">${TYPES[type].jpn}</span>
			<span class="type-desc type-chs chinese-text">${TYPES[type].chs}</span>
			<span class="type-desc type-cht chinese-text">${TYPES[type].cht}</span>
		</button>`;
	}
	for (let ability in SUPPRESS_ABILITIES) {
		document.querySelector("#suppress-abilities").innerHTML += `
			<button class="btn btn-outline-primary btn-ability btn-imm ability-eng m-2" 
				id="btn-${ability}" onclick="click3('${ability}')">
				<span class="type-desc type-eng">${SUPPRESS_ABILITIES[ability].eng.toUpperCase()}</span>
				<span class="type-desc type-jpn chinese-text">${SUPPRESS_ABILITIES[ability].jpn}</span>
				<span class="type-desc type-chs chinese-text">${SUPPRESS_ABILITIES[ability].chs}</span>
				<span class="type-desc type-cht chinese-text">${SUPPRESS_ABILITIES[ability].cht}</span>
			</button>`;
	}
	for (let ability in TYPE_CHANGE_MOVES) {
		document.querySelector("#type-change-moves").innerHTML += `
			<button class="btn btn-outline-secondary btn-ability btn-tca ability-eng m-2" 
				id="btn-${ability}" onclick="click3('${ability}')">
				<span class="type-desc type-eng">${TYPE_CHANGE_MOVES[ability].eng.toUpperCase()}</span>
				<span class="type-desc type-jpn chinese-text">${TYPE_CHANGE_MOVES[ability].jpn}</span>
				<span class="type-desc type-chs chinese-text">${TYPE_CHANGE_MOVES[ability].chs}</span>
				<span class="type-desc type-cht chinese-text">${TYPE_CHANGE_MOVES[ability].cht}</span>
			</button>`;
	}
}

/**
 * Adds language button selections
 */
function languageButtons() {
	const LANGUAGES = Object.keys(TYPES[Object.keys(TYPES)[0]]);
	LANGUAGES.pop();

	for (let x of LANGUAGES) {
		document.querySelector(
			"#language-selection"
		).innerHTML += `<button class="btn btn-primary" id="btn-${x}" onclick="languageChange('${x}')">${x.toUpperCase()}</button>
		`;
	}
}

/**
 * First type selection
 *
 * @param {*} clicked_type
 */
function click1(clicked_type) {
	for (let x of document.querySelectorAll(".btn-pkmn2")) {
		x.classList.remove("disabled");
		x.disabled = false;
	}

	if (document.querySelector(`#btn-${clicked_type}1`).classList.contains("active") && clicked_type !== "normal") {
		document.querySelector(`#btn-${clicked_type}1`).classList.remove("active");
		document.querySelector(`#btn-normal1`).classList.add("active");

		if (document.querySelector("#btn-normal2").classList.contains("active")) click2("nil");

		document.querySelector("#btn-normal2").classList.add("disabled");
		document.querySelector("#btn-normal2").disabled = true;
	} else {
		for (let x of document.querySelectorAll(".btn-pkmn1")) x.classList.remove("active");
		document.querySelector(`#btn-${clicked_type}1`).classList.add("active");

		if (document.querySelector(`#btn-${clicked_type}2`).classList.contains("active")) click2("nil");

		document.querySelector(`#btn-${clicked_type}2`).classList.add("disabled");
		document.querySelector(`#btn-${clicked_type}2`).disabled = true;
	}

	typeResults();
}

function disableAbilityButton(ability, disableStatus) {
	document.querySelector(`#btn-${ability}`).classList.remove("active");

	// disable button
	if (disableStatus) {
		document.querySelector(`#btn-${ability}`).classList.add("disabled");
		document.querySelector(`#btn-${ability}`).disabled = true;
	}
	// remove disable
	else {
		document.querySelector(`#btn-${ability}`).classList.remove("disabled");
		document.querySelector(`#btn-${ability}`).disabled = false;
	}
}

/**
 * Second type selection
 *
 * @param {*} clicked_type
 */
function click2(clicked_type) {
	document.querySelector("#btn-nil2").classList.remove("active");

	if (document.querySelector(`#btn-${clicked_type}2`).classList.contains("active") && clicked_type !== "nil") {
		document.querySelector(`#btn-${clicked_type}2`).classList.remove("active");
		console.log("Remove nil2");
		document.querySelector("#btn-nil2").classList.add("active");
	} else {
		for (let x of document.querySelectorAll(".btn-pkmn2")) x.classList.remove("active");
		document.querySelector(`#btn-${clicked_type}2`).classList.add("active");
	}
	typeResults();
}

/**
 * Additional TYPES by abilities
 *
 * @param {*} clicked_ability
 */
function click3(clicked_ability) {
	if (clicked_ability == "") document.querySelectorAll(".btn-ability").forEach((e) => e.classList.remove("active"));
	else if (document.querySelector(`#btn-${clicked_ability}`).classList.contains("active"))
		document.querySelector(`#btn-${clicked_ability}`).classList.remove("active");
	else {
		document.querySelector(`#btn-${clicked_ability}`).classList.add("active");

		// trigger between Forest's Curse and Trick-or-Treat abilities
		if (clicked_ability === "forests_curse") document.querySelector("#btn-trick_or_treat").classList.remove("active");
		else if (clicked_ability === "trick_or_treat")
			document.querySelector("#btn-forests_curse").classList.remove("active");
		// trigger Gravity
		else if (clicked_ability === "gravity") document.querySelector("#btn-levitate").classList.remove("active");

		// trigger Magic Powder or Soak
		if (clicked_ability === "magic_powder" || clicked_ability === "soak") {
			for (let x of document.querySelectorAll(`.btn-tca:not(#btn-${clicked_ability})`)) x.classList.remove("active");
			for (let ability of ["burn_up", "roost"]) disableAbilityButton(ability, true);
			matchup_array = initializeTypeArray(); // fix this one later
		}
	}

	document.querySelectorAll(".btn-ability").forEach((e) => {
		e.classList.remove("disabled");
		e.disabled = false;
	});

	// $(".btn-ability")
	// 	.removeClass("disabled")
	// 	.prop("disabled", false);

	/* prep up abilities if applicable */

	// Forest's Curse will always fail if the target is already a Grass type - move elsewhere to activate when Grass is selected
	if (
		document.querySelector("#btn-grass1").classList.contains("active") ||
		document.querySelector("#btn-grass2").classList.contains("active")
	)
		disableAbilityButton("forests_curse", true);
	else disableAbilityButton("forests_curse", false);

	// Magic Powder will always fail if the target is a Grass type or pure Psychic type
	if (
		document.querySelector("#btn-grass1").classList.contains("active") ||
		document.querySelector("#btn-grass2").classList.contains("active") ||
		(document.querySelector("#btn-psychic1").classList.contains("active") &&
			document.querySelector("#btn-nil2").classList.contains("active"))
	)
		disableAbilityButton("magic_powder", true);
	else disableAbilityButton("magic_powder", false);

	// trick_or_treat will always fail if the target is already a Ghost type
	if (
		document.querySelector("#btn-ghost1").classList.contains("active") ||
		document.querySelector("#btn-ghost2").classList.contains("active")
	)
		disableAbilityButton("trick_or_treat", true);
	else disableAbilityButton("trick_or_treat", false);

	typeResults();
}

/**
 * Language changing feature
 * Current languages available: English, 日本, Chinese (Simplified), Chinese (Traditiional)
 *
 * @param {*} type_language
 */
function languageChange(type_language) {
	// console.log(`Changing language to: ${type_language}..`);

	for (let x of document.querySelectorAll("#language-selection button")) x.classList.remove("active");
	document.querySelector(`#btn-${type_language}`).classList.add("active");
	for (let x of document.querySelectorAll(".type-desc")) x.style.display = "none";

	for (let x of document.querySelectorAll(`.type-${type_language}`)) x.style.display = "inline";
}

/**
 * Reset type selection:
 * First type: NORMAL
 * Second type: NIL
 * Remove any abilities previously selected
 */
function reset() {
	// document.querySelectorAll(".btn-pkmn1").forEach((e) => e.classList.remove("active"));
	// document.querySelectorAll(".btn-pkmn2").forEach((e) => e.classList.remove("active"));
	$(".btn-pkmn1, .btn-pkmn2").removeClass("active");

	click1("normal");
	click2("nil");
	click3("");
}

function resultIcon(type) {
	return `
	<section class="icon-space" id="icon-space-${type}">
		<section class="poke-icon poke-i-${type}">
			<img src="../assets/svg/${type}.svg" alt="icon-${type}">
		</section>
		<!-- /section.poke-icon.poke-i-${type} -->
		
		<!--
		<section class="${type}-caption">
			${type.toUpperCase()}<br><span class="chinese-text">${TYPES[type].chs}</span>
		</section>-->
		<span class="type-desc type-eng">${TYPES[type].eng.toUpperCase()}</span>
		<span class="type-desc type-jpn chinese-text">${TYPES[type].jpn}</span>
		<span class="type-desc type-chs chinese-text">${TYPES[type].chs}</span>
		<span class="type-desc type-cht chinese-text">${TYPES[type].cht}</span>
	</section>
	`;
}

/**
 * Returns matchup array after checking each ability
 * Also disables abilities with similar effect
 *
 * @param {*} matchup_array
 */
function abilityCheck(matchup_object) {
	/**
	 * TYPE IMMUNITIES
	 */
	/**
	 * Dry Skin restores .25 HP from Water type moves, but 1.25x more damage from Fire type moves
	 * Takes damage in Sunshine, heals in Rain
	 */
	if (document.querySelector("#btn-dry_skin").classList.contains("active")) {
		matchup_object.water = 0;
		matchup_object.fire *= 1.25;
		document.querySelectorAll(".btn-imm:not(#btn-dry_skin)").forEach((e) => {
			e.classList.add("disabled");
			e.disabled = true;
		});
		// matchup_array[6] = 0;
		// matchup_array[13] *= 1.25;
		// $(".btn-imm:not(#btn-dry_skin)").addClass("disabled").prop("disabled", true);
	}
	// Filter reduces the power of supereffective attacks taken
	if (document.querySelector("#btn-filter").classList.contains("active")) {
		for (let type of Object.keys(matchup_object)) {
			if (matchup_object[type] > 1) matchup_object[type] *= 0.75;
		}
		document.querySelectorAll(".btn-imm:not(#btn-filter)").forEach((e) => {
			e.classList.add("disabled");
			e.disabled = true;
		});
		// $(".btn-imm:not(#btn-filter)").addClass("disabled").prop("disabled", true);
	}
	// Flash Fire gives immunity to Fire type moves, +1 SpA
	if (document.querySelector("#btn-flash_fire").classList.contains("active")) {
		matchup_object.fire = 0;
		document.querySelectorAll(".btn-imm:not(#btn-flash_fire)").forEach((e) => {
			e.classList.add("disabled");
			e.disabled = true;
		});
		// matchup_array[13] = 0;
		// $(".btn-imm:not(#btn-flash_fire)").addClass("disabled").prop("disabled", true);
	}
	// Heatproof halves damage done by Fire type moves
	if ($("#btn-heatproof").hasClass("active")) {
		matchup_object.fire /= 2;
		document.querySelectorAll(".btn-imm:not(#btn-heatproof)").forEach((e) => {
			e.classList.add("disabled");
			e.disabled = true;
		});
		// matchup_array[13] /= 2;
		// $(".btn-imm:not(#btn-heatproof)").addClass("disabled").prop("disabled", true);
	}
	// Immunity gives immunity (lol) to Poison type moves
	if ($("#btn-immunity").hasClass("active")) {
		matchup_object.poison = 0;
		document.querySelectorAll(".btn-imm:not(#btn-immunity)").forEach((e) => {
			e.classList.add("disabled");
			e.disabled = true;
		});
		// matchup_array[4] = 0;
		// $(".btn-imm:not(#btn-immunity)").addClass("disabled").prop("disabled", true);
	}
	// Levitate gives immunity to Ground type moves
	if ($("#btn-levitate").hasClass("active")) {
		matchup_object.ground = 0;
		document.querySelectorAll(".btn-imm:not(#btn-levitate)").forEach((e) => {
			e.classList.add("disabled");
			e.disabled = true;
		});
		// matchup_array[2] = 0;
		// $(".btn-imm:not(#btn-levitate)").addClass("disabled").prop("disabled", true);
	}
	// Lightning Rod gives immunity to Electric type moves, +1 SpA
	if ($("#btn-lightning_rod").hasClass("active")) {
		matchup_object.electric = 0;
		document.querySelectorAll(".btn-imm:not(#btn-lightning_rod)").forEach((e) => {
			e.classList.add("disabled");
			e.disabled = true;
		});
		// matchup_array[7] = 0;
		// $(".btn-imm:not(#btn-lightning_rod)").addClass("disabled").prop("disabled", true);
	}
	// Motor Drive gives immunity to Electric type moves, +1 Spe
	if ($("#btn-motor_drive").hasClass("active")) {
		matchup_object.electric = 0;
		document.querySelectorAll(".btn-imm:not(#btn-motor_drive)").forEach((e) => {
			e.classList.add("disabled");
			e.disabled = true;
		});
		// matchup_array[7] = 0;
		// $(".btn-imm:not(#btn-motor_drive)").addClass("disabled").prop("disabled", true);
	}
	/**
	 * Overcoat protects the Pokémon from things like sand, hail, and powder
	 * Immunity to type changing abilities from the aforementioned forms like Magic Powder
	 */
	if ($("#btn-overcoat").hasClass("active")) {
		disableAbilityButton("magic_powder", true);
		document.querySelectorAll(".btn-imm:not(#btn-overcoat)").forEach((e) => {
			e.classList.add("disabled");
			e.disabled = true;
		});
		// $("#btn-magic_powder").addClass("disabled").prop("disabled", true);
		// $(".btn-imm:not(#btn-overcoat)").addClass("disabled").prop("disabled", true);
	}
	// Prism Armor reduces the power of supereffective attacks taken
	if ($("#btn-prism_armor").hasClass("active")) {
		for (let type of Object.keys(matchup_object)) {
			if (matchup_object[type] > 1) matchup_object[type] *= 0.75;
		}
		document.querySelectorAll(".btn-imm:not(#btn-prism_armor)").forEach((e) => {
			e.classList.add("disabled");
			e.disabled = true;
		});
		// for (let i = 0; i < matchup_array.length; ++i) {
		// 	if (matchup_array[i] > 1) matchup_array[i] *= .75;
		// }
		// $(".btn-imm:not(#btn-prism_armor)").addClass("disabled").prop("disabled", true);
	}
	/**
	 * RKS System changes the Pokémon's type to match the memory disc it holds
	 * Immunity to type changing abilities like Magic Powder or Soak
	 */
	if ($("#btn-rks_system").hasClass("active")) {
		disableAbilityButton("magic_powder", true);
		disableAbilityButton("soak", true);
		document.querySelectorAll(".btn-imm:not(#btn-rks_system)").forEach((e) => {
			e.classList.add("disabled");
			e.disabled = true;
		});
		// $("#btn-magic_powder, #btn-soak").addClass("disabled").prop("disabled", true);
		// $(".btn-imm:not(#btn-rks_system)").addClass("disabled").prop("disabled", true);
	}
	// Sap Sipper gives immunity to Grass type moves, +1 Atk
	if ($("#btn-sap_sipper").hasClass("active")) {
		matchup_object.grass = 0;
		document.querySelectorAll(".btn-imm:not(#btn-sap_sipper)").forEach((e) => {
			e.classList.add("disabled");
			e.disabled = true;
		});
		// matchup_array[9] = 0;
		// $(".btn-imm:not(#btn-sap_sipper)").addClass("disabled").prop("disabled", true);
	}
	// Solid Rock reduces the power of supereffective attacks taken
	if ($("#btn-solid_rock").hasClass("active")) {
		for (let type of Object.keys(matchup_object)) {
			if (matchup_object[type] > 1) matchup_object[type] *= 0.75;
		}
		document.querySelectorAll(".btn-imm:not(#btn-solid_rock)").forEach((e) => {
			e.classList.add("disabled");
			e.disabled = true;
		});
		// for (let i = 0; i < matchup_array.length; ++i) {
		// 	if (matchup_array[i] > 1) matchup_array[i] *= .75;
		// }
		// $(".btn-imm:not(#btn-solid_rock)").addClass("disabled").prop("disabled", true);
	}
	// Storm Drain gives immunity to Water type moves, +1 SpA
	if ($("#btn-storm_drain").hasClass("active")) {
		matchup_object.water = 0;
		document.querySelectorAll(".btn-imm:not(#btn-storm_drain)").forEach((e) => {
			e.classList.add("disabled");
			e.disabled = true;
		});
		// matchup_array[6] = 0;
		// $(".btn-imm:not(#btn-storm_drain)").addClass("disabled").prop("disabled", true);
	}
	// // Thick Fat halves damage done by Fire and Ice type moves
	if ($("#btn-thick_fat").hasClass("active")) {
		matchup_object.ice /= 2;
		matchup_object.fire /= 2;
		document.querySelectorAll(".btn-imm:not(#btn-thick_fat)").forEach((e) => {
			e.classList.add("disabled");
			e.disabled = true;
		});
		// matchup_array[11] /= 2;
		// matchup_array[13] /= 2;
		// $(".btn-imm:not(#btn-thick_fat)").addClass("disabled").prop("disabled", true);
	}
	// Volt Absorb restores .25 HP from Electric type moves
	if ($("#btn-volt_absorb").hasClass("active")) {
		matchup_object.electric = 0;
		document.querySelectorAll(".btn-imm:not(#btn-volt_absorb)").forEach((e) => {
			e.classList.add("disabled");
			e.disabled = true;
		});
		// matchup_array[7] = 0;
		// $(".btn-imm:not(#btn-volt_absorb)").addClass("disabled").prop("disabled", true);
	}
	// Water Absorb restores .25 HP from Water type moves
	if ($("#btn-water_absorb").hasClass("active")) {
		matchup_object.water = 0;
		document.querySelectorAll(".btn-imm:not(#btn-water_absorb)").forEach((e) => {
			e.classList.add("disabled");
			e.disabled = true;
		});
		// matchup_array[6] = 0;
		// $(".btn-imm:not(#btn-water_absorb)").addClass("disabled").prop("disabled", true);
	}
	/**
	 * TYPE CHANGING ABILITIES
	 */
	// Burn Up removes Fire type (must already be a Fire type)
	// if ($("#btn-burn_up").hasClass("active")) {
	// 	for (let x of [5, 9, 11, 13, 15, 17]) matchup_array[x] *= 2;
	// 	for (let x of [2, 6, 8]) matchup_array[x] /= 2;
	// }
	// // Forest's Curse adds Grass type, removes any effect from Trick-or-Treat (Grass TYPES are immune)
	// if ($("#btn-forests_curse").hasClass("active")) {
	// 	for (let x of [2, 6, 7, 9]) matchup_array[x] /= 2;
	// 	for (let x of [3, 4, 5, 11, 13]) matchup_array[x] *= 2;
	// 	// remove effects from Trick-or-Treat
	// 	if ($("#btn-trick-or-treat").hasClass("active")) {
	// 		for (let x of [4, 5]) matchup_array[x] *= 2;
	// 		for (let x of [1, 10]) matchup_array[x] /= 2;
	// 	}
	// }
	// /**
	//  * Gravity removes Flying type
	//  */
	// if ($("#btn-gravity").hasClass("active")) {
	// 	if ($("#btn-flying1").hasClass("active") || $("#btn-flying2").hasClass("active")) {
	// 		for (let x of [5, 9, 14]) matchup_array[x] *= 2;
	// 		for (let x of [7, 8, 11]) matchup_array[x] /= 2;
	// 		// add weakness for Ground type if existent
	// 		matchup_array[2] = 1;
	// 		for (let x = 1; x <= 2; ++x) {
	// 			for (let y of [4, 7, 8, 13, 15])
	// 				if ($("#btn-" + TYPES[y][0].toLowerCase() + x).hasClass("active")) matchup_array[2] *= 2;
	// 			for (let y of [5, 9])
	// 				if ($("#btn-" + TYPES[y][0].toLowerCase() + x).hasClass("active")) matchup_array[2] /= 2;
	// 		}
	// 		if ($("#btn-nil2").hasClass("active") || $("#btn-burn_up").hasClass("active")) {
	// 			for (let x of [14]) matchup_array[x] *= 2;
	// 			for (let x of [1]) matchup_array[x] = 0;
	// 			// remove Ground type weakness if Fire type is removed from Burn Up
	// 			if ($("#btn-burn_up").hasClass("active")) matchup_array[2] /= 2;
	// 		}
	// 	}
	// }
	// // Magic Powder changes target to pure Psychic type (Grass & pure Psychic TYPES are immune)
	// if ($("#btn-magic_powder").hasClass("active")) {
	// 	for (let x of [14, 16]) matchup_array[x] /= 2;
	// 	for (let x of [1, 5, 10]) matchup_array[x] *= 2;
	// }
	// /**
	//  * Roost removes Flying type
	//  * Normal type will be added if Flying type is the only type, regardless of being afflicted by
	//  * Forest's Curse or Magic Powder
	//  */
	// if ($("#btn-roost").hasClass("active")) {
	// 	for (let x of [5, 9, 14]) matchup_array[x] *= 2;
	// 	for (let x of [7, 8, 11]) matchup_array[x] /= 2;
	// 	// add weakness for Ground type if existent
	// 	matchup_array[2] = 1;
	// 	for (let x = 1; x <= 2; ++x) {
	// 		for (let y of [4, 7, 8, 13, 15])
	// 			if ($("#btn-" + TYPES[y][0].toLowerCase() + x).hasClass("active")) matchup_array[2] *= 2;
	// 		for (let y of [5, 9])
	// 			if ($("#btn-" + TYPES[y][0].toLowerCase() + x).hasClass("active")) matchup_array[2] /= 2;
	// 	}
	// 	/**
	// 	 * Only Flying type is guaranteed if there is no secondary type, or a different ability that
	// 	 * removed the other typing is inflicted (e.g. Burn Up)
	// 	 */
	// 	if ($("#btn-nil2").hasClass("active") || $("#btn-burn_up").hasClass("active")) {
	// 		for (let x of [14]) matchup_array[x] *= 2;
	// 		for (let x of [1]) matchup_array[x] = 0;
	// 		// remove Ground type weakness if Fire type is removed from Burn Up
	// 		if ($("#btn-burn_up").hasClass("active")) matchup_array[2] /= 2;
	// 	}
	// }
	// // Soak changes target to pure Water type, won't do any changes to a pure Water type
	// if ($("#btn-soak").hasClass("active")) {
	// 	for (let x of [6, 11, 13, 15]) matchup_array[x] /= 2;
	// 	for (let x of [7, 9]) matchup_array[x] *= 2;
	// }
	// //Trick-or-Treat adds the Ghost type, removes any effect from Forest's Curse (Ghost TYPES are immune)
	// if ($("#btn-trick-or-treat").hasClass("active")) {
	// 	for (let x of [4, 5]) matchup_array[x] /= 2;
	// 	for (let x of [1, 10]) matchup_array[x] *= 2;
	// 	for (let x of [12, 14]) matchup_array[x] = 0;
	// 	// remove effects from Forest's Curse
	// 	if ($("#btn-forests_curse").hasClass("active")) {
	// 		for (let x of [2, 6, 7, 9]) matchup_array[x] *= 2;
	// 		for (let x of [3, 4, 5, 11, 13]) matchup_array[x] /= 2;
	// 		// add weakness for Fighting type if existent
	// 		matchup_array[14] = 1;
	// 		for (let x = 1; x <= 2; ++x) {
	// 			for (let y of [8, 10, 11, 12, 15])
	// 				if ($("#btn-" + TYPES[y][0].toLowerCase() + x).hasClass("active")) matchup_array[14] *= 2;
	// 			for (let y of [3, 4, 5, 16, 17])
	// 				if ($("#btn-" + TYPES[y][0].toLowerCase() + x).hasClass("active")) matchup_array[14] /= 2;
	// 		}
	// 		// add resistance for Normal type if any
	// 		matchup_array[12] = 1;
	// 		for (let x = 1; x <= 2; ++x) {
	// 			for (let y of [8, 15])
	// 				if ($("#btn-" + TYPES[y][0].toLowerCase() + x).hasClass("active")) matchup_array[12] /= 2;
	// 		}
	// 	}
	// }
}

/**
 * Display type matchups
 */
function typeResults() {
	// resets all matchup windows
	for (let x of document.querySelectorAll(".icon-space")) x.parentElement.removeChild(x);

	/* prep up abilities if applicable, unless Magic Powder or Soak is active */

	if ($("#btn-magic_powder").hasClass("active") || $("#btn-soak").hasClass("active")) {
		$("#btn-burn_up, #btn-roost")
			.addClass("disabled")
			.removeClass("active")
			.prop("disabled", true);
	} else {
		// Burn Up only works on Fire TYPES
		if ($("#btn-fire1").hasClass("active") || $("#btn-fire2").hasClass("active")) {
			$("#btn-burn_up")
				.removeClass("disabled")
				.prop("disabled", false);
		} else {
			$("#btn-burn_up")
				.addClass("disabled")
				.removeClass("active")
				.prop("disabled", true);
		}

		// Roost only works on Flying TYPES
		if ($("#btn-flying1").hasClass("active") || $("#btn-flying2").hasClass("active")) {
			$("#btn-roost")
				.removeClass("disabled")
				.prop("disabled", false);
		} else {
			$("#btn-roost")
				.addClass("disabled")
				.removeClass("active")
				.prop("disabled", true);
		}
	}

	/* build matchup object based on type selection */
	const RESULTS = {}; // initialize results object

	// check first type
	document.querySelectorAll(".btn-pkmn1").forEach((e, index) => {
		// console.log(e);
		if (e.classList.contains("active")) {
			for (let type of Object.keys(TYPES)) RESULTS[type] = TYPES[Object.keys(TYPES)[index]].effectiveness[type];
		}
	});
	// console.log("Results after 1:", RESULTS);

	// check second type
	document.querySelectorAll(".btn-pkmn2").forEach((e, index) => {
		if (e.id != "btn-nil2" && e.classList.contains("active")) {
			// index 0 refers to NIL button
			for (let type of Object.keys(TYPES)) RESULTS[type] *= TYPES[Object.keys(TYPES)[index]].effectiveness[type];
		}
	});
	// console.log("Results after 2:", RESULTS);

	// check for ability effects
	// RESULTS = abilityCheck(RESULTS);
	abilityCheck(RESULTS);

	for (let type of Object.keys(TYPES)) {
		if (RESULTS[type] > 1) {
			// Super effective
			document.querySelector("#super-effect").innerHTML += resultIcon(type);

			if (RESULTS[type] != 2) {
				if (parseFloat(RESULTS[type]) != parseInt(RESULTS[type]))
					effectiveness_append = parseFloat(RESULTS[type]).toFixed(2);
				else effectiveness_append = parseInt(RESULTS[type]);

				document.querySelector(`#icon-space-${type}`).innerHTML += `<br>
				<span class="badge rounded-pill bg-danger" style="font-size: 15px;">
					${effectiveness_append}&#215;
				</span>`;

				if (RESULTS[type] > 2) document.querySelector(`#icon-space-${type}`).classList.add("super-high-effect");
			}
		} else if (RESULTS[type] > 0 && RESULTS[type] < 1) {
			// Less effect
			document.querySelector("#less-effect").innerHTML += resultIcon(type);

			if (RESULTS[type] != 0.5) {
				if (parseFloat(RESULTS[type]) != parseInt(RESULTS[type]))
					effectiveness_append = parseFloat(RESULTS[type]).toFixed(2);
				else effectiveness_append = parseInt(RESULTS[type]);

				document.querySelector(`#icon-space-${type}`).innerHTML += `<br>
				<span class="badge rounded-pill bg-info" style="font-size: 15px;">
					${effectiveness_append}&#215;
				</span>`;

				if (RESULTS[type] < 0.5) document.querySelector(`#icon-space-${type}`).classList.add("super-low-effect");
			}
		} else if (RESULTS[type] == 1) {
			// Normal effect
			document.querySelector("#normal-effect").innerHTML += resultIcon(type);
		} else if (RESULTS[type] == 0) {
			// No effect
			document.querySelector("#no-effect").innerHTML += resultIcon(type);
		}
	}

	// console.log(RESULTS);

	const LANGUAGES = Object.keys(TYPES[Object.keys(TYPES)[0]]);
	LANGUAGES.pop();

	for (let x of LANGUAGES) {
		if (document.querySelector(`#btn-${x}`).classList.contains("active")) {
			languageChange(`${x}`);
			break;
		}
	}
}

// This loads by default on launch
window.onload = () => {
	selectListing();
	languageButtons();
	reset();
	languageChange("eng");
};
