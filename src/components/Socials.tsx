import { GameLinks } from ".";
import { author } from "../data";
import { GetIcon } from "../utils";

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
}

const Socials = () => {
  return (
    <>
      <h2 className="mt-8">Let's keep in touch!</h2>
      {/* <p>Let's keep in touch!</p> */}

      <p id="socialIcons">
        {/* {Object.keys(author.socials).map((socialKey, index) => (
          <a
            key={index}
            href={author.socials[socialKey as keyof typeof author.socials]}
            target="_blank"
            rel="noopener"
            >
            {createElement(iconMap[socialKey].iconImport)}
            </a>
            ))} */}

        {Object.keys(author.socials).map((socialKey, key) => (
          <a
            key={key}
            className="tooltip"
            data-tip={getTooltip(socialKey)}
            href={author.socials[socialKey as keyof typeof author.socials]}
            rel="noopener"
          >
            {GetIcon(socialKey)}
          </a>
        ))}
      </p>

      <GameLinks />
    </>
  );
};

export default Socials;
