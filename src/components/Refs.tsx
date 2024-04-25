import classNames from "classnames";
import { artists } from "../data";
import HandleClipboardCopy from "./HandleClipboardCopy";

const Refs = () => {
	const modalId = "modal_refs";
	const title = "Character Refs";

	const refImages = [
		{
			src: "/images/ref-oscii.webp",
			alt: "Oscillo's Ref",
			artist: artists.eunalis.handle,
			artistUrl: artists.eunalis.fiverr,
			palette: [
				"#dca978",
				"#f3f0dc",
				"#89623d",
				"#00a879",
				"#ffe002",
				"#e38d37",
			],
		},
		{
			src: "/images/ref-kidoscii.webp",
			alt: "Kid Oscillo's Ref",
			artist: artists.eunalis.handle,
			artistUrl: artists.eunalis.fiverr,
			palette: [
				"#a7886b",
				"#fff4e3",
				"#59a482",
				"#fb9e00",
				"#ffe002",
				"#e38d37",
			],
		},
		{
			src: "/images/ref-teenoscii.webp",
			alt: "Teen Oscillo's Ref",
			artist: artists.eunalis.handle,
			artistUrl: artists.eunalis.fiverr,
			palette: [
				"#dca979",
				"#a7886b",
				"#fdf2e1",
				"#5ba582",
				"#e48c36",
				"#fce105",
			],
		},
		{
			src: "/images/ref-snowtrap.webp",
			alt: "SnowTrap's Ref",
			artist: artists.cheekysonas.handle,
			artistUrl: artists.cheekysonas.website,
			palette: [
				"#d1fffe",
				"#6fe6fa",
				"#62d463",
				"#ff9a50",
				"#ffeea6",
				"#ff6b26",
				"#03147c",
			],
		},
		{
			src: "/images/ref-osciioutfits.webp",
			alt: "Oscillo's Outfit Ref",
			artist: artists.orlandofox.handle,
			artistUrl: artists.orlandofox.website,
		},
		{
			src: "/images/ref-osciioutfits2.webp",
			alt: "Oscillo's Outfit Ref Add-ons",
			artist: artists.orlandofox.handle,
			artistUrl: artists.orlandofox.website,
		},
	];

	return (
		<>
			<button
				className="btn btn-secondary btn-outline m-2"
				onClick={() => {
					const modal = document.querySelector(
						`#${modalId}`,
					) as HTMLDialogElement;
					modal!.showModal();
				}}>
				{title}
			</button>
			<dialog id={modalId} className="modal">
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
				<div className="modal-box w-full lg:w-11/12 max-w-7xl">
					<form method="dialog">
						{/* if there is a button in form, it will close the modal */}
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
							✕
						</button>
					</form>

					<h3>{title}</h3>

					{refImages.map((image, index) => (
						<div key={index} className="galleryDisplay">
							<div className="imgContainer">
								<img src={image.src} alt={image.alt} loading="lazy" />
							</div>
							<p className="mt-2 mb-4">
								{image.alt} by{" "}
								<a href={image.artistUrl} target="_blank" rel="noopener">
									{image.artist}
								</a>
								<span className="ms-2 text-primary">
									<a
										href={image.src}
										target="_blank"
										className="btn btn-sm btn-accent text-white">
										Download
									</a>
								</span>
							</p>
							{"palette" in image && (
								<PaletteButtons palette={image.palette!} />
							)}
						</div>
					))}
				</div>
			</dialog>
		</>
	);
};

export default Refs;

const PaletteButtons = ({ palette }: { palette: string[] }) => {
	return (
		<div
			className={classNames(
				`grid grid-cols-3 sm:grid-cols-4 gap-4 lg:w-5/6 mx-auto`,
				`md:grid-cols-` + (palette.length | 7),
			)}>
			{palette.map((paletteColor, key) => (
				<button
					key={key}
					className="btn btn-sm border-none mx-auto h-[60px] w-[100px] tooltip hover:scale-110 transition ease-in-out"
					style={{ backgroundColor: paletteColor }}
					data-tip={paletteColor.toUpperCase()}
					onClick={() =>
						HandleClipboardCopy(paletteColor.toUpperCase())
					}></button>
			))}
		</div>
	);
};
