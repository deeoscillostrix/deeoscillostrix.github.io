import {
  FaTelegram,
  FaDiscord,
  FaInstagram,
  FaBluesky,
  FaYoutube,
  FaTwitch,
  FaSteam,
  FaFacebookF,
} from "react-icons/fa6";
import { SiKofi } from "react-icons/si";

const GetIcon = (key: string) => {
  switch (key) {
    case "telegram":
      return <FaTelegram />;
    case "discord":
      return <FaDiscord />;
    case "instagram":
      return <FaInstagram />;
    case "bluesky":
      return <FaBluesky />;
    case "youtube":
      return <FaYoutube />;
    case "twitch":
      return <FaTwitch />;
    case "steam":
      return <FaSteam />;
    case "kofi":
      return <SiKofi />;
    case "facebook":
      return <FaFacebookF />;
    default:
      return "X";
  }
};

export default GetIcon;
