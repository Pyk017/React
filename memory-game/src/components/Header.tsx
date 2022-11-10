import { useCardsContext, CardsContextProps } from "../contexts/CardsContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Stack } from "react-bootstrap";
import useLocalStorage, { LocalStorageState } from "../hooks/useLocalStorage";
import {
  useThemeContext,
  ThemeContextProps,
  ACTIONS,
} from "../contexts/ThemeContext";

const Header = ({
  setTurns,
  turns,
}: {
  setTurns: React.Dispatch<React.SetStateAction<number>>;
  turns: number;
}) => {
  const { resetCards, isAllMatched } = useCardsContext() as CardsContextProps;
  const { value, setValue, getLocalStorage } = useLocalStorage(
    "TURNS",
    turns
  ) as LocalStorageState;
  const { dispatch } = useThemeContext() as ThemeContextProps;

  const handleClick = () => {
    resetCards();
    setTurns(0);
    if (isAllMatched()) {
      let prevRecord = getLocalStorage();

      if (prevRecord > turns) setValue(turns);
    }
  };

  return (
    <>
      <Stack className="main-header justify-content-center align-items-center">
        <h2>Memory Game</h2>
        <Form className="">
          <Form.Check
            type="switch"
            label="Toggle Theme"
            onChange={() => dispatch(ACTIONS.TOGGLE)}
          />
        </Form>
      </Stack>
      <Stack
        className="mid-section justify-content-evenly"
        direction="horizontal"
      >
        <div className="total-turns fs-5 d-flex align-items-center flex-column">
          <div className="lable">Turns</div>
          <div className="data">{turns}</div>
        </div>
        <Button variant="primary" onClick={handleClick}>
          New Game
        </Button>
        <div className="best-score fs-5 d-flex align-items-center flex-column">
          <div className="lable">Best Score</div>
          <div className="data">{value}</div>
        </div>
      </Stack>
    </>
  );
};

export default Header;
