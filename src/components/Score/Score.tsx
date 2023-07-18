import "./Score.css";

const Score: React.FC<{score: number}> = ({score}) => {
  return (
    <header className="score__header">
      <div className="score__figures">
        <span>Rock</span>
        <span>Paper</span>
        <span>Scissors</span>
      </div>
      <div className="score__card">
        <span className="score__card__title">Score</span>
        <span className="score__card__points">{score}</span>
      </div>
    </header>
  );
};

export default Score;
