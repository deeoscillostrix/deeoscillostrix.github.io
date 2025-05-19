import { artists } from "../data";

const Gallery = () => {
  const modalId = "modal_gallery";
  const title = "Gallery";

  const galleryImages = [
    {
      src: "/images/snowtrap-vs-octogeddon.webp",
      alt: "SnowTrap vs. Octogeddon",
      artist: artists.orlandofox.handle,
      artistUrl: artists.orlandofox.website,
    },
    {
      src: "/images/oscii-morizora.webp",
      alt: "Oscillo & SnowTrap in Morizora",
      artist: artists.kareru.handle,
      artistUrl: artists.kareru.bluesky,
    },
    {
      src: "/images/oscii-apocalypse-2021.webp",
      alt: "Oscillo in Post-Apocalypse 2021",
      artist: artists.orcaowlart.handle,
      artistUrl: artists.orcaowlart.website,
    },
    {
      src: "/images/snowtrap-yattamengachi.webp",
      alt: "SnowTrap & No Holds Bard!!!",
      artist: artists.cheekysonas.handle,
      artistUrl: artists.cheekysonas.website,
    },
  ];

  return (
    <>
      <button
        className="btn btn-secondary btn-outline m-2"
        onClick={() => {
          const modal = document.querySelector(
            `#${modalId}`
          ) as HTMLDialogElement;
          modal!.showModal();
        }}
      >
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
              <a href={image.artistUrl} target="_blank" rel="noopener">
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
