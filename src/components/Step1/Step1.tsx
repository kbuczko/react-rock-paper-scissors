import triangle from "../../images/bg-triangle.svg";
import paper from "../../images/icon-paper.svg";
import scissors from "../../images/icon-scissors.svg";
import rock from "../../images/icon-rock.svg";
import "./Step1.css";
import Figure from "../Figures/Figure";

const Step1: React.FC<{onPickFigure: (value: string) => void}> = ({
  onPickFigure,
}) => {
  return (
    <section>
      <div className="figures__wrapper">
        <img
          className="figures__triangle"
          src={triangle}
          alt="Figures background"
        />
        <Figure
          img={paper}
          cssName="figures__paper"
          onPickFigure={onPickFigure}
        />
        <Figure
          img={scissors}
          cssName="figures__scissors"
          onPickFigure={onPickFigure}
        />
        <Figure
          img={rock}
          cssName="figures__rock"
          onPickFigure={onPickFigure}
        />
      </div>
    </section>
  );
};

export default Step1;
