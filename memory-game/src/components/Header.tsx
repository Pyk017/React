import { useCardsContext, CardsContextProps } from "../contexts/CardsContext";
import Button from "react-bootstrap/Button";

const Header = () => {
  const { resetCards } = useCardsContext() as CardsContextProps;

  return (
    <>
      <h2>Memory Game</h2>
      <Button variant="primary" onClick={resetCards}>
        New Game
      </Button>
    </>
  );
};

export default Header;
