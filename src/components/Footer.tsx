import classNames from "classnames";
import { artists, author } from "../data";
import { useEffect, useState } from "react";

const Footer = () => {
	const [loaded, setLoaded] = useState(false);
	const handleLoad = () => {
		setLoaded(true);
	};

	useEffect(() => {
		window.addEventListener("load", handleLoad);
	});

	return (
		<footer
			className={classNames("transition-opacity", "ease-in-out", {
				"opacity-0": !loaded,
			})}>
			@{new Date().getFullYear()} {author.name} 🦉
			<br />
			Artwork by{" "}
			<a href={artists.cyannocti.instagram} target="_blank" rel="noopener">
				{artists.cyannocti.handle}
			</a>{" "}
			&amp;{" "}
			<a href={artists.eunalis.fiverr} target="_blank" rel="noopener">
				{artists.eunalis.handle}
			</a>
		</footer>
	);
};

export default Footer;
