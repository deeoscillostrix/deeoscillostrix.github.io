import { createElement } from "react";
import { MyModal } from ".";
import { author, iconMap } from "../data";

const Socials = () => {
  const modalId = "modal_socials";
  const title = "Socials";

  return (
    <>
      <MyModal modalId={modalId} title={title}>
        {/* <p>Let's keep in touch!</p> */}
        <p>You can connect with me here to find out what I'm up to!</p>

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
      </MyModal>
    </>
  );
};

export default Socials;
