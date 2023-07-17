import {useState} from "react";
import "./App.css";
import RulesModal from "./components/Rules/Modal/RulesModal";
import Score from "./components/Score/Score";
import Step1 from "./components/Step1/Step1";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {isModalOpen && <RulesModal onCloseModal={handleCloseModal} />}
      <Score />
      <Step1 />
      <div className="rules__wrapper">
        <button className="rules__button" onClick={handleOpenModal}>
          Rules
        </button>
      </div>
    </>
  );
}

export default App;
