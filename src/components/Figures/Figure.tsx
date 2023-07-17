import "./Figure.css";

const Figure = ({img, cssName}) => {
  return (
    <button className={cssName}>
      <img src={img} alt="" />
    </button>
  );
};

export default Figure;
