import classNames from "classnames";
import React from "react";
import { HandleClipboardCopy, MyModal } from ".";
import { artists } from "../data";

const PaletteButtons = ({ palette }: { palette: string[] }) => {
  return (
    <div
      className={classNames(
        `mx-auto mb-4 grid grid-cols-3 gap-4 sm:grid-cols-4 lg:w-5/6`,
        `md:grid-cols-7`,
      )}
    >
      {palette.map((paletteColor, key) => (
        <button
          {...{
            key,
            style: {
              backgroundColor: paletteColor,
              outlineColor: `${paletteColor}`,
            },
            "data-tip": paletteColor.toUpperCase(),
            onClick: () => HandleClipboardCopy(paletteColor.toUpperCase()),
          }}
          className="btn btn-sm tooltip mx-auto h-15 w-25 border-none transition ease-in-out hover:scale-110 focus-visible:outline-2"
        ></button>
      ))}
    </div>
  );
};

const Refs = () => {
  const modalId = "modal_refs";
  const title = "Character Refs";

  const tabGroupName = "tabs-refs";

  interface RefImage {
    src: string;
    alt: string;
    download: string;
    artist: string;
    artistUrl: string;
    palette?: string[];
  }

  const osciiRefs: RefImage[] = [
    {
      src: "/images/ref-oscii.webp",
      alt: "Oscillo's Ref",
      download: "/images/ref-oscii.png",
      artist: artists.eunalis.handle,
      artistUrl: artists.eunalis.fiverr,
      palette: [
        "#dca978",
        "#f3f0dc",
        "#89623d",
        "#00a879",
        "#ffe002",
        "#e38d37",
        // "#1b603d",
        // "#063a20",
      ],
    },
    {
      src: "/images/ref-kidoscii.webp",
      alt: "Kid Oscillo's Ref",
      download: "/images/ref-kidoscii.png",
      artist: artists.eunalis.handle,
      artistUrl: artists.eunalis.fiverr,
      palette: [
        "#a7886b",
        "#fff4e3",
        "#59a482",
        "#fb9e00",
        "#ffe002",
        "#e38d37",
        // "#733229",
        // "#ac4a3d",
      ],
    },
    {
      src: "/images/ref-teenoscii.webp",
      alt: "Teen Oscillo's Ref",
      download: "/images/ref-teenoscii.png",
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
    // {
    //   src: "/images/ref-oscii-cheekysonas.webp",
    //   alt: "Oscillo's Alt Ref",
    //   download: "/images/ref-oscii-cheekysonas.png",
    //   artist: artists.cheekysonas.handle,
    //   artistUrl: artists.cheekysonas.website,
    //   palette: [
    //     "#fcec6b",
    //     "#ff8331",
    //     "#836443",
    //     "#f3f0de",
    //     "#d4ab7f",
    //     "#4ba57c",
    //   ],
    // },
    {
      src: "/images/ref-osciioutfits.webp",
      alt: "Oscillo's Outfit Ref",
      download: "/images/ref-osciioutfits.png",
      artist: artists.orlandofox.handle,
      artistUrl: artists.orlandofox.website,
    },
    {
      src: "/images/ref-osciioutfits2.webp",
      alt: "Oscillo's Outfit Ref Add-ons",
      download: "/images/ref-osciioutfits2.png",
      artist: artists.orlandofox.handle,
      artistUrl: artists.orlandofox.website,
    },
  ];

  const snowtrapRefs: RefImage[] = [
    {
      src: "/images/ref-snowtrap.webp",
      alt: "SnowTrap's Ref",
      download: "/images/ref-snowtrap.png",
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
  ];

  const miloRefs: RefImage[] = [
    {
      src: "/images/ref-milo.webp",
      alt: "Milo's Ref",
      download: "/images/ref-milo.png",
      artist: artists.cheekysonas.handle,
      artistUrl: artists.cheekysonas.website,
      palette: [
        "#ff4f2e",
        "#e82b16",
        "#fff152",
        "#ffb234",
        "#1a1a1a",
        "#cfcfcf",
        "#ff8d40",
        "#ffb946",
        "#33ff59",
        "#00d740",
      ],
    },
  ];

  // const refImages: RefImage[] = [
  //   ...osciiRefs, ...snowtrapRefs, ...miloRefs
  // ];

  function DisplayRef(image: RefImage) {
    function DisplayRefImage() {
      return (
        <>
          <div className="galleryDisplay">
            <div className="imgContainer">
              <img src={image.src} alt={image.alt} loading="lazy" />
            </div>
          </div>
        </>
      );
    }

    function DisplayRefCredits() {
      return (
        <p className="mt-2 mb-4">
          {`${image.alt} by `}
          <a
            {...{
              href: image.artistUrl,
              target: "_blank",
              rel: "noopener",
            }}
            className="hover:text-primary"
          >
            {image.artist}
          </a>
          <span className="text-primary ms-2">
            <a
              {...{ href: image.download, target: "_blank" }}
              className="btn btn-sm btn-accent py-3! text-white transition-all duration-150 ease-in-out hover:scale-110 focus:scale-110"
            >
              Download
            </a>
          </span>
        </p>
      );
    }

    return (
      <>
        <DisplayRefImage />
        <DisplayRefCredits />
        {"palette" in image && <PaletteButtons palette={image.palette!} />}
      </>
    );
  }

  return (
    <>
      <MyModal
        {...{ modalId, title, btnStyle: "btn-secondary", modalSize: "large" }}
      >
        <div className="tabs tabs-box border-primary bg-amber-50">
          {[
            {
              ariaLabel: "Oscillo 🦉",
              refs: osciiRefs,
            },
            {
              ariaLabel: "SnowTrap ❄️",
              refs: snowtrapRefs,
            },
            {
              ariaLabel: "Milo 🔥",
              refs: miloRefs,
            },
          ].map((character, index) => (
            <React.Fragment key={index}>
              <input
                {...{ type: "radio", name: tabGroupName }}
                className="tab text-primary me-1 shadow-md"
                aria-label={character.ariaLabel}
                defaultChecked={index == 0}
              />
              <div className="tab-content bg-base-100 border-base-300 text-primary max-h-[75dvh] overflow-y-auto p-4">
                {character.refs.map((image, index) => (
                  <>
                    <div className="galleryDisplay">
                      <DisplayRef {...{ key: index, ...image }} />
                    </div>
                    {index < character.refs.length - 1 && <hr />}
                  </>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* {refImages.map((image, index) => (
          <div key={index} className="galleryDisplay">
            <div className="imgContainer">
              <img src={image.src} alt={image.alt} loading="lazy" />
            </div>
            <p className="mt-2 mb-4">
              {image.alt} by{" "}
              <a
                {...{
                  href: image.artistUrl,
                  target: "_blank",
                  rel: "noopener",
                }}
                className="hover:text-primary"
              >
                {image.artist}
              </a>
              <span className="text-primary ms-2">
                <a
                  {...{ href: image.download, target: "_blank" }}
                  className="btn btn-sm btn-accent py-3! text-white transition-all duration-150 ease-in-out hover:scale-110 focus:scale-110"
                >
                  Download
                </a>
              </span>
            </p>
            {"palette" in image && <PaletteButtons palette={image.palette!} />}
            {index < refImages.length - 1 && <hr />}
          </div>
        ))} */}
      </MyModal>
    </>
  );
};

export default Refs;
