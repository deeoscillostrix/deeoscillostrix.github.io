import classNames from "classnames";
import { createElement, useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { FaTelegramPlane } from "react-icons/fa";
import "./App.css";
import { ClipboardLink, Footer, Gallery, Refs, SiteHelmet } from "./components";
import { author, iconMap, stickerPacks } from "./data";

function App() {
	const [loaded, setLoaded] = useState(false);
	const handleLoad = () => {
		setLoaded(true);
	};

	useEffect(() => {
		window.addEventListener("load", handleLoad);
	});

	const briefs = [
		"Stilt Owl",
		"Grad Stew",
		"Aspiring Educator",
		"INFP-T",
		"Galatians 5:13",
	];

	return (
		<>
			<HelmetProvider>
				<SiteHelmet />

				<main
					className={classNames("transition-opacity", "ease-in-out", {
						"opacity-0": !loaded,
					})}>
					<div className="lg:flex">
						<div id="persona">
							<img src="/images/owl comm_stroke.webp" alt="Oscillo" />
							<h1 className="font-caveat">Oscillo Strix</h1>
							<p>{briefs.join(" • ")}</p>
						</div>

						<div className="lg:flex-auto lg:mt-16">
							<h2 className="mt-8">Connect with me!</h2>

							<p id="socialIcons">
								{Object.keys(author.socials).map((socialKey, index) => (
									<a
										key={index}
										className="tooltip"
										data-tip={iconMap[socialKey].dataTip}
										href={
											author.socials[socialKey as keyof typeof author.socials]
										}
										target="_blank">
										{createElement(iconMap[socialKey].iconImport)}
									</a>
								))}
							</p>

							<h2 className="mt-8">Other places you can add me in:</h2>

							<p>Click to copy to clipboard.</p>
							<p id="copyLinks">
								{Object.keys(author.friendCodes).map((codeType, index) => (
									<span
										key={index}
										// className="tooltip"
										// data-tip={iconMap[codeType].dataTip}
									>
										<ClipboardLink
											dataValue={
												author.friendCodes[
													codeType as keyof typeof author.friendCodes
												]
											}
											isButton={true}>
											{iconMap[codeType].dataTip}
										</ClipboardLink>
									</span>
								))}
							</p>

							<hr className="lg:w-5/6 mx-auto" />

							<Gallery />
							<Refs />

							{stickerPacks.map((stickerLink, index) => (
								<a
									key={index}
									href={stickerLink.href}
									className="btn btn-accent btn-outline m-2"
									target="_blank">
									<FaTelegramPlane />
									{stickerLink.label}
								</a>
							))}
						</div>
					</div>
				</main>
				<Footer />
			</HelmetProvider>
		</>
	);
}

export default App;
