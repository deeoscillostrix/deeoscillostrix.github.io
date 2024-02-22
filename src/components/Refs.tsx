const Refs = () => {
	const modalId = "modal_refs";
	const title = "Character Refs";

	const refImages = [
		{
			src: "/images/ref-oscii.webp",
			alt: "Oscillo's Ref",
			artist: "@eunmao",
			url: "https://fiverr.com/eunalis",
		},
		{
			src: "/images/ref-kidoscii.webp",
			alt: "Kid Oscillo's Ref",
			artist: "@eunmao",
			url: "https://fiverr.com/eunalis",
		},
		{
			src: "/images/ref-teenoscii.webp",
			alt: "Teen Oscillo's Ref",
			artist: "@eunmao",
			url: "https://fiverr.com/eunalis",
		},
		{
			src: "/images/ref-snowtrap.webp",
			alt: "SnowTrap's Ref",
			artist: "@lucy_was_taken_",
			url: "https://twitter.com/lucy_was_taken_",
		},
		{
			src: "/images/ref-osciioutfits.webp",
			alt: "Oscillo's Outfit Ref",
			artist: "@Orlando_Fox",
			url: "https://twitter.com/Orlando_Fox",
		},
		{
			src: "/images/ref-osciioutfits2.webp",
			alt: "Oscillo's Outfit Ref Add-ons",
			artist: "@Orlando_Fox",
			url: "https://twitter.com/Orlando_Fox",
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
							<p>
								{image.alt} by{" "}
								<a href={image.url} target="_blank">
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
						</div>
					))}
				</div>
			</dialog>
		</>
	);
};

export default Refs;
