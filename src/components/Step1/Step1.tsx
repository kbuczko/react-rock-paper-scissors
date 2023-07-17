import triangle from "../../images/bg-triangle.svg";
import paper from "../../images/icon-paper.svg";
import scissors from "../../images/icon-scissors.svg";
import rock from "../../images/icon-rock.svg";
import "./Step1.css";
import Figure from "../Figures/Figure";

const Step1 = () => {
  return (
    <section>
      <div className="figures__wrapper">
        <img className="figures__triangle" src={triangle} alt="" />
        <Figure img={paper} cssName="figures__paper" />
        <Figure img={scissors} cssName="figures__scissors" />
        <Figure img={rock} cssName="figures__rock" />
      </div>
    </section>
  );
};

export default Step1;
