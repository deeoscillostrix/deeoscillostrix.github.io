import { createElement } from "react";
// import { GameLinks } from ".";
import { author, iconMap, modalSizes } from "../data";
// import iconMap from "../data/iconMap";
// import { GetIcon } from "../utils";

/*
function getTooltip(key: string) {
  switch (key) {
    case "telegram":
      return "Telegram";
    case "discord":
      return "Discord";
    case "instagram":
      return "Instagram";
    case "bluesky":
      return "Bluesky";
    case "youtube":
      return "YouTube";
    case "twitch":
      return "Twitch";
    case "steam":
      return "Steam";
    case "kofi":
      return "Ko-fi";
    case "facebook":
      return "Facebook";
    default:
      return "";
  }
}*/

// const SocialsOld = () => {
//   return (
//     <>
//       <h2 className="mt-8">Let's keep in touch!</h2>

//       <p id="socialIcons">
//         {Object.keys(author.socials).map((socialKey, index) => (
//           <a
//             key={index}
//             className="tooltip"
//             // data-tip={getTooltip(socialKey)}
//             data-tip={iconMap[socialKey].dataTip}
//             href={author.socials[socialKey as keyof typeof author.socials]}
//             target="_blank"
//             rel="noopener"
//           >
//             {/* {GetIcon(socialKey)} */}
//             {createElement(iconMap[socialKey].iconImport)}
//           </a>
//         ))}
//       </p>

//       <GameLinks />
//     </>
//   );
// };

const Socials = () => {
  const modalId = "modal_socials";
  const title = "Socials";

  return (
    <>
      <button
        className="btn btn-primary btn-outline m-2 transition-all ease-in-out hover:scale-110"
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
        <div className={modalSizes.small}>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <h3>{title}</h3>

          <div className="lg:w-5/6 mx-auto">
            {/* <p>Let's keep in touch!</p> */}
            <p>You can connect with me here!</p>

            <p id="socialIcons">
              {Object.keys(author.socials).map((socialKey, index) => (
                <a
                  key={index}
                  className="tooltip"
                  // data-tip={getTooltip(socialKey)}
                  data-tip={iconMap[socialKey].dataTip}
                  href={
                    author.socials[socialKey as keyof typeof author.socials]
                  }
                  target="_blank"
                  rel="noopener"
                >
                  {/* {GetIcon(socialKey)} */}
                  {createElement(iconMap[socialKey].iconImport)}
                </a>
              ))}
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Socials;
