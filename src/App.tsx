import classNames from "classnames";
import "./App.css";
import { Almanac, Art, Attendance, Footer } from "./components";
import Socials from "./components/Socials";

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
