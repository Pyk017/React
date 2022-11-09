import { cardType } from "../utils/CardData";
import { randomGradient } from "../utils/RandomGradients";

const SingleCard = ({
  card,
  handleCardClick,
  flipped,
}: {
  card: cardType;
  handleCardClick: any;
  flipped: boolean;
}) => {
  return (
    <div
      className={`_card ${flipped ? "flipped" : ""}`}
      style={{ background: randomGradient() }}
      onClick={() => handleCardClick(card)}
    >
      <img src={card.src} alt="card front" className="front" />
      <div className="back"></div>
    </div>
  );
};

export default SingleCard;
