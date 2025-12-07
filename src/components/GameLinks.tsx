import { ClipboardLink, MyModal } from ".";
import { author } from "../data";

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
    <MyModal modalId={modalId} title={title}>
      <p>Click any of the following to copy to clipboard.</p>

      <p>
        {Object.keys(author.friendCodes).map((codeType, index) => (
          <span key={index}>
            <ClipboardLink
              dataValue={
                author.friendCodes[codeType as keyof typeof author.friendCodes]
              }
              isButton={true}
            >
              {getGameName(codeType)}
            </ClipboardLink>
          </span>
        ))}
      </p>
    </MyModal>
  );
};

export default GameLinks;
