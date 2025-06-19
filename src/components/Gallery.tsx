import classNames from "classnames";
import { artists, modalSizes } from "../data";

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

const imageClasses = classNames(
  "mx-auto",
  "sm:max-h-[35dvh]",
  "md:max-h-[40dvh]",
  // "lg:max-h-[50dvh]",
  "xl:max-h-[70dvh]",
  // "max-w-xs",
  "sm:max-w-full",
  "rounded-box"
);

const FursuitCredits = () => {
  return (
    <>
      <ul className="my-4">
        {[
          {
            text: "Fursuit created by",
            link: artists.deleon.website,
            linkDisplay: artists.deleon.handle,
          },
          {
            text: "Fursuit beanie created by",
            link: artists.kitsuneshrine.website,
            linkDisplay: artists.kitsuneshrine.handle,
          },
          {
            text: "Fursuit kigurumi created by",
            link: artists.nekobit.bluesky,
            linkDisplay: artists.nekobit.handle,
          },
        ].map((credit, index) => (
          <li className="text-sm" key={index}>
            {`${credit.text} `}
            <a
              href={credit.link}
              className="text-secondary"
              target="_blank"
              rel="noopener"
            >
              {credit.linkDisplay}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export const ArtGallery = () => {
  const modalId = "modal_artGallery";
  const title = "Art Gallery";

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
    {
      src: "/images/oscii-halloween2024.webp",
      alt: "Halloween 2024 with Oscillo, SnowTrap and Milo",
      artist: artists.kareru.handle,
      artistUrl: artists.kareru.bluesky,
    },
    {
      src: "/images/oscii-lucy-gift-2025.webp",
      alt: "Gift for Lucy 2025",
      artist: artists.cyannocti.handle,
      artistUrl: artists.cyannocti.instagram,
    },
  ];

  return (
    <>
      <button
        className="btn btn-secondary btn-outline m-2 transition-all ease-in-out hover:scale-110"
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

          {/* <p className="max-sm:hidden mx-auto w-4/5 text-sm">
            To scroll horizontally on a non-touch screen device, move the cursor
            to the carousel, hold the <kbd className="kbd text-sm">shift</kbd>{" "}
            key and then use the scroll wheel.
          </p> */}

          {/* CAROUSEL COMPONENT */}
          {/* <div className={carouselClasses}>
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
          </div> */}

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

export const FursuitGallery = () => {
  const modalId = "modal_fursuitGallery";
  const title = "Fursuit Gallery";

  const galleryImages = [
    // {
    //   src: "/images/fursuit/image (14).webp",
    //   alt: "Just unboxed!",
    // },
    {
      src: "/images/fursuit/SAM01104.webp",
      alt: "Just a fan of the Rowlet line. ^v^",
    },
    {
      src: "/images/fursuit/001453170029.webp",
      alt: "Fullsuit in complete display!",
    },
    {
      src: "/images/fursuit/IMG_0234.webp",
      alt: "In full outfit!",
    },
  ];

  return (
    <>
      <button
        className="btn btn-secondary btn-outline m-2 transition-all ease-in-out hover:scale-110"
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
            To scroll horizontally on a non-touch screen device, move the cursor
            to the carousel, hold the <kbd className="kbd text-sm">shift</kbd>{" "}
            key and then use the scroll wheel.
          </p>
          <div className={carouselClasses}>
            <div className="carousel-item border border-primary rounded-xl px-4 md:max-w-[25dvw] max-sm:my-4 sm:me-4 mx-auto">
              <FursuitCredits />
            </div>
            <div className="carousel-item">
              <div className="mx-auto">
                <img
                  className={imageClasses}
                  src="/images/fursuit/image (14).webp"
                  // src="/images/fursuit/SAM01104.webp"
                  alt="Just unboxed!"
                />
                <p className="text-sm w-2/5 mx-auto">
                  One of the first photos taken after unboxing! Commissioned in
                  Dec 2022, arrived Jul 2023.
                </p>
                {/* <div className="max-sm:hidden">
                  <FursuitCredits />
                </div> */}
              </div>
            </div>
            {galleryImages.map((image, index) => (
              <div className="carousel-item" key={index}>
                <div>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={imageClasses}
                    loading="lazy"
                  />
                  <p className="text-sm">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </dialog>
    </>
  );
};
