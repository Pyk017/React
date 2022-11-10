import shuffleCards, { cardType } from "../utils/CardData";
import { createContext, useContext, useState } from "react";

export interface CardsContextProps {
  cards: cardType[];
  changeStatus: (id: string) => void;
  resetCards: () => void;
  isAllMatched: () => boolean;
}

export const CardsContext = createContext<CardsContextProps | null>(null);

export function useCardsContext() {
  return useContext(CardsContext);
}

const CardsContextProvider = ({ children }: React.PropsWithChildren) => {
  const [cards, setCards] = useState(shuffleCards);

  const changeStatus = (id: string): void => {
    setCards((prevCards: cardType[]) => {
      return prevCards.map((card: cardType) => {
        if (card.id === id) return { ...card, matched: !card.matched };
        return card;
      });
    });
  };

  const resetCards = (): void => {
    setCards(shuffleCards());
  };

  const isAllMatched = (): boolean => {
    return cards.every((card: cardType) => card.matched);
  };

  return (
    <CardsContext.Provider
      value={
        { cards, changeStatus, resetCards, isAllMatched } as CardsContextProps
      }
    >
      {children}
    </CardsContext.Provider>
  );
};

export default CardsContextProvider;
