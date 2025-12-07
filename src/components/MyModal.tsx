import type { ReactNode } from "react";
import { modalSizes } from "../data";

const MyModal = ({
  modalId,
  title,
  btnStyle = "btn-primary",
  modalSize = "small",
  showTitle = true,
  children,
}: {
  modalId: string;
  title: string;
  btnStyle?: string;
  modalSize?: string;
  showTitle?: boolean;
  children: ReactNode;
}) => {
  let ms = "";
  switch (modalSize) {
    case "small":
      ms = modalSizes.small;
      break;
    case "large":
      ms = modalSizes.large;
      break;
    default:
      ms = modalSizes.small;
  }

  return (
    <>
      <button
        className={`btn ${btnStyle} btn-outline m-2 transition-all ease-in-out hover:scale-110`}
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
        {/* <div className={modalSizes.small}> */}
        <div className={ms}>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          {/* if showTitle is false, the title will not show on top of the modal */}
          {showTitle && <h3>{title}</h3>}

          <div className="lg:w-5/6 mx-auto">{children}</div>
        </div>
      </dialog>
    </>
  );
};

export default MyModal;
