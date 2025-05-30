import { createElement } from "react";
import { GameLinks } from ".";
import { author, iconMap } from "../data";
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

const Socials = () => {
  return (
    <>
      <h2 className="mt-8">Let's keep in touch!</h2>

      <p id="socialIcons">
        {Object.keys(author.socials).map((socialKey, index) => (
          <a
            key={index}
            className="tooltip"
            // data-tip={getTooltip(socialKey)}
            data-tip={iconMap[socialKey].dataTip}
            href={author.socials[socialKey as keyof typeof author.socials]}
            target="_blank"
            rel="noopener"
          >
            {/* {GetIcon(socialKey)} */}
            {createElement(iconMap[socialKey].iconImport)}
          </a>
        ))}
      </p>

      <GameLinks />
    </>
  );
};

export default Socials;
