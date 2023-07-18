import {useState} from "react";
import "./App.css";
import RulesModal from "./components/Rules/Modal/RulesModal";
import Score from "./components/Score/Score";
import Step1 from "./components/Step1/Step1";
import Step2 from "./components/Step2/Step2";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedFigure, setSelectedFigure] = useState({
    value: "",
    isPicked: false,
  });
  const [houseChoiceFigure, setHouseChoiceFigure] = useState("");

  const randHouseChoice = () => {
    return Math.floor(Math.random() * 3);
  };

  const getPickBasedOnNumber = (value: number) => {
    switch (value) {
      case 0:
        return "paper";
      case 1:
        return "scissors";
      case 2:
        return "rock";
    }
  };

  const handlePickFigure = (value: string) => {
    const splittedValue = value.split("__");
    setSelectedFigure({value: splittedValue[1], isPicked: true});
    const randedHouseChoice = randHouseChoice();
    const houseChoice = getPickBasedOnNumber(randedHouseChoice) as string;
    setHouseChoiceFigure(houseChoice);
  };

  const handlePlayAgain = () => {
    setHouseChoiceFigure("");
    setSelectedFigure({value: "", isPicked: false});
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleUpdateScore = (number: number) => {
    setScore(score + number);
  };

  return (
    <>
      {isModalOpen && <RulesModal onCloseModal={handleCloseModal} />}
      <Score score={score} />
      {!selectedFigure.isPicked && <Step1 onPickFigure={handlePickFigure} />}
      {selectedFigure.isPicked && (
        <Step2
          userPick={selectedFigure.value}
          housePick={houseChoiceFigure}
          onPlayAgain={handlePlayAgain}
          updateScore={handleUpdateScore}
        />
      )}
      <div className="rules__wrapper">
        <button className="rules__button" onClick={handleOpenModal}>
          Rules
        </button>
      </div>
    </>
  );
}

export default App;
