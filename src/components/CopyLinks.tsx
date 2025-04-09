import { author, iconMap } from "../data";
import ClipboardLink from "./ClipboardLink";

const CopyLinks = () => {
  const modalId = "modal_copyLinks";
  const title = "Game Links";

  return (
    <>
      <button
        className="btn btn-primary btn-outline m-2"
        onClick={() => {
          const modal = document.querySelector(
            `#${modalId}`
          ) as HTMLDialogElement;
          modal!.showModal();
        }}
      >
        Game Links
      </button>
      <dialog id={modalId} className="modal">
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
        <div className="modal-box w-full lg:w-3/4 xl:w-5/12 max-w-7xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <h3>{title}</h3>

          <div className="lg:w-5/6 mx-auto">
            <p>Click any of the following to copy to clipboard.</p>

            {/* <p id="copyLinks"> */}
            <p>
              {Object.keys(author.friendCodes).map((codeType, index) => (
                <span
                  key={index}
                  // className="tooltip"
                  // data-tip={iconMap[codeType].dataTip}
                >
                  <ClipboardLink
                    dataValue={
                      author.friendCodes[
                        codeType as keyof typeof author.friendCodes
                      ]
                    }
                    isButton={true}
                  >
                    {iconMap[codeType].dataTip}
                  </ClipboardLink>
                </span>
              ))}
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default CopyLinks;
