import classNames from "classnames";
import { createElement, useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { FaTelegramPlane } from "react-icons/fa";
import "./App.css";
import {
  AboutOscillo,
  AboutSnowTrap,
  AboutMilo,
  ClipboardLink,
  Footer,
  Gallery,
  Refs,
  // Calendar,
} from "./components";
// import { ClipboardLink, Footer, Gallery, Refs, SiteHelmet } from "./components";
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
    "Uni Sensei",
    "Aspiring Educator",
    "INFP-T",
    "Galatians 5:13",
  ];

  return (
    <>
      <HelmetProvider>
        {/* <SiteHelmet /> */}

        <main
          className={classNames("transition-opacity", "ease-in-out", {
            "opacity-0": !loaded,
          })}
        >
          <div className="lg:flex">
            <div id="persona">
              <img src="/images/owl comm_stroke.webp" alt="Oscillo" />
              <h1 className="font-caveat">Oscillo Strix</h1>
              <p className="lg:mx-2">{briefs.join(" • ")}</p>
            </div>

            <div className="lg:flex-auto lg:mt-10">
              <Socials />

              <CopyLinks />

              <hr className="lg:w-5/6 mx-auto mt-6" />

              <Art />

              <hr className="lg:w-5/6 mx-auto mt-6" />

              <Lore />

              {/* <hr className="lg:w-5/6 mx-auto mt-6" />

              <MyCal /> */}

              <p className="text-gray-200">
                Calendar coming soon, fixing some bugs!
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </HelmetProvider>
    </>
  );
}

export default App;

const Socials = () => {
  return (
    <>
      <h2 className="mt-8">Let's keep in touch!</h2>
      {/* <p>Let's keep in touch!</p> */}

      <p id="socialIcons">
        {Object.keys(author.socials).map((socialKey, index) => (
          <a
            key={index}
            className="tooltip"
            data-tip={iconMap[socialKey].dataTip}
            href={author.socials[socialKey as keyof typeof author.socials]}
            target="_blank"
            rel="noopener"
          >
            {createElement(iconMap[socialKey].iconImport)}
          </a>
        ))}
      </p>
    </>
  );
};

const CopyLinks = () => {
  return (
    <>
      {/* <h3>Click any of the following to copy to clipboard.</h3> */}

      <p id="copyLinks">
        {Object.keys(author.friendCodes).map((codeType, index) => (
          <span
            key={index}
            // className="tooltip"
            // data-tip={iconMap[codeType].dataTip}
          >
            <ClipboardLink
              dataValue={
                author.friendCodes[codeType as keyof typeof author.friendCodes]
              }
              isButton={true}
            >
              {iconMap[codeType].dataTip}
            </ClipboardLink>
          </span>
        ))}
      </p>
    </>
  );
};

const Art = () => {
  return (
    <>
      <div className="lg:mx-8">
        <Gallery />
        <Refs />

        {stickerPacks.map((stickerLink, index) => (
          <a
            key={index}
            href={stickerLink.href}
            className="btn btn-accent btn-outline m-2"
            target="_blank"
            rel="noopener"
          >
            <FaTelegramPlane />
            {stickerLink.label}
          </a>
        ))}
      </div>
    </>
  );
};

const Lore = () => {
  return (
    <>
      <div className="lg:mx-8">
        <p>Almanac: Read more about my characters here - lore and shtuff!!</p>

        <AboutOscillo />
        <AboutSnowTrap />
        <AboutMilo />
      </div>
    </>
  );
};

// const MyCal = () => {
//   return (
//     <>
//       <div className="lg:mx-8">
//         {/* <p>Check out where I'll be going or where I've been for events here!</p> */}
//         <Calendar />
//       </div>
//     </>
//   );
// };
