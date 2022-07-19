import "./LatestAccomplishment.scss";
import { GiLaurelsTrophy, GiDiamondTrophy } from "react-icons/gi";

const LatestAccomplishment = () => {
  return (
    <div className="latest-accomplishment">
      {/* header */}
      <div className="latest-accomplishment__header">
        <p>Latest Accomplishment</p>
      </div>
      {/* main--header */}
      <div className="latest-accomplishment__main">
        <div className="latest-accomplishment__main__container">
          <div className="latest-accomplishment__main__container__item">
            <div className="latest-accomplishment__main__container__item__header">
              <p className="latest__icon">
                <GiLaurelsTrophy />
              </p>
              {/* description  */}
              <p className="latest-accomplishment__main__container__item__description">
                <span>Ace</span>
                Achieve an exam score 100% on a test assessment
              </p>
            </div>
          </div>
          <div className="latest-accomplishment__main__container__item">
            <div className="latest-accomplishment__main__container__item__header">
              <p className="latest__icon">
                <GiDiamondTrophy />
              </p>
              {/* description  */}
              <p className="latest-accomplishment__main__container__item__description">
                <span>Honor Roll</span>
                Achieve an exam score 100% on three test assessments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestAccomplishment;
