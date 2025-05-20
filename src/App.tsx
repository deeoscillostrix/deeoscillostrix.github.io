import classNames from "classnames";
import { FaTelegramPlane } from "react-icons/fa";
import "./App.css";
import { Almanac, Attendance, Footer, Gallery, Refs } from "./components";
import Socials from "./components/Socials";
import { stickerPacks } from "./data";

function App() {
  const briefs = [
    "Stilt Owl",
    "Uni Sensei",
    "Aspiring Educator",
    "INFP-T",
    "Galatians 5:13",
  ];
  const hrClasses = classNames(
    // "mx-auto",
    // "mt-4",
    "lg:w-5/6"
    // "border-[#e5e7eb]"
  );

  return (
    <>
      <main>
        <div className="lg:flex">
          <div id="persona">
            <img src="/images/owl comm_stroke.webp" alt="Oscillo" />
            <h1 className="font-caveat">Oscillo Strix</h1>
            <p className="lg:mx-2">{briefs.join(" • ")}</p>
          </div>

          <div className="lg:flex-auto lg:mt-10">
            <Socials />
            <Attendance />
            {/* <Socials />
              <Attendance /> */}

            <hr className={hrClasses} />

            <Art />

            <hr className={hrClasses} />

            <Almanac />

            {/* <hr className="lg:w-5/6 mx-auto mt-6" />

              <MyCal /> */}

            {/* <p className="text-gray-400 lg:w-3/4 mx-auto">
                Calendar coming soon, last implementation had a run in with
                Cross Site Tracking Prevention on Safari web browsers. 🥲
              </p> */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;

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
