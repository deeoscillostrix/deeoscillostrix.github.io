import { MyModal } from ".";
import { artists, author } from "../data";

const FursuitCredits = () => {
  return (
    <>
      <ul className="my-4">
        {[
          {
            text: "Fursuit created by",
            link: artists.deleon.website,
            linkDisplay: artists.deleon.handle,
            logo: "/images/logo-deleon.webp",
          },
          {
            text: "Fursuit beanie created by",
            link: artists.kitsuneshrine.website,
            linkDisplay: artists.kitsuneshrine.handle,
            logo: "/images/logo-kitsuneshrine.webp",
          },
          {
            text: "Fursuit kigurumi created by",
            link: artists.nekobit.bluesky,
            linkDisplay: artists.nekobit.handle,
            logo: "/images/logo-nekobit.webp",
          },
        ].map((credit, index) => (
          <li className="text-sm" key={index}>
            {credit.logo && (
              <div className="mt-4">
                <img
                  src={credit.logo}
                  alt={credit.linkDisplay}
                  className="w-36 inline-block rounded-full"
                />
              </div>
            )}
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
      <MyModal
        modalId={modalId}
        title={title}
        btnStyle="btn-secondary"
        modalSize="large"
      >
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
      </MyModal>
    </>
  );
};

export const FursuitGallery = () => {
  const modalId = "modal_fursuitGallery";
  const title = "Fursuit Gallery";

  const galleryImages = [
    {
      src: "/images/fursuit/image (14).webp",
      alt: "Just unboxed! Commissioned Deleon Fursuits in Dec 2022, arrived Jul 2023. ^v^",
    },
    {
      src: "/images/fursuit/SAM01104.webp",
      alt: "Just a fan of the Rowlet line. ^v^",
    },
    {
      src: "/images/fursuit/IMG_6353.webp",
      alt: "This was during my first time fursuiting in public.. it was hot, but I loved it! ^v^",
    },
    {
      src: "/images/fursuit/001453170029.webp",
      alt: "Fullsuit in complete display!",
    },
    {
      src: "/images/fursuit/20240707_172652544_iOS.webp",
      alt: "Hoot hoot! You got mail! 📨",
    },
    {
      src: "/images/fursuit/DSC06109.webp",
      alt: "Just smile and wave! ^v^",
    },
    {
      src: "/images/fursuit/IMG_0234.webp",
      alt: "In full outfit!",
    },
    {
      src: "/images/fursuit/IMG_0850.webp",
      alt: "What can I say, I lean on the wall a lot for photos.. 😂",
    },
    {
      src: "/images/fursuit/IMG_0760.webp",
      alt: "Merry Christmas! 🎄",
    },
    {
      src: "/images/fursuit/IMG_2550.webp",
      alt: "Welcome to Mekdi, may I take your order?",
    },
    {
      src: "/images/fursuit/_MAY1722.webp",
      alt: "Hi there! In LIFC 2025, I now have a mailman bag! ^v^",
    },
  ];

  return (
    <>
      <MyModal
        modalId={modalId}
        title={title}
        btnStyle="btn-secondary"
        modalSize="large"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-center">
            <FursuitCredits />
          </div>
          {galleryImages.map((image, index) => (
            <div key={index} className="galleryDisplay">
              <div className="imgContainer">
                <img src={image.src} alt={image.alt || ""} loading="lazy" />
              </div>
              <span className="text-sm">
                {index === 0 && (image.alt || "")}
              </span>
            </div>
          ))}
        </div>

        <div>
          <a
            className="btn btn-accent btn-outline m-2 transition-all ease-in-out hover:scale-110"
            href={author.socials.furtrack}
            target="_blank"
          >
            More photos on FurTrack!
          </a>
        </div>
      </MyModal>
    </>
  );
};
