import "./Figure.css";

const Figure: React.FC<{
  img: string;
  cssName: string;
  onPickFigure: (name: string) => void;
}> = ({img, cssName = "", onPickFigure}) => {
  return (
    <button
      className={cssName}
      onClick={() => {
        onPickFigure(cssName);
      }}
    >
      <img src={img} alt="Figure" />
    </button>
  );
};

export default Figure;
