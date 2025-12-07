import { useEffect, useState, type ReactNode } from "react";
import { modalSizes } from "../data";

// Refactored modal to adhere to latest DaisyUI practices without using dialogs or direct DOM access
// Assisted by ChatGPT
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
  const [open, setOpen] = useState(false);
  const modalSizeClass =
    modalSizes[modalSize as keyof typeof modalSizes] ?? modalSizes.small;

  // ESC key to close modal
  useEffect(() => {
    if (!open) return;

    const handleEsc = (e: KeyboardEvent) => {
      e.key === "Escape" && setOpen(false);
    };

    window.addEventListener("keydown", handleEsc);

    // Clean up
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  return (
    <>
      <button
        className={`btn ${btnStyle} btn-outline m-2 transition-all ease-in-out hover:scale-110`}
        onClick={() => setOpen(true)}
      >
        {title}
      </button>
      <div id={modalId} className={`modal ${open ? "modal-open" : ""}`}>
        <div className={`modal-box ${modalSizeClass}`}>
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          {/* if showTitle is false, the title will not show on top of the modal */}
          {showTitle && <h3>{title}</h3>}

          {/* modal viewable content goes in here */}
          <div className="lg:w-5/6 mx-auto">{children}</div>
        </div>

        {/* backdrop (click = close) */}
        <div className="modal-backdrop" onClick={() => setOpen(false)} />
      </div>
    </>
  );
};

export default MyModal;
