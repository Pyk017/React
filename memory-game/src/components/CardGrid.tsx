import { useCardsContext, CardsContextProps } from "../contexts/CardsContext";
import { cardType } from "../utils/CardData";
import SingleCard from "./SingleCard";
import { useState } from "react";

const CardGrid = () => {
  const { cards } = useCardsContext() as CardsContextProps;

  const [choiceOne, setChoiceOne] = useState<cardType | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<cardType | null>(null);

  const handleCardClick = (card: cardType) => {
    console.log("init");
    if (choiceTwo) return;
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const flipped = (card: cardType) => {
    return (
      choiceOne?.unique_id === card.unique_id ||
      choiceTwo?.unique_id === card.unique_id ||
      card.matched
    );
  };

  console.log(choiceOne, choiceTwo);

  return (
    <div className="card-grid">
      {cards.map((card: cardType, idx) => {
        return (
          <SingleCard
            key={idx}
            card={card}
            handleCardClick={handleCardClick}
            flipped={flipped(card)}
          />
        );
      })}
    </div>
  );
};

export default CardGrid;
