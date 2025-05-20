import classNames from "classnames";
import { artists, modalSizes } from "../data";

const Gallery = () => {
  const modalId = "modal_gallery";
  const title = "Gallery";
  const carouselClasses = classNames(
    "carousel",
    "max-sm:carousel-vertical",
    "max-sm:h-[75dvh]",
    "carousel-center",
    "bg-neutral",
    "rounded-box",
    "max-w-full",
    "space-x-4",
    "p-4"
  );

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
        <div className={modalSizes.large}>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <h3>{title}</h3>

          <p className="max-sm:hidden mx-auto w-4/5 text-sm">
            On a non-touch screen device, scroll horizontally by holding the{" "}
            <kbd className="kbd text-sm">shift</kbd> key and then scrolling on
            your mouse.
          </p>
          <div className={carouselClasses}>
            {galleryImages.map((image, index) => (
              <div className="carousel-item" key={index}>
                <div>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={classNames(
                      "mx-auto",
                      "sm:max-h-[35dvh]",
                      "md:max-h-[40dvh]",
                      // "lg:max-h-[50dvh]",
                      "xl:max-h-[70dvh]",
                      // "max-w-xs",
                      "sm:max-w-full",
                      "rounded-box"
                    )}
                    loading="lazy"
                  />
                  <p className="text-sm">
                    Artwork by{" "}
                    <a
                      href={image.artistUrl}
                      className="text-secondary"
                      target="_blank"
                      rel="noopener"
                    >
                      {image.artist}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* {galleryImages.map((image, index) => (
            <div key={index} className="galleryDisplay">
              <div className="imgContainer">
                <img src={image.src} alt={image.alt} loading="lazy" />
              </div>
              Artwork by{" "}
              <a href={image.artistUrl} target="_blank" rel="noopener">
                {image.artist}
              </a>
            </div>
          ))} */}
        </div>
      </dialog>
    </>
  );
};

export default Gallery;
