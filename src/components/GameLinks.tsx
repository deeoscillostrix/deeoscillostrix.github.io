import { ClipboardLink } from ".";
import { author, modalSizes } from "../data";

const getGameName = (codeType: string) => {
  switch (codeType) {
    case "switch":
      return "Switch Friend Code";
    case "pokemonGo":
      return "Pokémon GO";
    case "pokemonSleep":
      return "Pokémon Sleep";
    case "pokemonTCGP":
      return "Pokémon TCGP";
    default:
      return codeType;
  }
};

const GameLinks = () => {
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
                    {/* {iconMap[codeType].dataTip} */}
                    {getGameName(codeType)}
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

export default GameLinks;
