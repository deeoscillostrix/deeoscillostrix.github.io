import { createElement } from "react";
import { MyModal } from ".";
import { author, iconMap } from "../data";
import attendance from "../data/conAttendance";

// show texting socials only for 2 weeks after a recently completed event ends
function displayTextingSocials(): boolean {
  const today = new Date();
  const conAttendance = attendance[today.getFullYear()];

  // if no attendance data
  if (!conAttendance) return false;

  // iterate through each convention attendance in the year
  for (let currentCon of conAttendance) {
    // obtain
    const startDate = new Date(currentCon.startDate);
    const originalEndDate = new Date(currentCon.endDate);

    // obtain the last date 14 days after the con ends
    // end date is always the last day at 23:59:59, so add 14 days and 1 second
    const extendedEndDate = new Date(originalEndDate);
    extendedEndDate.setDate(extendedEndDate.getDate() + 14);
    extendedEndDate.setSeconds(extendedEndDate.getSeconds() + 1);

    if (startDate <= today && today <= extendedEndDate) return true;
  }

  return false;
}

const Socials = () => {
  const modalId = "modal_socials";
  const title = "Socials";

  return (
    <>
      <MyModal modalId={modalId} title={title}>
        {/* <p>Let's keep in touch!</p> */}
        <p>You can connect with me here to find out what I'm up to!</p>

        <p id="socialIcons">
          {Object.keys(author.socials)
            .filter((socialKey) => {
              // only show Telegram and Discord contacts if within convention time or 14 days after convention ends
              return ["telegram", "discord"].includes(socialKey)
                ? displayTextingSocials()
                : true;
            })
            .map((socialKey) => {
              const config = iconMap[socialKey];

              return (
                <a
                  key={socialKey}
                  className="tooltip"
                  data-tip={config.dataTip}
                  href={
                    author.socials[socialKey as keyof typeof author.socials]
                  }
                  target="_blank"
                  rel="noopener"
                >
                  {createElement(config.iconImport)}
                </a>
              );
            })}
        </p>
      </MyModal>
    </>
  );
};

export default Socials;
