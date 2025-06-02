import { FaTelegramPlane } from "react-icons/fa";
import { ArtGallery, FursuitGallery, Refs } from ".";
import { stickerPacks } from "../data";

const Art = () => {
  return (
    <>
      <div className="lg:mx-8">
        <ArtGallery />
        {/* <FursuitGallery /> */}
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

export default Art;
