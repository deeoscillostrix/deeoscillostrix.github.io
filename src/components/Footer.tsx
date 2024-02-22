import classNames from "classnames";
import { author } from "../data";
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
			<a href="https://instagram.com/cyannocti" target="_blank">
				@cyannocti
			</a>{" "}
			&amp;{" "}
			<a href="https://fiverr.com/eunalis" target="_blank">
				@eunmao
			</a>
		</footer>
	);
};

export default Footer;
