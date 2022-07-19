import "./Need.scss";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { ImStatsBars } from "react-icons/im";
import { Link } from "react-router-dom";

const New = () => {
  return (
    <div className="app__need">
      <p>Need Support?</p>
      <div className="need__container">
        <Link to="/">
          <div className="need">
            <AiOutlineQuestionCircle />
            Account Help (FAQs)
          </div>
        </Link>
        <Link to="/">
          <div className="need">
            <ImStatsBars />
            Ask a Course-Related Question
          </div>
        </Link>
      </div>
    </div>
  );
};

export default New;
