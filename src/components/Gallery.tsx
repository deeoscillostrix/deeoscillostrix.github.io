const Gallery = () => {
	const modalId = "modal_gallery";
	const title = "Gallery";

	const galleryImages = [
		{
			src: "/images/snowtrap-vs-octogeddon.webp",
			alt: "SnowTrap vs. Octogeddon",
			artist: "@Orlando_Fox",
			url: "https://twitter.com/Orlando_Fox",
		},
		{
			src: "/images/oscii-morizora.webp",
			alt: "Oscillo & SnowTrap in Morizora",
			artist: "@ThatSquirrelly",
			url: "https://twitter.com/ThatSquirrelly",
		},
		{
			src: "/images/oscii-apocalypse-2021.webp",
			alt: "Oscillo in Post-Apocalypse 2021",
			artist: "@orcaowlart",
			url: "https://twitter.com/orcaowlart",
		},
		{
			src: "/images/snowtrap-yattamengachi.webp",
			alt: "SnowTrap & No Holds Bard!!!",
			artist: "@lucy_was_taken_",
			url: "https://twitter.com/lucy_was_taken_",
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

					{galleryImages.map((image, index) => (
						<div key={index} className="galleryDisplay">
							<div className="imgContainer">
								<img src={image.src} alt={image.alt} loading="lazy" />
							</div>
							Artwork by{" "}
							<a href={image.url} target="_blank">
								{image.artist}
							</a>
						</div>
					))}
				</div>
			</dialog>
		</>
	);
};

export default Gallery;
