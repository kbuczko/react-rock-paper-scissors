import "./Step2.css";
import paper from "../../images/icon-paper.svg";
import scissors from "../../images/icon-scissors.svg";
import rock from "../../images/icon-rock.svg";
import {useEffect} from "react";

const Step2: React.FC<{
  userPick: string;
  housePick: string;
  onPlayAgain: () => void;
  updateScore: (value: number) => void;
}> = ({userPick, housePick, onPlayAgain, updateScore}) => {
  const getFigurePickImg = (value: string) => {
    switch (value) {
      case "paper":
        return paper;
      case "scissors":
        return scissors;
      case "rock":
        return rock;
    }
  };

  const hasUserWon = () => {
    if (userPick && housePick) {
      if (userPick === "paper" && housePick === "paper") {
        return "draw";
      }
      if (userPick === "paper" && housePick === "scissors") {
        return "lost";
      }
      if (userPick === "paper" && housePick === "rock") {
        return "won";
      }
      if (userPick === "scissors" && housePick === "paper") {
        return "won";
      }
      if (userPick === "scissors" && housePick === "scissors") {
        return "draw";
      }
      if (userPick === "scissors" && housePick === "rock") {
        return "lost";
      }
      if (userPick === "rock" && housePick === "paper") {
        return "lost";
      }
      if (userPick === "rock" && housePick === "scissors") {
        return "won";
      }
      if (userPick === "rock" && housePick === "rock") {
        return "draw";
      }
    }
  };

  const userChoice = getFigurePickImg(userPick);
  const houseChoice = getFigurePickImg(housePick);
  const result = hasUserWon();

  useEffect(() => {
    if (result === "won") {
      updateScore(1);
    } else if (result === "lost") {
      updateScore(-1);
    }
  }, [result]);

  return (
    <>
      <section className="choices__section">
        <div className="choices__user">
          <p>You picked</p>
          <img
            className="choices__figure"
            src={userChoice}
            alt="User's figure"
          />
        </div>
        {result && (
          <div className="result__wrapper">
            <span className="result__title">
              {result === "won"
                ? "You win"
                : result === "lost"
                ? "You lose"
                : "It is a draw"}
            </span>
            <button className="result__button" onClick={onPlayAgain}>
              Play again
            </button>
          </div>
        )}
        <div className="choices__house">
          <p>The house picked </p>
          <img
            className="choices__figure"
            src={houseChoice}
            alt="House's figure"
          />
        </div>
      </section>
      {result && (
        <div className="result__wrapper-mobile">
          <span className="result__title">
            {result === "won"
              ? "You win"
              : result === "lost"
              ? "You lose"
              : "It is a draw"}
          </span>
          <button className="result__button" onClick={onPlayAgain}>
            Play again
          </button>
        </div>
      )}
    </>
  );
};

export default Step2;
