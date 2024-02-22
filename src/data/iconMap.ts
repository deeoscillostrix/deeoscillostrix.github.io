import { IconType } from "react-icons";
import { BsNintendoSwitch } from "react-icons/bs";
import {
	FaDiscord,
	FaInstagram,
	FaMastodon,
	FaSteam,
	FaTelegram,
	FaTumblr,
	FaTwitch,
	FaYoutube,
} from "react-icons/fa6";
import { GiNightSleep } from "react-icons/gi";
import { MdOutlineCatchingPokemon } from "react-icons/md";
import { PiButterfly } from "react-icons/pi";
import { SiKofi } from "react-icons/si";

const iconMap: { [key: string]: { iconImport: IconType; dataTip: string } } = {
	telegram: { iconImport: FaTelegram, dataTip: "Telegram" },
	discord: { iconImport: FaDiscord, dataTip: "Discord" },
	instagram: { iconImport: FaInstagram, dataTip: "Instagram" },
	youtube: { iconImport: FaYoutube, dataTip: "YouTube" },
	twitch: { iconImport: FaTwitch, dataTip: "Twitch" },
	steam: { iconImport: FaSteam, dataTip: "Steam" },
	tumblr: { iconImport: FaTumblr, dataTip: "Tumblr" },
	mastodon: { iconImport: FaMastodon, dataTip: "Mastodon" },
	bluesky: { iconImport: PiButterfly, dataTip: "Bluesky" },
	kofi: { iconImport: SiKofi, dataTip: "Ko-fi" },

	switch: { iconImport: BsNintendoSwitch, dataTip: "Switch Friend Code" },
	pokemonGo: {
		iconImport: MdOutlineCatchingPokemon,
		dataTip: "Pokémon GO",
	},
	pokemonSleep: { iconImport: GiNightSleep, dataTip: "Pokémon Sleep" },
};

export default iconMap;
