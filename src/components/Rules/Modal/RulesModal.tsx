import "./RulesModal.css";
import rules from "../../../images/image-rules.svg";
import close from "../../../images/icon-close.svg";

const RulesModal: React.FC<{onCloseModal: () => void}> = ({onCloseModal}) => {
  return (
    <div className="modal__overlay">
      <div className="modal__wrapper">
        <div className="modal__header">
          <span className="modal__title">RULES</span>
          <div className="modal__close">
            <button onClick={onCloseModal}>
              <img src={close} alt="Close modal" />
            </button>
          </div>
        </div>
        <div className="modal__rules">
          <img src={rules} alt="Rules " />
        </div>
        <div className="modal__close modal__footer">
          <button onClick={onCloseModal}>
            <img src={close} alt="Close modal" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RulesModal;
