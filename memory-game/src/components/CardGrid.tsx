import { useCardsContext, CardsContextProps } from "../contexts/CardsContext";
import { cardType } from "../utils/CardData";
import SingleCard from "./SingleCard";
import { useState, useEffect } from "react";

const CardGrid = ({ setTurns }: { setTurns: React.Dispatch<any> }) => {
  const { cards, changeStatus } = useCardsContext() as CardsContextProps;
  const [choiceOne, setChoiceOne] = useState<cardType | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<cardType | null>(null);
  const [disableGrid, setDisableGrid] = useState(false);

  const handleCardClick = (card: cardType) => {
    if (disableGrid || card.matched || choiceTwo) return;
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const flipped = (card: cardType) => {
    return (
      choiceOne?.unique_id === card.unique_id ||
      choiceTwo?.unique_id === card.unique_id ||
      card.matched
    );
  };

  useEffect(() => {
    if (!choiceTwo || !choiceOne) return;

    setDisableGrid(true);

    if (choiceOne.id === choiceTwo.id) {
      changeStatus(choiceOne.id);
      resetCards();
    } else {
      setTimeout(() => resetCards(), 1000);
    }
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [choiceOne, choiceTwo]);

  const resetCards = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurn: number) => prevTurn + 1);
    setDisableGrid(false);
  };

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
